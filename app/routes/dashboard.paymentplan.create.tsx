import { Modal } from "~/components/modal";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Block,
  Card,
  ColGrid,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import React, { useState } from "react";
import { Form, useLoaderData } from "@remix-run/react";
import type { AccountAndTransactions, SlimAccount } from "~/utils/types.server";
import type { ActionArgs, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import api from "~/services/api.server";
import { getUserEmail } from "~/routes/dashboard";
import PaymentPlanPreferences from "~/components/paymentplan_preferences";
import { toUSD } from "~/utils/helpers";
import { usePaymentPlanCreationForm } from "~/utils/store";
import { PaymentPlanOptions } from "~/utils/constants";
import { PreferenceDropdownItem } from "~/components/select-box";
import { AccountAccordionBody } from "~/components/account_accordion_body";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  let timeline = form.get("timeline");
  let frequency = form.get("frequency");
  let planType = form.get("planType");
  let accountInfo = form.get("account_info");
  let email = form.get("email");
  const action = form.get("_action");

  switch (action) {
    case "submit_preference":
      if (
        typeof timeline !== "string" ||
        typeof frequency !== "string" ||
        typeof planType !== "string" ||
        typeof accountInfo !== "string" ||
        typeof email !== "string"
      ) {
        return json(
          {
            error: `Invalid Form Data Wrong Type`,
            fields: { timeline, frequency, planType, accountInfo, email },
          },
          { status: 400 }
        );
      }

      const req = {
        account_info: JSON.parse(accountInfo),
        meta_data: {
          preferred_plan_type: Number(planType),
          preferred_timeline_in_months: Number(timeline),
          preferred_payment_freq: Number(frequency),
        },
        save_plan: true,
      };
      const resp = await api.paymentplan.submit_payment_plan(
        email,
        JSON.stringify(req)
      );
      return redirect(`/summary?resp=${encodeURI(JSON.stringify(resp))}`);

    default:
      return json({ error: `Invalid Form Data` }, { status: 400 });
  }
}

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  const email = await getUserEmail(userId);
  const accountAndTransactions: AccountAndTransactions =
    await api.paymentplan.get_transactions_by_account(email);
  return { accountAndTransactions, email };
};

export default function PaymentPlanCreation() {
  const [planOption, setPlanOption] = useState(0);
  const { accountAndTransactions, email } = useLoaderData();
  const { totalAmount, frequency, timeline, planType, accountInfo, reset } =
    usePaymentPlanCreationForm((state) => state);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    reset();
    return !confirm("Are you sure?") ? e.preventDefault() : true;
  };

  const handleInputChange = (value: number) => {
    setPlanOption(value);
  };

  return (
    <Modal
      isOpen={true}
      className="tr-overflow-auto p-10"
      navigate_path={"/dashboard"}
    >
      <Form method="post" onSubmit={handleOnSubmit}>
        <input type="hidden" value={frequency} name="frequency" />
        <input type="hidden" value={timeline} name="timeline" />
        <input type="hidden" value={planType} name="planType" />
        <input
          type="hidden"
          value={JSON.stringify(accountInfo)}
          name="account_info"
        />
        <input type="hidden" value={email} name="email" />
        <Title>Create A Payment Plan</Title>
        <Text>
          Choose one of our 2 payment plan creation options and select your plan
          preferences when you are done.
        </Text>
        <Title marginTop="mt-6">Payment Plan creation options</Title>
        <Card>
          <PreferenceDropdownItem
            options={PaymentPlanOptions}
            onChange={(v: number) => handleInputChange(v)}
            value={planOption}
          />
          {GetPaymentPlanCreationBody(planOption, accountAndTransactions)}
        </Card>
        <Title marginTop="mt-4">Payment Preferences</Title>
        <ColGrid
          numColsMd={4}
          numColsLg={4}
          gapX="gap-x-4"
          gapY="gap-y-4"
          marginTop="mt-3"
        >
          <PaymentPlanPreferences />
          <Card maxWidth="max-w-xs">
            <Text textAlignment={"text-center"}>Total Amount</Text>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Metric>{toUSD(totalAmount)}</Metric>
            </div>
          </Card>
        </ColGrid>
        <br />
        <div className="flex flex-col items-center md:flex-row pt-14">
          <div className="flex-1" />
          <button
            className="rounded-xl bg-blue-300 font-semibold text-blue-600 w-56 h-12 transition duration-300 ease-in-out hover:bg-blue-400 hover:-translate-y-1"
            name="_action"
            value="submit_preference"
          >
            Send
          </button>
        </div>
      </Form>
    </Modal>
  );
}

const GetPaymentPlanCreationBody = (
  planOption: number,
  data: AccountAndTransactions
) => {
  const validOptions = new Set([1, 2, 3]);

  return (
    <Block marginTop="mt-3">
      {planOption === 3 && (
        <Text textAlignment={"text-center"} color="stone">
          Select your payment preferences below and we'll handle the rest of the
          hard work!
        </Text>
      )}
      {planOption !== 3 && (
        <AccordionList>
          {data.slimAccounts.map((i: SlimAccount, idx: number) => (
            <Accordion key={i.accountId}>
              <AccordionHeader>{i.name}</AccordionHeader>
              <AccordionBody>
                {(planOption === 1 || planOption === 2) && (
                  <AccountAccordionBody
                    accountId={i.accountId}
                    balance={i.balance}
                    idx={idx}
                    purpose={planOption === 1 ? "transactions" : "amounts"}
                    transactions={
                      // @ts-ignore
                      data.transactionDict[i.accountId]
                    }
                    name={i.name}
                  />
                )}
                {planOption === 3 &&
                  "Select your payment preferences below and we'll handle the rest of the hard work!"}
                {!validOptions.has(planOption) &&
                  "Choose one of the options from the dropdown above to see more details"}
              </AccordionBody>
            </Accordion>
          ))}
        </AccordionList>
      )}
    </Block>
  );
};
