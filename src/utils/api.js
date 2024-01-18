import * as apiHandler from "../helpers/Api";
import { apiConfig } from "./config";

const { address, groupId, token } = apiConfig;
const api = apiHandler.getInstance({ address, groupId, token });

export { api };
