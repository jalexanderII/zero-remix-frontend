export const PLAID_FRONTEND_URL =
  process.env.PLAID_FRONTEND_URL || "https://zero-react-plaid.vercel.app";
export const PlanType: Map<number, string> = new Map([
  [0, "Unknown"],
  [1, "Optimize Credit Score"],
  [2, "Minimize Fees"],
]);

export const PaymentFrequency: Map<number, string> = new Map([
  [0, "Unknown"],
  [1, "Weekly"],
  [2, "Bi-Weekly"],
  [3, "Monthly"],
  [4, "Quarterly"],
]);

export const TimelineMonths: Map<number, string> = new Map([
  [0, "Unknown"],
  [3, "3 Months"],
  [6, "6 Months"],
  [12, "12 Months"],
  [24, "24 Months"],
]);

export const ActionStatus: Map<number, string> = new Map([
  [0, "Unknown"],
  [1, "Pending"],
  [2, "Completed"],
  [3, "Missed"],
]);
