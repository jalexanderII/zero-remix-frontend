import { Modal } from "~/components/modal";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Card,
  Grid,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import React, { useEffect, useState } from "react";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import type { AccountAndTransactions, SlimAccount } from "~/utils/types.server";
import type { ActionArgs, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import api from "~/services/api.server";
import PaymentPlanPreferences from "~/components/paymentplan_preferences";
import { toUSD } from "~/utils/helpers";
import { usePaymentPlanCreationForm } from "~/utils/store";
import { PaymentPlanOptions } from "~/utils/constants";
import { PreferenceDropdownItem } from "~/components/select-box";
import { AccountAccordionBody } from "~/components/account_accordion_body";
import type { PaymentPlanRequest } from "~/utils/paymentplan_request_converter.server";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  let timeline = form.get("timeline");
  let frequency = form.get("frequency");
  let planType = form.get("planType");
  let accountInfo = form.get("account_info");
  let userId = form.get("userId");
  const action = form.get("_action");

  switch (action) {
    case "submit_preference":
      if (
        typeof timeline !== "string" ||
        typeof frequency !== "string" ||
        typeof planType !== "string" ||
        typeof accountInfo !== "string" ||
        typeof userId !== "string"
      ) {
        return json(
          {
            error: `Invalid Form Data Wrong Type`,
            fields: {
              timeline,
              frequency,
              planType,
              accountInfo,
              userId,
            },
          },
          { status: 400 }
        );
      }

      const req: PaymentPlanRequest = {
        account_info: JSON.parse(accountInfo),
        meta_data: {
          preferred_plan_type: Number(planType),
          preferred_timeline_in_months: Number(timeline),
          preferred_payment_freq: Number(frequency),
        },
        save_plan: false,
      };
      const resp = await api.paymentplan.submit_payment_plan(
        JSON.stringify(req),
        userId
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
  const accountAndTransactions: AccountAndTransactions =
    await api.paymentplan.get_transactions_by_account(userId);
  return { accountAndTransactions, userId };
};

const ErrorTypeToMsg: Map<string, string | undefined> = new Map([
  [
    "error",
    "Select either a transaction or enter an amount for at least one account to create a plan",
  ],
  ["", undefined],
]);

export default function PaymentPlanCreation() {
  const [error, setError] = useState("");
  const [planOption, setPlanOption] = useState("0");
  const { accountAndTransactions, userId } = useLoaderData();
  const { totalAmount, frequency, timeline, planType, accountInfo, reset } =
    usePaymentPlanCreationForm((state) => state);

  const navigate = useNavigate();
  const handleOnSubmit = () => {
    reset();
    return true;
  };

  const handleOnSubmitValidate = (e: React.FormEvent<HTMLFormElement>) => {
    if (!accountInfo || accountInfo.length === 0 || totalAmount === 0) {
      e.preventDefault();
      setError("error");
      navigate("/dashboard/paymentplan/create");
    } else {
      handleOnSubmit();
    }
  };

  useEffect(() => {
    if (accountInfo && accountInfo.length > 0 && totalAmount > 0) {
      setError("");
    }
  }, [accountInfo, totalAmount]);

  const handleInputChange = (value: string) => {
    setPlanOption(value);
  };

  return (
    <Modal
      isOpen={true}
      className="overflow-scroll p-10"
      navigate_path={"/dashboard"}
    >
      <Form method="post" onSubmit={handleOnSubmitValidate}>
        <input type="hidden" value={userId} name="userId" />
        <input type="hidden" value={frequency} name="frequency" />
        <input type="hidden" value={timeline} name="timeline" />
        <input type="hidden" value={planType} name="planType" />
        <input
          type="hidden"
          value={JSON.stringify(accountInfo)}
          name="account_info"
        />
        <Title>Create A Payment Plan</Title>
        <Text>
          Choose one of our 2 payment plan creation options and select your plan
          preferences when you are done.
        </Text>
        <Title className="mt-6">Payment Plan creation options</Title>
        <Card>
          <PreferenceDropdownItem
            options={PaymentPlanOptions}
            onChange={handleInputChange}
            value={planOption}
          />
          {GetPaymentPlanCreationBody(planOption, accountAndTransactions)}
        </Card>
        <Title className="mt-4">Payment Preferences</Title>
        <Grid numColsMd={4} numColsLg={4} className="gap-x-4 gap-y-4 mt-3">
          <PaymentPlanPreferences />
          <Card className="max-w-xs">
            <Text className="text-center">Total Amount</Text>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Metric>{toUSD(totalAmount)}</Metric>
            </div>
          </Card>
        </Grid>
        <br />
        <div className="flex flex-col items-center md:flex-row pt-14">
          <div className="flex-1" />
          <button
            className="rounded-xl bg-blue-300 font-semibold text-blue-600 w-56 h-12 transition duration-300 ease-in-out hover:bg-blue-400 hover:-translate-y-1"
            name="_action"
            value="submit_preference"
            disabled={error !== ""}
          >
            Send
          </button>
        </div>
        {error !== "" && (
          <Text className="text-center" color="red">
            {ErrorTypeToMsg.get(error)}
          </Text>
        )}
      </Form>
    </Modal>
  );
}

const GetPaymentPlanCreationBody = (
  po: string,
  data: AccountAndTransactions
) => {
  const validOptions = new Set([1, 2, 3]);
  const planOption = Number(po);
  return (
    <div className="mt-3">
      {planOption === 3 && (
        <Text className="text-center" color="stone">
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
    </div>
  );
};
