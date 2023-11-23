import { describe, it, expect } from '@jest/globals';
import Changes from '../models/Changes';
const { findChanges } = Changes;

const baseSchedule = [
  {
    date: '21.11.2023',
    time: '8:45-10:15',
    class: '1',
    room: '220',
    groups: ["1203MDA", "1103-2MDA"],
    teacher: 'Gromovs Genadijs',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
  {
    date: '21.11.2023',
    time: '10:30-12:00',
    class: '1',
    room: '220',
    groups: ["1203MDA", "1103-2MDA"],
    teacher: 'Gromovs Genadijs',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
];

const changedTeacherInSecond = [
  {
    date: '21.11.2023',
    time: '8:45-10:15',
    class: '1',
    room: '220',
    groups: ["1203MDA", "1103-2MDA"],
    teacher: 'Gromovs Genadijs',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
  {
    date: '21.11.2023',
    time: '10:30-12:00',
    class: '1',
    room: '220',
    groups: ["1203MDA", "1103-2MDA"],
    teacher: 'Antonov Evgenijs',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
];

const changedRoomInFirst = [
  {
    date: '21.11.2023',
    time: '8:45-10:15',
    class: '1',
    room: '221',
    groups: ["1203MDA", "1103-2MDA"],
    teacher: 'Gromovs Genadijs',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
  {
    date: '21.11.2023',
    time: '10:30-12:00',
    class: '1',
    room: '220',
    groups: ["1203MDA", "1103-2MDA"],
    teacher: 'Gromovs Genadijs',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
];

const currentSchedule = [
  {
    date: '21.11.2023',
    time: '8:45-10:15',
    class: '1',
    room: '220',
    groups: ["1203MDA", "1103-2MDA"],
    teacher: 'Gromovs Genadijs',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
  {
    date: '21.11.2023',
    time: '10:30-12:00',
    class: '1',
    room: '220',
    groups: ["1203MDA", "1103-2MDA"],
    teacher: 'Gromovs Genadijs',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
];

const scheduleWithNewElement = [
  {
    date: '21.11.2023',
    time: '8:45-10:15',
    class: '1',
    room: '220',
    groups: ["1203MDA", "1103-2MDA"],
    teacher: 'Gromovs Genadijs',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
  {
    date: '21.11.2023',
    time: '10:30-12:00',
    class: '1',
    room: '220',
    groups: ["1203MDA", "1103-2MDA"],
    teacher: 'Gromovs Genadijs',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
  {
    date: '21.11.2023',
    time: '12:15-13:45',
    class: '1',
    room: '220',
    groups: ["1203MDA", "1103-2MDA"],
    teacher: 'Gromovs Genadijs',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
];

const scheduleWithDifferentValues = [
  {
    date: '21.11.2023',
    time: '8:45-10:15',
    class: '1',
    room: '220',
    groups: ["1203MDA"],
    teacher: 'Will Smith',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
  {
    date: '21.11.2023',
    time: '10:30-12:00',
    class: '1',
    room: '220',
    groups: ["1103-2MDA"],
    teacher: 'Jason Statham',
    subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
    type: 'Lesson',
    comment: 'online',
  },
];
  

describe('Changes.findChanges', () => {
  
  it('should return empty array', () => {
    expect(findChanges(baseSchedule, currentSchedule)).toEqual(
      []
    );
  });

  it('should return array with one element', () => {
    expect(findChanges(baseSchedule, scheduleWithNewElement)).toEqual(
      [
        {
          lectureBefore: null,
          lectureAfter: {
            date: '21.11.2023',
            time: '12:15-13:45',
            class: '1',
            room: '220',
            groups: ["1203MDA", "1103-2MDA"],
            teacher: 'Gromovs Genadijs',
            subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
            type: 'Lesson',
            comment: 'online',
          },
        }
      ]
    );
  });

  it('should return array with two elements', () => {
    expect(findChanges(baseSchedule, scheduleWithDifferentValues)).toEqual(
      [
        {
          lectureBefore: {
            date: '21.11.2023',
            time: '8:45-10:15',
            class: '1',
            room: '220',
            groups: ["1203MDA", "1103-2MDA"],
            teacher: 'Gromovs Genadijs',
            subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
            type: 'Lesson',
            comment: 'online',
          },
          lectureAfter: {
            date: '21.11.2023',
            time: '8:45-10:15',
            class: '1',
            room: '220',
            groups: ["1203MDA"],
            teacher: 'Will Smith',
            subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
            type: 'Lesson',
            comment: 'online',
          },
        },
        {
          lectureBefore: {
            date: '21.11.2023',
            time: '10:30-12:00',
            class: '1',
            room: '220',
            groups: ["1203MDA", "1103-2MDA"],
            teacher: 'Gromovs Genadijs',
            subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
            type: 'Lesson',
            comment: 'online',
          },
          lectureAfter: {
            date: '21.11.2023',
            time: '10:30-12:00',
            class: '1',
            room: '220',
            groups: ["1103-2MDA"],
            teacher: 'Jason Statham',
            subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
            type: 'Lesson',
            comment: 'online',
          },
        }
      ]
    );
  });

  it('should return array with one element', () => {
    expect(findChanges(baseSchedule, changedRoomInFirst)).toEqual(
      [
        {
          lectureBefore: {
            date: '21.11.2023',
            time: '8:45-10:15',
            class: '1',
            room: '220',
            groups: ["1203MDA", "1103-2MDA"],
            teacher: 'Gromovs Genadijs',
            subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
            type: 'Lesson',
            comment: 'online',
          },
          lectureAfter: {
            date: '21.11.2023',
            time: '8:45-10:15',
            class: '1',
            room: '221',
            groups: ["1203MDA", "1103-2MDA"],
            teacher: 'Gromovs Genadijs',
            subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
            type: 'Lesson',
            comment: 'online',
          },
        }
      ]
    );
  });

  it('should return array with one element', () => {
    expect(findChanges(baseSchedule, changedTeacherInSecond)).toEqual(
      [
        {
          lectureBefore: {
            date: '21.11.2023',
            time: '10:30-12:00',
            class: '1',
            room: '220',
            groups: ["1203MDA", "1103-2MDA"],
            teacher: 'Gromovs Genadijs',
            subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
            type: 'Lesson',
            comment: 'online',
          },
          lectureAfter: {
            date: '21.11.2023',
            time: '10:30-12:00',
            class: '1',
            room: '220',
            groups: ["1203MDA", "1103-2MDA"],
            teacher: 'Antonov Evgenijs',
            subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
            type: 'Lesson',
            comment: 'online',
          },
        }
      ]
    );
  });

});
