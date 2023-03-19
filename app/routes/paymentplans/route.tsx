import { Button, Card, Footer, Text, Title } from "@tremor/react";
import type { GetPaymentPlansResponse } from "~/utils/types.server";
import { PaymentPlanCard } from "~/components/paymentplan_card";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Form, useLoaderData } from "@remix-run/react";
import type { ActionArgs, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import api from "~/services/api.server";
import { getAuth } from "@clerk/remix/ssr.server";
import { getUserEmail } from "~/routes/dashboard";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  let paymentPlanId = form.get("payment_plan_id");
  let transactionIds = form.get("transaction_ids");

  if (typeof paymentPlanId !== "string" || typeof transactionIds !== "string") {
    return json(
      {
        error: `Invalid Form Data Wrong Type`,
        fields: { paymentPlanId, transactionIds },
      },
      { status: 400 }
    );
  }
  console.log(transactionIds);
  const resp = await api.paymentplan.delete_payment_plan(
    paymentPlanId,
    transactionIds
  );
  console.log(resp);

  return redirect("/paymentplans");
}

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  const email = await getUserEmail(userId);
  const paymentPlans: GetPaymentPlansResponse =
    await api.paymentplan.get_user_payment_plans(email);
  return { paymentPlans };
};

export default function Route() {
  const { paymentPlans } = useLoaderData();
  return (
    <Card marginTop="mt-6">
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
        <PaymentPlanCard plans={paymentPlans.data} footer={PlanFooter} />
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
      <Footer>
        <Button
          type="submit"
          variant="light"
          size="sm"
          text="Delete"
          icon={XMarkIcon}
          iconPosition="left"
          color="red"
        />
      </Footer>
    </Form>
  );
};
