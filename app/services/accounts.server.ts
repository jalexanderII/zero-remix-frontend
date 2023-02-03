import type { AccountsResponse } from "~/utils/types.server";
import { request } from "~/services/external-api.service.server";

export const accounts = {
  get_user_accounts: (email: string) =>
    request.get<AccountsResponse>(`/api/core/accounts/${email}`),
};
