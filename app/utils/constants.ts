import type { DropdownInput } from "~/utils/types.server";
import {
  CreditCardIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

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

export const PaymentPlanOptions: DropdownInput[] = [
  {
    value: 0,
    text: "Unknown",
    icon: null,
  },
  {
    value: 1,
    text: "Select from most recent transactions",
    icon: CreditCardIcon,
  },
  {
    value: 2,
    text: "Tell us the total amount for any account",
    icon: CurrencyDollarIcon,
  },
  // {
  //   value: 3,
  //   text: "Let us optimize a payment plan based on your credit information",
  //   icon: BoltIcon,
  // },
];

export const KEY = "St0bN9Fp";
