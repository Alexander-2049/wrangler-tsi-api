import { IRequest } from "itty-router";
import { RouterProps } from "../types/RouterProps";
import { scheduleFetch } from "../utils/scheduleFetch";

export default async function scheduleController(request: IRequest, props: RouterProps) {
  const { schedule } = await scheduleFetch(props);

  if(request.params.group) {
    const group = request.params.group.toUpperCase();
    const groupSchedule = schedule.filter((item) => item.groups.includes(group));
    return new Response(JSON.stringify(groupSchedule), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }

  return new Response(JSON.stringify(schedule), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
