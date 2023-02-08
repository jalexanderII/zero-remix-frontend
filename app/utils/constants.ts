export const API_URL: string = "http://127.0.0.1:8080";
// process.env.BACKEND_SERVER_URL || "http://127.0.0.1:8080";

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
