import { Modal } from "~/components/modal";
import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { PaymentPlanCard } from "~/components/paymentplan_card";
import type {
  CreatePaymentPlanResponse,
  PaymentPlan,
} from "~/utils/types.server";
import { Button, Text, Title } from "@tremor/react";
import React, { useMemo } from "react";
import api from "~/services/api.server";
import { createClerkClient } from "@clerk/remix/api.server";
import { getAuth } from "@clerk/remix/ssr.server";
import { AccountIDToName } from "~/utils/helpers";
import { CheckIcon } from "@heroicons/react/20/solid";

export const getUserEmail = async (userId: string): Promise<string> => {
  const { emailAddresses } = await createClerkClient({
    apiKey: process.env.CLERK_SECRET_KEY,
  }).users.getUser(userId);

  if (!emailAddresses || emailAddresses.length === 0) {
    throw new Error("No email address found for user");
  }

  return emailAddresses[0].emailAddress;
};

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }

  const url = new URL(args.request.url);
  let encrypted = url.searchParams.get("resp") as string;
  const decrypted: CreatePaymentPlanResponse = JSON.parse(decodeURI(encrypted));

  const accounts = await api.accounts.get_user_accounts(userId);
  return { decrypted, accounts };
};

export default function Route() {
  const { decrypted, accounts } = useLoaderData();

  const accIdToName: Map<string, string> = useMemo(
    () => AccountIDToName(accounts.data),
    [accounts]
  );

  const paymentPlans: PaymentPlan[] = decrypted.data;

  return (
    <Modal
      isOpen={true}
      className="overflow-scroll p-10"
      navigate_path={"/dashboard"}
    >
      <Title className="text-center mt-2">
        {paymentPlans.length > 1
          ? "New Payment Plan Options Available"
          : "New Payment Plan Created"}
      </Title>
      <Text className="text-center mt-2">
        {paymentPlans.length > 1
          ? "Here are a few new payment plan options. Accept the one that best meets your needs. You can always view all of your plans on the Payment Plans tab."
          : "Here is a summary of your new payment plan. You can always view all of your plans on the Payment Plans tab."}
      </Text>
      <Text className="text-center">
        We'll text you a reminder with all of the necessary details when you
        have an upcoming payment.
      </Text>
      <PaymentPlanCard
        plans={paymentPlans}
        accIdToName={accIdToName}
        accept={paymentPlans.length > 1 ? AcceptFooter : undefined}
      />
    </Modal>
  );
}

const AcceptFooter = (paymentPlan: PaymentPlan) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    return !confirm("Are you sure?") ? e.preventDefault() : true;
  };

  return (
    <Form method="post" onSubmit={handleOnSubmit} action="/paymentplans">
      <input
        type="hidden"
        value={JSON.stringify(paymentPlan)}
        name="payment_plan"
      />
      <div className="border-t border-slate-200">
        <Button
          type="submit"
          name="_action"
          value="accept_payment_plan"
          className="mt-3"
          size="sm"
          icon={CheckIcon}
          iconPosition="left"
          color="blue"
        >
          Accept
        </Button>
      </div>
    </Form>
  );
};
