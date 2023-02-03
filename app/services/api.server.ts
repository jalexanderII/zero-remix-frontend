import { backend } from "~/services/external-api.service.server";
import { accounts } from "~/services/accounts.server";
import { kpis } from "~/services/kpi.server";

const api = {
  backend,
  accounts,
  kpis,
};

export default api;
