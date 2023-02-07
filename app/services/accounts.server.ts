import type { AccountsResponse } from "~/utils/types.server";
import { request } from "~/services/external-api.service.server";

export const accounts = {
  get_user_accounts: (email: string) =>
    request.get<AccountsResponse>(`/api/core/accounts/${email}`),
};

export async function createPreference(data: {
  timeline: any;
  frequency: any;
  planType: any;
}) {
  console.log("createPreference", data);
}
