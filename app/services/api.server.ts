import { backend } from "~/services/external-api.service.server";
import { accounts } from "~/services/accounts.server";
import { kpis } from "~/services/kpi.server";
import { waterfall } from "~/services/waterfall";

const api = {
  backend,
  accounts,
  kpis,
  waterfall,
};

export default api;
