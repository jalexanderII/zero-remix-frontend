import { Modal } from "~/components/modal";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PaymentPlanCard } from "~/components/paymentplan_card";
import type { CreatePaymentPlanResponse } from "~/utils/types.server";
import { Text, Title } from "@tremor/react";
import React from "react";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  let encrypted = url.searchParams.get("resp") as string;
  const decrypted: CreatePaymentPlanResponse = JSON.parse(decodeURI(encrypted));
  return { decrypted };
};

export default function PaymentplanCreateSummary() {
  const { decrypted } = useLoaderData();
  return (
    <Modal
      isOpen={true}
      className="tr-overflow-auto p-10"
      navigate_path={"/dashboard"}
    >
      <Title textAlignment="text-center" marginTop="mt-2">
        New Payment Plan Created!
      </Title>
      <Text textAlignment="text-center" marginTop="mt-2">
        Here is a summary of your new payment plan. You can always view all of
        your plans on the Payment Plans tab.
      </Text>
      <PaymentPlanCard plans={decrypted.data} />
    </Modal>
  );
}
