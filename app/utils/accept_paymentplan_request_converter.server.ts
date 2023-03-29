// To parse this data:
//
//   import { Convert, AcceptPaymentPlanRequest } from "./file";
//
//   const AcceptPaymentPlanRequest = AcceptPaymentPlanConvert.toAcceptPaymentPlanRequest(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { a, cast, o, r, u, uncast } from "~/utils/json_converter_helpers";
import type { PaymentAction } from "~/utils/types.server";

export interface AcceptPaymentPlanRequest {
  payment_plan: PaymentPlan;
  save_plan: boolean;
}

export interface PaymentPlan {
  id: string;
  name: string;
  payment_plan_id?: string;
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
  transactions?: string[];
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class AcceptPaymentPlanConvert {
  public static toAcceptPaymentPlanRequest(
    json: string
  ): AcceptPaymentPlanRequest {
    return cast(JSON.parse(json), r("AcceptPaymentPlanRequest"), typeMap);
  }

  public static acceptPaymentPlanRequestToJson(
    value: AcceptPaymentPlanRequest
  ): string {
    return JSON.stringify(
      uncast(value, r("AcceptPaymentPlanRequest"), typeMap),
      null,
      2
    );
  }
}

const typeMap: any = {
  AcceptPaymentPlanRequest: o(
    [
      { json: "payment_plan", js: "payment_plan", typ: r("PaymentPlan") },
      { json: "save_plan", js: "save_plan", typ: true },
    ],
    false
  ),
  PaymentAction: o(
    [
      { json: "id", js: "id", typ: "" },
      { json: "account_id", js: "account_id", typ: "" },
      { json: "amount", js: "amount", typ: 3.14 },
      { json: "transaction_date", js: "transaction_date", typ: "" },
      { json: "status", js: "status", typ: 0 },
    ],
    false
  ),
  PaymentPlan: o(
    [
      { json: "id", js: "id", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "payment_plan_id", js: "payment_plan_id", typ: u("", undefined) },
      { json: "user_id", js: "user_id", typ: "" },
      {
        json: "payment_task_id",
        js: "payment_task_id",
        typ: a(""),
      },
      {
        json: "amount",
        js: "amount",
        typ: 3.14,
      },
      {
        json: "timeline",
        js: "timeline",
        typ: 0,
      },
      {
        json: "payment_freq",
        js: "payment_freq",
        typ: 0,
      },
      {
        json: "amount_per_payment",
        js: "amount_per_payment",
        typ: 3.14,
      },
      {
        json: "plan_type",
        js: "plan_type",
        typ: 0,
      },
      {
        json: "end_date",
        js: "end_date",
        typ: "",
      },
      {
        json: "active",
        js: "active",
        typ: true,
      },
      {
        json: "status",
        js: "status",
        typ: 0,
      },
      {
        json: "payment_action",
        js: "payment_action",
        typ: a(r("PaymentAction")),
      },
      {
        json: "transactions",
        js: "transactions",
        typ: u(a(""), undefined),
      },
    ],
    false
  ),
};
