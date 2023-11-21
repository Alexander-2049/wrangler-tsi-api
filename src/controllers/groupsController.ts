import { IRequest } from "itty-router";
import { RouterProps } from "../types/RouterProps";
import { scheduleFetch } from "../utils/scheduleFetch";

export default async function groupsController(request: IRequest, props: RouterProps) {
  const groups = await props.env.STORAGE.get('groups');
  if(!groups) {
    const { groups } = await scheduleFetch(props);
    return new Response(JSON.stringify(groups), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }
  return new Response(groups, { status: 200, headers: { 'Content-Type': 'application/json' } });
}
