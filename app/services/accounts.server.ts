import type {
  Account,
  AccountsResponse,
  SlimAccount,
} from "~/utils/types.server";
import { request } from "~/services/external-api.service.server";

export const accounts = {
  get_user_accounts: async (email: string) =>
    request.get<AccountsResponse>(`/api/core/accounts/${email}`),
};

export const makeAccountFromJson = async (data: Account[]) => {
  let accounts: SlimAccount[] = [];
  data.forEach((item) => {
    if (item.type === "credit") {
      accounts.push({
        accountId: item.id,
        userId: item.user_id,
        name: item.official_name,
        balance: item.current_balance,
      });
    }
  });
  return accounts;
};
