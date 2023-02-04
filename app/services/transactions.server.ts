import { request } from "~/services/external-api.service.server";
import type { Transaction, TransactionResponse } from "~/utils/types.server";
import type { SlimTransaction } from "~/utils/types.server";
import { toUSD } from "~/utils/helpers";

const TRANSACTION_LIMIT = 100;

export const transactions = {
  get_user_transactions: (email: string) =>
    request.get<TransactionResponse>(`/api/core/transactions/${email}`),
};

export const pruneTransactions = (trxns: Transaction[]): SlimTransaction[] => {
  let data: SlimTransaction[] = [];
  trxns.forEach((item) => {
    if (item.amount > 0) {
      data.push({
        transactionId: item.id,
        name: item.name,
        amount: toUSD(item.amount),
        date: item.date,
      });
    }
  });
  return data.slice(0, Math.min(data.length, TRANSACTION_LIMIT));
};
