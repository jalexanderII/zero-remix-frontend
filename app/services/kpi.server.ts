import { request } from "~/services/external-api.service.server";
import type { KPIResponse } from "~/utils/types.server";

export const kpis = {
  get_user_kpis: async (userId: string | null) =>
    request.get<KPIResponse>(`/api/core/kpi`, userId),
};
