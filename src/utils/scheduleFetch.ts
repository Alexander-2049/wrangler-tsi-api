import API from "../models/API";
import Changes from "../models/Changes";
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

async function getCachedScheduleAndGroups(STORAGE: KVNamespace): Promise<IFetchAndHandleScheduleResult | undefined> {
  const lastScheduleFetch = await STORAGE.get('lastScheduleFetch') || "0";
  const schedule = await STORAGE.get('schedule');
  const groups = await STORAGE.get('groups');
  
  if (schedule && groups) {
    const cachedSchedule = scheduleUnminify(JSON.parse(schedule));
    return { schedule: cachedSchedule, groups: JSON.parse(groups), updated: false, lastScheduleFetch: lastScheduleFetch };
  }

  return undefined;
}

async function isUpdateRequired(STORAGE: KVNamespace): Promise<boolean> {
  const lastScheduleFetch = await STORAGE.get('lastScheduleFetch');

  if (lastScheduleFetch) {
    const cachedLastScheduleFetch = new Date(lastScheduleFetch);
    const now = new Date();
    const diff = now.getTime() - cachedLastScheduleFetch.getTime();
    const minutes = Math.floor(diff / 1000 / 60);

    if (minutes < 45) {
      return false;
    }
  }

  return true;
}

async function fetchScheduleFromAPI(api: API): Promise<Lecture[]> {
  const result = await api.fetchSchedule();
  const html = await result.text();
  return getScheduleFromHTML(html);
}

async function saveScheduleToStorage(STORAGE: KVNamespace, schedule: Lecture[], now: string): Promise<void> {
  const scheduleMinified = scheduleMinify(schedule);
  await STORAGE.put('schedule', JSON.stringify(scheduleMinified));
  await STORAGE.put('lastScheduleFetch', now);
}

async function saveGroupsToStorage(STORAGE: KVNamespace, schedule: Lecture[]): Promise<string[]> {
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

  let cachedScheduleResult = await getCachedScheduleAndGroups(STORAGE);
  let cachedSchedule: Lecture[] = [];
  let currentSchedule: Lecture[] = [];
  
  if(cachedScheduleResult) {
    cachedSchedule = cachedScheduleResult.schedule;
  } else {
    cachedSchedule = await fetchScheduleFromAPI(api);
  }

  if(!cachedScheduleResult || await isUpdateRequired(STORAGE)) {
    currentSchedule = await fetchScheduleFromAPI(api);
    await saveScheduleToStorage(STORAGE, currentSchedule, now);
    const groups = await saveGroupsToStorage(STORAGE, cachedSchedule);
    cachedScheduleResult = { schedule: currentSchedule, groups, updated: true, lastScheduleFetch: now };
  } 

  const changes = Changes.findChangesForAllGroups(cachedSchedule, currentSchedule);

  if (changes.groups.length > 0) {
    const cachedChangesJSON = await STORAGE.get('changes');
    if(cachedChangesJSON) {
      const cachedChanges = JSON.parse(cachedChangesJSON);
      cachedChanges.push(changes);
      await STORAGE.put('changes', JSON.stringify(cachedChanges));
    } else {
      await STORAGE.put('changes', JSON.stringify([changes]));
    }
  }

  return cachedScheduleResult;
}

