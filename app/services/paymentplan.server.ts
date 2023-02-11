import { request } from "~/services/external-api.service.server";
import type {
  AccountAndTransactions,
  AccountsResponse,
  SlimAccount,
  Transaction,
  TransactionResponse,
} from "~/utils/types.server";
import { DefaultDict } from "~/utils/types.server";
import { makeAccountFromJson } from "~/services/accounts.server";
import { toUSD } from "~/utils/helpers";

export const paymentplan = {
  get_transactions_by_account: async (email: string) => {
    const accounts: AccountsResponse = await request.get<AccountsResponse>(
      `/api/core/accounts/${email}`
    );
    const transactions: TransactionResponse =
      await request.get<TransactionResponse>(`/api/core/transactions/${email}`);

    const slimAccounts: SlimAccount[] = await makeAccountFromJson(
      accounts.data
    );
    const transactionDict: DefaultDict = await makeTransactionsFromJson(
      transactions.data
    );
    const resp: AccountAndTransactions = { slimAccounts, transactionDict };
    return resp;
  },
};

export async function createPaymentPlan(data: {
  timeline: any;
  frequency: any;
  planType: any;
}) {
  console.log("createPaymentPlan", data);
}

export const makeTransactionsFromJson = async (trxns: Transaction[]) => {
  const transactionsDict = new DefaultDict(Array);
  trxns.forEach((item) => {
    if (item.amount > 0) {
      // @ts-ignore
      transactionsDict[item["account_id"]].push({
        id: item["id"],
        accountId: item["account_id"],
        userId: item["user_id"],
        name: item.name,
        amount: toUSD(item.amount),
        date: item.date,
        transactionId: item["id"],
      });
    }
  });
  return transactionsDict;
};
