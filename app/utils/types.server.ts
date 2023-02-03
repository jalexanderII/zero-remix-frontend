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
