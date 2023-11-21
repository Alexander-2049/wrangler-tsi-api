import { IRequest } from "itty-router";
import { RouterProps } from "../types/RouterProps";
import { scheduleFetch } from "../utils/scheduleFetch";

export default async function fetchController(request: IRequest, props: RouterProps) {
  const { updated, lastScheduleFetch } = await scheduleFetch(props);

  return new Response(JSON.stringify({ updated, lastScheduleFetch }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
