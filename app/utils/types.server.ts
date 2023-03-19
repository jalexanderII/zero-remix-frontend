export type BaseResponse = {
  message: string;
};

export type AnnualPercentageRate = {
  apr_percentage: number;
  apr_type: string;
  balance_subject_to_apr: number;
  interest_charge_amount: number;
};

export type Account = {
  id: string;
  plaid_account_id: string;
  user_id: string;
  name: string;
  official_name: string;
  type: string;
  subtype: string;
  available_balance: number;
  current_balance: number;
  credit_limit: number;
  iso_currency_code: string;
  annual_percentage_rate: AnnualPercentageRate[];
  is_overdue: boolean;
  last_payment_amount: number;
  last_statement_issue_date: string;
  last_statement_balance: number;
  minimum_payment_amount: number;
  next_payment_due_date: string;
  updated_at: string;
  created_at: string;
};

export type SlimAccount = {
  accountId: string;
  userId: string;
  name: string;
  balance: number;
};

export type AccountsResponse = {
  data: Account[];
  message: string;
  status: string;
};

export type KPI = {
  debit: number;
  credit: number;
  payment_plans: number;
};

export type KPIResponse = {
  data: KPI;
  message: string;
  status: string;
};

export type Waterfall = {
  name: string;
  data: number[];
  acc_id: string;
};

export type WaterfallResponse = {
  data: Waterfall[];
  message: string;
  status: string;
};

export type SlimWaterfall = {
  planName: string;
  planId: string;
  data: number[];
};

type TransactionDetails = {
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  store_number: string;
  reference_number: string;
};

export type Transaction = {
  id: string;
  plaid_transaction_id: string;
  account_id: string;
  plaid_account_id: string;
  user_id: string;
  transaction_type: string;
  pending_transaction_id: string;
  category_id: string;
  category: string[];
  transaction_details: TransactionDetails;
  name: string;
  original_description: string;
  amount: number;
  iso_currency_code: string;
  date: string;
  pending: boolean;
  merchant_name: string;
  payment_channel: string;
  authorized_date: string;
  primary_category: string;
  detailed_category: string;
  updated_at: string;
  created_at: string;
  in_plan: boolean;
};

export type TransactionResponse = {
  data: Transaction[];
  message: string;
  status: string;
};

export type SlimTransaction = {
  id: string;
  accountId: string;
  userId: string;
  name: string;
  amount: string;
  value: number;
  date: string;
  transactionId: string;
};

export type DropdownInput = {
  value: number;
  text: string;
  icon: any;
};

export class DefaultDict {
  constructor(defaultInit: any | Object) {
    return new Proxy(
      {},
      {
        get: (target: any, name: string) =>
          name in target
            ? target[name]
            : (target[name] =
                typeof defaultInit === "function"
                  ? new defaultInit().valueOf()
                  : defaultInit),
      }
    );
  }
}

export type AccountAndTransactions = {
  slimAccounts: SlimAccount[];
  transactionDict: DefaultDict;
};

export type AccountInfo = {
  transaction_ids: string[];
  account_id: string;
  amount: number;
};

export type CreatePaymentPlanRequest = {
  account_info: AccountInfo[];
  meta_data: {
    preferred_plan_type: number;
    preferred_timeline_in_months: number;
    preferred_payment_freq: number;
  };
  save_plan: boolean;
};

export type PaymentAction = {
  id: string;
  account_id: string;
  amount: number;
  transaction_date: string;
  status: number;
};

export type PaymentPlan = {
  id: string;
  name: string;
  payment_plan_id: string;
  user_id: string;
  payment_task_id: string[];
  amount: number;
  timeline: number;
  payment_freq: number;
  amount_per_payment: number;
  plan_type: number;
  end_date: string;
  active: boolean;
  status: number;
  payment_action: PaymentAction[];
  transactions: string[];
};

export type CreatePaymentPlanResponse = {
  data: PaymentPlan[];
  message: string;
  status: string;
};

export type PlaidAccountLinked = {
  debit: boolean;
  credit: boolean;
};

export type PlaidAccountLinkedResponse = {
  data: PlaidAccountLinked;
  message: string;
  status: string;
};

enum DeleteStatus {
  DELETE_STATUS_UNKNOWN = 0,
  DELETE_STATUS_PENDING,
  DELETE_STATUS_IN_PROGRESS,
  DELETE_STATUS_SUCCESS,
  DELETE_STATUS_FAILED,
}

export type DeletePaymentPlanResponse = {
  status: DeleteStatus;
  payment_plan: PaymentPlan;
};

export type GetPaymentPlansResponse = {
  data: PaymentPlan[];
  message: string;
  status: string;
};

export type WaterfallDataSeries = {
  [key: string]: string | number;
};

export type WaterfallDataResponse = {
  waterfallData: WaterfallDataSeries[];
  names: string[];
};
