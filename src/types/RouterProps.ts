import API from "../models/API";
import { Env } from './Env';

export interface RouterProps {
  env: Env;
  ctx: ExecutionContext;
  url: URL;
  api: API;
}
