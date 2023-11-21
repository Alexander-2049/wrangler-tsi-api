export default function scheduleUnminify(schedule: any[]) {
  return schedule.map(lecture => {
    return {
      date: lecture[0],
      time: lecture[1],
      class: lecture[2],
      room: lecture[3],
      groups: lecture[4],
      lecturer: lecture[5],
      subject: lecture[6],
      type: lecture[7],
      comment: lecture[8]
    }
  });
}
