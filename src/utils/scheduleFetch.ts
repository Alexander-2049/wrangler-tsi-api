// scheduleUtils.ts
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

export async function scheduleFetch(props: RouterProps): Promise<IFetchAndHandleScheduleResult> {
  const { env } = props;
  const { STORAGE } = env;
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
        return {schedule: cachedSchedule, groups: JSON.parse(groups), updated: false, lastScheduleFetch: lastScheduleFetch};
      }
    }
  }

  const api = props.api;
  const result = await api.fetchSchedule();
  const html = await result.text();
  const schedule = getScheduleFromHTML(html);

  const scheduleMinified = scheduleMinify(schedule);
  await STORAGE.put('schedule', JSON.stringify(scheduleMinified));
  const now = new Date().toISOString();
  await STORAGE.put('lastScheduleFetch', now);

  const groups: string[] = [];
  schedule.forEach((lecture) => {
    lecture.groups.forEach((group) => {
      if (!groups.includes(group)) {
        groups.push(group);
      }
    });
  });
  await STORAGE.put('groups', JSON.stringify(groups));

  return {schedule: schedule, groups: groups, updated: true, lastScheduleFetch: now};
}
