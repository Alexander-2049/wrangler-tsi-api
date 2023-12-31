import { Change, ChangesType } from "../types/ChangesType";
import { Lecture } from "../types/Lecture";

export default class Changes {

  static async getChanges(STORAGE: KVNamespace): Promise<ChangesType[]> {
    const changes = await STORAGE.get('changes');
    if(!changes) {
      return [];
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
      } else if(currentLecture && JSON.stringify(currentLecture.groups) !== JSON.stringify(lecture.groups)) {
        changes.push({
          lectureBefore: lecture,
          lectureAfter: currentLecture,
        });
      } else if(currentLecture && currentLecture.teacher !== lecture.teacher) {
        changes.push({
          lectureBefore: lecture,
          lectureAfter: currentLecture,
        });
      } else if(currentLecture && currentLecture.subject !== lecture.subject) {
        changes.push({
          lectureBefore: lecture,
          lectureAfter: currentLecture,
        });
      } else if(currentLecture && currentLecture.room !== lecture.room) {
        changes.push({
          lectureBefore: lecture,
          lectureAfter: currentLecture,
        });
      } else if(currentLecture && currentLecture.type !== lecture.type) {
        changes.push({
          lectureBefore: lecture,
          lectureAfter: currentLecture,
        });
      } else if(currentLecture && currentLecture.comment !== lecture.comment) {
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

  static findChangesForAllGroups(previousSchedule: Lecture[], currentSchedule: Lecture[]): ChangesType {
    const changes: ChangesType = {
      timestamp: new Date().toISOString(),
      groups: [],
    };
    const groupsMap = this.getGroupsMap(currentSchedule);
    const previousGroupsMap = this.getGroupsMap(previousSchedule);

    groupsMap.forEach((lectures, group) => {
      const previousLectures = previousGroupsMap.get(group);
      const changesForGroup = this.findChanges(previousLectures || [], lectures);
      if(changesForGroup.length > 0) {
        changes.groups.push({
            group: group,
            changes: changesForGroup,
        });
      }
    });

    return changes;
  }

  static getGroupsMap(schedule: Lecture[]): Map<string, Lecture[]> {
    const groupsMap: Map<string, Lecture[]> = new Map();
    schedule.forEach((lecture) => {
      lecture.groups.forEach((group) => {
        if(!groupsMap.has(group)) {
          groupsMap.set(group, []);
        }
        groupsMap.get(group)?.push(lecture);
      });
    });
    return groupsMap;
  }
}
