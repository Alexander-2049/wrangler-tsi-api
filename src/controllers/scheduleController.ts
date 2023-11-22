import { IRequest } from "itty-router";
import { RouterProps } from "../types/RouterProps";
import { scheduleFetch } from "../utils/scheduleFetch";
import getDate from "../utils/getDate";
import Schedule from "../models/Schedule";

export default async function scheduleController(request: IRequest, props: RouterProps) {
  const { schedule } = await scheduleFetch(props);

  let result = schedule;

  if(request.params.group) {
    const group = request.params.group.toUpperCase();
    result = schedule.filter((item) => item.groups.includes(group));
  }

  const from = typeof request.query.from === 'string' ? Schedule.getDate(request.query.from) : undefined;
  const to = typeof request.query.to === 'string' ? Schedule.getDate(request.query.to) : undefined;

  if(from && to) result = Schedule.filterByDate(result, from, to);
  else if(from) result = Schedule.filterByDate(result, from);
  else if(to) result = Schedule.filterByDate(result, undefined, to);

  return new Response(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
