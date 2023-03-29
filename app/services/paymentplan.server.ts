import { request } from "~/services/external-api.service.server";
import type {
  AccountAndTransactions,
  AccountsResponse,
  CreatePaymentPlanResponse,
  DeletePaymentPlanResponse,
  GetPaymentPlansResponse,
  SlimAccount,
  SlimTransaction,
  Transaction,
  TransactionResponse,
} from "~/utils/types.server";
import { DefaultDict } from "~/utils/types.server";
import { makeAccountFromJson } from "~/services/accounts.server";
import { toUSD } from "~/utils/helpers";
import { PaymentPlanConvert } from "~/utils/paymentplan_request_converter.server";
import { AcceptPaymentPlanConvert } from "~/utils/accept_paymentplan_request_converter.server";

type DeleteBody = {
  transaction_ids: string[];
};

export const paymentplan = {
  get_transactions_by_account: async (userId: string | null) => {
    const accounts: AccountsResponse = await request.get<AccountsResponse>(
      `/api/core/accounts`,
      userId
    );
    const transactions: TransactionResponse =
      await request.get<TransactionResponse>(`/api/core/transactions`, userId);

    const slimAccounts: SlimAccount[] = await makeAccountFromJson(
      accounts.data
    );
    const transactionDict: DefaultDict = await makeTransactionsFromJson(
      transactions.data
    );
    const resp: AccountAndTransactions = { slimAccounts, transactionDict };
    return resp;
  },
  submit_payment_plan: async (json: string, userId: string | null) => {
    const paymentPlanRequest = PaymentPlanConvert.toPaymentPlanRequest(json);
    paymentPlanRequest.save_plan = process.env.NODE_ENV !== "development";
    paymentPlanRequest.account_info = paymentPlanRequest.account_info.filter(
      (account) => account.amount > 0
    );
    return await request.post<CreatePaymentPlanResponse>(
      `/api/core/paymentplan`,
      paymentPlanRequest,
      userId
    );
  },
  accept_payment_plan: async (json: string, userId: string | null) => {
    const acceptPaymentPlanRequest =
      AcceptPaymentPlanConvert.toAcceptPaymentPlanRequest(json);
    acceptPaymentPlanRequest.save_plan = process.env.NODE_ENV !== "development";
    return await request.post<CreatePaymentPlanResponse>(
      `/api/planning/accept`,
      acceptPaymentPlanRequest,
      userId
    );
  },
  delete_payment_plan: async (
    paymentPlanId: string,
    transactionIds: string | undefined,
    userId: string | null
  ) => {
    const ids: string[] = transactionIds ? transactionIds.split(",") : [];
    const b: DeleteBody = { transaction_ids: ids };
    return await request.post<DeletePaymentPlanResponse>(
      `/api/core/paymentplan/delete/${paymentPlanId}`,
      b,
      userId
    );
  },
  get_user_payment_plans: async (userId: string | null) => {
    return await request.get<GetPaymentPlansResponse>(
      `/api/core/paymentplan`,
      userId
    );
  },
};

export const makeTransactionsFromJson = async (trxns: Transaction[]) => {
  const transactionsDict = new DefaultDict(Array);
  trxns.forEach((item) => {
    if (item.amount > 0 && !item.in_plan) {
      const trxn: SlimTransaction = {
        id: item.plaid_transaction_id,
        accountId: item.plaid_account_id,
        userId: item.user_id,
        name: item.name,
        amount: toUSD(item.amount),
        value: item.amount,
        date: item.date,
        transactionId: item.plaid_transaction_id,
      };
      // @ts-ignore
      transactionsDict[item.plaid_account_id].push(trxn);
    }
  });
  return transactionsDict;
};
