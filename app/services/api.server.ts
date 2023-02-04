import { backend } from "~/services/external-api.service.server";
import { accounts } from "~/services/accounts.server";
import { kpis } from "~/services/kpi.server";
import { waterfall } from "~/services/waterfall";
import { transactions } from "~/services/transactions.server";

const api = {
  backend,
  accounts,
  kpis,
  waterfall,
  transactions,
};

export default api;
