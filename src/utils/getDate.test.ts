import { describe, it, expect } from '@jest/globals';
import getDate from './getDate';

describe('getDate', () => {
  
  it('should return null if input is invalid', () => {
    expect(getDate('')).toBeNull();
    expect(getDate('1')).toBeNull();
    expect(getDate('1.')).toBeNull();
    expect(getDate('1.2')).toBeNull();
    expect(getDate('1.2.')).toBeNull();
    expect(getDate('1.2.3')).toBeNull();
    expect(getDate('1.2.3.')).toBeNull();
  });

  it('should return a Date object if input is valid', () => {
    expect(getDate('19.09.2020')).toBeInstanceOf(Date);
  });

  it('should return a Date object with correct values', () => {
    const date = getDate('01.12.2019');
    expect(date?.getDate()).toBe(1);
    expect(date?.getMonth()).toBe(11);
    expect(date?.getFullYear()).toBe(2019);
  });

  it('should return a Date object with correct values', () => {
    const date = getDate('31.11.2023');
    expect(date?.getDate()).toBe(1);
    expect(date?.getMonth()).toBe(11);
    expect(date?.getFullYear()).toBe(2023);
  });

  it('should return a Date object with correct values', () => {
    const date = getDate('15.08.2020');
    expect(date?.getDate()).toBe(15);
    expect(date?.getMonth()).toBe(7);
    expect(date?.getFullYear()).toBe(2020);
  });

});
