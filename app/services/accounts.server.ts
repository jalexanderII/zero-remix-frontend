import type { AccountsResponse } from "~/utils/types.server";
import { request } from "~/services/external-api.service.server";
import { json } from "@remix-run/node";

export const accounts = {
  get_user_accounts: (email: string) =>
    request.get<AccountsResponse>(`/api/core/accounts/${email}`),
};

export async function createPreference(data: {
  timeline: number;
  frequency: number;
  planType: number;
}) {
  console.log("createPreference", data);
  return json(data, { status: 200 });
}
