import { Change, ChangesType } from "../types/ChangesType";
import { Lecture } from "../types/Lecture";

export default class Changes {

  static async getChanges(STORAGE: KVNamespace) {
    const changes = await this.getChangesFromStorage(STORAGE);
    if(!changes) {
      return [];
    }
    return changes;
  }

  static async getChangesFromStorage(STORAGE: KVNamespace) {
    const changes = await STORAGE.get('changes');
    if(!changes) {
      return null;
    }
    return JSON.parse(changes);
  }

  static async setChanges(STORAGE: KVNamespace, changes: ChangesType[]) {
    await STORAGE.put('changes', JSON.stringify(changes));
  }

  static findChanges(previousSchedule: Lecture[], currentSchedule: Lecture[]): Change[] {
    const changes: Change[] = [];
    if(JSON.stringify(previousSchedule) === JSON.stringify(currentSchedule)) {
      return changes;
    }

    const previousScheduleMap: Map<string, Lecture> = new Map();
    const currentScheduleMap: Map<string, Lecture> = new Map();

    previousSchedule.forEach((lecture) => {
      const key = `${lecture.date}-${lecture.time}`;
      previousScheduleMap.set(key, lecture);
    });

    currentSchedule.forEach((lecture) => {
      const key = `${lecture.date}-${lecture.time}`;
      currentScheduleMap.set(key, lecture);
    });

    previousScheduleMap.forEach((lecture, key) => {
      if(!currentScheduleMap.has(key)) {
        changes.push({
          lectureBefore: lecture,
          lectureAfter: null,
        });
      }

      const currentLecture = currentScheduleMap.get(key);
      if(currentLecture && currentLecture.groups.length !== lecture.groups.length) {
        changes.push({
          lectureBefore: lecture,
          lectureAfter: currentLecture,
        });
      }

      if(currentLecture && JSON.stringify(currentLecture.groups) !== JSON.stringify(lecture.groups)) {
        changes.push({
          lectureBefore: lecture,
          lectureAfter: currentLecture,
        });
      }
    });

    currentScheduleMap.forEach((lecture, key) => {
      if(!previousScheduleMap.has(key)) {
        changes.push({
          lectureBefore: null,
          lectureAfter: lecture,
        });
      }
    });

    return changes;
  }

}
