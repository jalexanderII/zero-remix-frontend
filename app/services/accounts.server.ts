import type {
  Account,
  AccountsResponse,
  SlimAccount,
} from "~/utils/types.server";
import { request } from "~/services/external-api.service.server";

export const accounts = {
  get_user_accounts: async (userId: string | null) =>
    request.get<AccountsResponse>(`/api/core/accounts`, userId),
};

export const makeAccountFromJson = async (data: Account[]) => {
  let accounts: SlimAccount[] = [];
  data.forEach((item) => {
    if (item.type === "credit") {
      accounts.push({
        accountId: item.plaid_account_id,
        userId: item.user_id,
        name: item.official_name,
        balance: item.current_balance,
      });
    }
  });
  return accounts;
};
