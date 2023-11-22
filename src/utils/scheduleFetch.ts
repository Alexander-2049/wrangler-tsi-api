import { Lecture } from "../types/Lecture";
import { RouterProps } from "../types/RouterProps";
import getScheduleFromHTML from "./getScheduleFromHTML";
import scheduleMinify from "./scheduleMinify";
import scheduleUnminify from "./scheduleUnminify";

interface IFetchAndHandleScheduleResult {
  schedule: Lecture[];
  updated: boolean;
  lastScheduleFetch: string;
  groups: string[];
}

async function getCachedScheduleAndGroups(STORAGE: any): Promise<IFetchAndHandleScheduleResult | undefined> {
  const lastScheduleFetch = await STORAGE.get('lastScheduleFetch');
  
  if (lastScheduleFetch) {
    const cachedLastScheduleFetch = new Date(lastScheduleFetch);
    const now = new Date();
    const diff = now.getTime() - cachedLastScheduleFetch.getTime();
    const minutes = Math.floor(diff / 1000 / 60);
    
    if (minutes < 45) {
      const schedule = await STORAGE.get('schedule');
      const groups = await STORAGE.get('groups');
      
      if (schedule && groups) {
        const cachedSchedule = scheduleUnminify(JSON.parse(schedule));
        return { schedule: cachedSchedule, groups: JSON.parse(groups), updated: false, lastScheduleFetch: lastScheduleFetch };
      }
    }
  }

  return undefined;
}

async function fetchScheduleFromAPI(api: any): Promise<Lecture[]> {
  const result = await api.fetchSchedule();
  const html = await result.text();
  return getScheduleFromHTML(html);
}

async function saveScheduleToStorage(STORAGE: any, schedule: Lecture[], now: string): Promise<void> {
  const scheduleMinified = scheduleMinify(schedule);
  await STORAGE.put('schedule', JSON.stringify(scheduleMinified));
  await STORAGE.put('lastScheduleFetch', now);
}

async function saveGroupsToStorage(STORAGE: any, schedule: Lecture[]): Promise<string[]> {
  const groups: string[] = [];
  
  schedule.forEach((lecture) => {
    lecture.groups.forEach((group) => {
      if (!groups.includes(group)) {
        groups.push(group);
      }
    });
  });

  await STORAGE.put('groups', JSON.stringify(groups));
  return groups;
}

export async function scheduleFetch(props: RouterProps): Promise<IFetchAndHandleScheduleResult> {
  const { env, api } = props;
  const { STORAGE } = env;
  const now = new Date().toISOString();

  const cachedScheduleResult = await getCachedScheduleAndGroups(STORAGE);

  if (cachedScheduleResult) {
    return cachedScheduleResult;
  }

  const schedule = await fetchScheduleFromAPI(api);

  await saveScheduleToStorage(STORAGE, schedule, now);

  const groups = await saveGroupsToStorage(STORAGE, schedule);

  return { schedule, groups, updated: true, lastScheduleFetch: now };
}
