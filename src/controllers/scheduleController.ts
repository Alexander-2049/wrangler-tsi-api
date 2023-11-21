import { IRequest } from "itty-router";
import { RouterProps } from "../types/RouterProps";
import { scheduleFetch } from "../utils/scheduleFetch";
import getDate from "../utils/getDate";

export default async function scheduleController(request: IRequest, props: RouterProps) {
  const { schedule } = await scheduleFetch(props);

  let result = schedule;

  if(request.params.group) {
    const group = request.params.group.toUpperCase();
    result = schedule.filter((item) => item.groups.includes(group));
  }

  const from = typeof request.query.from === 'string' ? getDate(request.query.from) : undefined;
  const to = typeof request.query.to === 'string' ? getDate(request.query.to) : undefined;

  if(from) {
    result = result.filter((item) => {
      const date = getDate(item.date);
      if(!date) return false;
      if(date >= from) return true;
      if(date < from) return false;
    });
  }

  if(to) {
    result = result.filter((item) => {
      const date = getDate(item.date);
      if(!date) return false;
      if(date <= to) return true;
      if(date > to) return false;
    });
  }

  return new Response(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
