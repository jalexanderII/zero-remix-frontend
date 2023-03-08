import { request } from "~/services/external-api.service.server";
import type {
  AccountAndTransactions,
  AccountsResponse,
  CreatePaymentPlanResponse,
  DeletePaymentPlanResponse,
  GetPaymentPlansResponse,
  SlimAccount,
  Transaction,
  TransactionResponse,
} from "~/utils/types.server";
import { makeAccountFromJson } from "~/services/accounts.server";
import { toUSD } from "~/utils/helpers";
import { Convert } from "~/utils/paymentplan_request_converter.server";
import defaultdict from "~/utils/defaultdict";

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
    const transactionDict = await makeTransactionsFromJson(transactions.data);
    const resp: AccountAndTransactions = { slimAccounts, transactionDict };
    return resp;
  },
  submit_payment_plan: async (email: string, json: string) => {
    const paymentPlanRequest = Convert.toPaymentPlanRequest(json);
    paymentPlanRequest.account_info = paymentPlanRequest.account_info.filter(
      (account) => account.transaction_ids.length > 0
    );
    return await request.post<CreatePaymentPlanResponse>(
      `/api/core/paymentplan/${email}`,
      paymentPlanRequest
    );
  },
  delete_payment_plan: async (paymentPlanId: string) => {
    return await request.delete<DeletePaymentPlanResponse>(
      `/api/core/paymentplan/${paymentPlanId}`
    );
  },
  get_user_payment_plans: async (email: string) => {
    return await request.get<GetPaymentPlansResponse>(
      `/api/core/paymentplan/${email}`
    );
  },
};

export const makeTransactionsFromJson = async (trxns: Transaction[]) => {
  const transactionsDict = defaultdict([]);
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
