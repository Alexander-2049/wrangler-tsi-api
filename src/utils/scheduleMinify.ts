import { Lecture } from "../types/Lecture";

export default function scheduleMinify(schedule: Lecture[]) {
  return schedule.map(lecture => {
    return [
      lecture.date,
      lecture.time,
      lecture.class,
      lecture.room,
      lecture.groups,
      lecture.teacher,
      lecture.subject,
      lecture.type,
      lecture.comment
    ]
  })
}
