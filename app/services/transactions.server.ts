import { request } from "~/services/external-api.service.server";
import type {
  SlimTransaction,
  Transaction,
  TransactionResponse,
} from "~/utils/types.server";
import { toUSD } from "~/utils/helpers";

export const transactions = {
  get_user_transactions: async (userId: string | null) =>
    request.get<TransactionResponse>(`/api/core/transactions`, userId),
};

export const pruneTransactions = async (
  trxns: Transaction[]
): Promise<SlimTransaction[]> => {
  let data: SlimTransaction[] = [];
  if (!trxns) {
    return data;
  }
  trxns.forEach((item) => {
    if (item.amount > 0) {
      data.push({
        transactionId: item.plaid_transaction_id,
        name: item.name,
        amount: toUSD(item.amount),
        value: item.amount,
        date: new Date(item.date),
        id: item.plaid_transaction_id,
        accountId: item.plaid_account_id,
        userId: item.user_id,
      });
    }
  });
  return data;
};
