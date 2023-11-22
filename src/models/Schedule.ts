import { RouterProps } from "../types/RouterProps";
import { scheduleFetch } from "../utils/scheduleFetch";

export default class Schedule {

  static async getGroupSchedule(group: string, props: RouterProps) {
    const { schedule } = await scheduleFetch(props);

    return schedule.filter((item) => item.groups.includes(group));
  }

  static async getSchedule(props: RouterProps) {
    const { schedule } = await scheduleFetch(props);

    return schedule;
  }
  
  static filterByDate(schedule: any[], from?: Date, to?: Date) {
    let result = schedule;
  
    if(from) {
      result = result.filter((item) => {
        const date = this.getDate(item.date);
        if(!date) return false;
        if(date >= from) return true;
        if(date < from) return false;
      });
    }
  
    if(to) {
      result = result.filter((item) => {
        const date = this.getDate(item.date);
        if(!date) return false;
        if(date <= to) return true;
        if(date > to) return false;
      });
    }
  
    return result;
  }

  static getDate(input: string): Date | null {
    const [day, month, year] = input.split('.').map((item) => parseInt(item));
    if(!day || !month || !year) return null;
    if(day < 0 || day > 31) return null;
    if(month < 0 || month > 12) return null;
    if(year < 1920) return null;
    return new Date(year, month - 1, day);
  }
  
}
