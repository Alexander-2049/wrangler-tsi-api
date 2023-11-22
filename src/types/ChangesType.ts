import { Lecture } from "./Lecture";

export interface ChangesType {
  timestame: string;
  groups: ChangesGroups[];
}

export interface ChangesGroups {
  group: string;
  changes: Change[];
}

export interface Change {
  lectureBefore: Lecture | null;
  lectureAfter: Lecture | null;
}
