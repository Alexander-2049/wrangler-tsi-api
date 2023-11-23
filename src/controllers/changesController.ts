import { IRequest } from "itty-router";
import { RouterProps } from "../types/RouterProps";
import Changes from "../models/Changes";
import { scheduleFetch } from "../utils/scheduleFetch";

export default async function changesController(request: IRequest, props: RouterProps) {
  await scheduleFetch(props);
  const { getChanges } = Changes;
  const changes = await getChanges(props.env.STORAGE);
  return new Response(JSON.stringify(changes), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
