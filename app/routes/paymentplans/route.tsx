import { Button, Card, Text, Title } from "@tremor/react";
import type { GetPaymentPlansResponse } from "~/utils/types.server";
import { PaymentPlanCard } from "~/components/paymentplan_card";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { useMemo } from "react";
import { Form, useLoaderData } from "@remix-run/react";
import type { ActionArgs, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import api from "~/services/api.server";
import { getAuth } from "@clerk/remix/ssr.server";
import { AccountIDToName } from "~/utils/helpers";
import type { AcceptPaymentPlanRequest } from "~/utils/accept_paymentplan_request_converter.server";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  let paymentPlanId = form.get("payment_plan_id");
  let transactionIds = form.get("transaction_ids");
  let paymentPlan = form.get("payment_plan");
  const action = form.get("_action");

  switch (action) {
    case "delete_payment_plan":
      if (
        typeof paymentPlanId !== "string" ||
        typeof transactionIds !== "string"
      ) {
        return json(
          {
            error: `Invalid Form Data Wrong Type`,
            fields: { paymentPlanId, transactionIds },
          },
          { status: 400 }
        );
      }

      const dresp = await api.paymentplan.delete_payment_plan(
        paymentPlanId,
        transactionIds,
        null
      );
      console.log(dresp);

      return redirect("/paymentplans");
    case "accept_payment_plan":
      if (typeof paymentPlan !== "string") {
        return json(
          {
            error: `Invalid Form Data Wrong Type`,
            fields: { paymentPlan },
          },
          { status: 400 }
        );
      }

      const req: AcceptPaymentPlanRequest = {
        payment_plan: JSON.parse(paymentPlan),
        save_plan: true,
      };

      const aresp = await api.paymentplan.accept_payment_plan(
        JSON.stringify(req),
        null
      );
      console.log(aresp);

      return redirect("/paymentplans");
    default:
      return json({ error: `Invalid Form Data` }, { status: 400 });
  }
}

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  const paymentPlans: GetPaymentPlansResponse =
    await api.paymentplan.get_user_payment_plans(userId);
  const accounts = await api.accounts.get_user_accounts(userId);
  return { paymentPlans, accounts };
};

export default function PaymentPlans() {
  const { paymentPlans, accounts } = useLoaderData();

  const accIdToName: Map<string, string> = useMemo(
    () => AccountIDToName(accounts.data),
    [accounts]
  );

  return (
    <Card className="mt-6">
      <main>
        <Title>Payment Plans</Title>
        <Text>
          These are all of your payment plans. Your plans tell you how much you
          need to pay and when.
        </Text>
        <Text>
          If you have a premium account these payments will be managed
          automatically!
        </Text>
        <PaymentPlanCard
          plans={paymentPlans.data}
          accIdToName={accIdToName}
          footer={PlanFooter}
        />
      </main>
    </Card>
  );
}

const PlanFooter = (paymentPlanId: string, transactionIds: string[]) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    return !confirm("Are you sure?") ? e.preventDefault() : true;
  };

  return (
    <Form method="delete" onSubmit={handleOnSubmit}>
      <input type="hidden" value={paymentPlanId} name="payment_plan_id" />
      <input type="hidden" value={transactionIds} name="transaction_ids" />
      <div className="border-t border-slate-200">
        <Button
          type="submit"
          name="_action"
          value="delete_payment_plan"
          className="mt-3"
          size="sm"
          icon={XMarkIcon}
          iconPosition="left"
          color="red"
        >
          Delete
        </Button>
      </div>
    </Form>
  );
};
