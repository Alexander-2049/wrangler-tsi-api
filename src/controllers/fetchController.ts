import { IRequest } from "itty-router";
import { RouterProps } from "../types/RouterProps";

export default async function fetchController(request: IRequest, props: RouterProps) {
  const api = props.api;
  const result = await api.fetchSchedule();

  return new Response(await result.text(), { status: 200, headers: { 'Content-Type': 'text/html' } });
}
