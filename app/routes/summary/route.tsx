import { Modal } from "~/components/modal";
import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PaymentPlanCard } from "~/components/paymentplan_card";
import type { CreatePaymentPlanResponse } from "~/utils/types.server";
import { Text, Title } from "@tremor/react";
import React, { useMemo } from "react";
import api from "~/services/api.server";
import { createClerkClient } from "@clerk/remix/api.server";
import { getAuth } from "@clerk/remix/ssr.server";
import { AccountIDToName } from "~/utils/helpers";

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

  const email = await getUserEmail(userId);

  const url = new URL(args.request.url);
  let encrypted = url.searchParams.get("resp") as string;
  const decrypted: CreatePaymentPlanResponse = JSON.parse(decodeURI(encrypted));

  const accounts = await api.accounts.get_user_accounts(email);
  return { decrypted, accounts };
};

export default function Route() {
  const { decrypted, accounts } = useLoaderData();

  const accIdToName: Map<string, string> = useMemo(
    () => AccountIDToName(accounts.data),
    [accounts]
  );

  return (
    <Modal
      isOpen={true}
      className="overflow-scroll p-10"
      navigate_path={"/dashboard"}
    >
      <Title className="text-center mt-2">New Payment Plan Created</Title>
      <Text className="text-center mt-2">
        Here is a summary of your new payment plan. You can always view all of
        your plans on the Payment Plans tab.
      </Text>
      <Text className="text-center">
        And don't worry, we'll text you all the necessary details when you have
        an upcoming payment to make.
      </Text>
      <PaymentPlanCard plans={decrypted.data} accIdToName={accIdToName} />
    </Modal>
  );
}
