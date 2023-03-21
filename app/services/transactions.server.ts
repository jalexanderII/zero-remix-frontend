import { request } from "~/services/external-api.service.server";
import type {
  SlimTransaction,
  Transaction,
  TransactionResponse,
} from "~/utils/types.server";
import { toUSD } from "~/utils/helpers";

const TRANSACTION_LIMIT = 100;

export const transactions = {
  get_user_transactions: async (email: string) =>
    request.get<TransactionResponse>(`/api/core/transactions/${email}`),
};

export const pruneTransactions = async (
  trxns: Transaction[]
): Promise<SlimTransaction[]> => {
  let data: SlimTransaction[] = [];
  trxns.forEach((item) => {
    if (item.amount > 0) {
      data.push({
        transactionId: item.plaid_transaction_id,
        name: item.name,
        amount: toUSD(item.amount),
        value: item.amount,
        date: item.date,
        id: item.plaid_transaction_id,
        accountId: item.plaid_account_id,
        userId: item.user_id,
      });
    }
  });
  return data.slice(0, Math.min(data.length, TRANSACTION_LIMIT));
};
