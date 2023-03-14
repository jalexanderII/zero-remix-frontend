import { Modal } from "~/components/modal";
import { Card, ColGrid, Metric, Text, Title } from "@tremor/react";
import React, { useEffect } from "react";
import { Form, useLoaderData } from "@remix-run/react";
import type { AccountAndTransactions, AccountInfo } from "~/utils/types.server";
import type { ActionArgs, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import api from "~/services/api.server";
import { getUserEmail } from "~/routes/dashboard";
import { AccountAccordion } from "~/components/account_accordion";
import PaymentPlanPreferences from "~/components/paymentplan_preferences";
import { create } from "zustand";
import { toUSD } from "~/utils/helpers";

// define types for state values and actions separately
type State = {
  timeline: number;
  frequency: number;
  planType: number;
  amount: number[];
  totalAmount: number;
  accountInfo: AccountInfo[];
};

type Actions = {
  updateTimeline: (value: number) => void;
  updateFrequency: (value: number) => void;
  updatePlanType: (value: number) => void;
  updateAmount: (amount: number, index: number) => void;
  setTotalAmount: () => void;
  updateAccountInfo: (data: AccountInfo, index: number) => void;
  reset: () => void;
};

// define the initial state
const initialState: State = {
  timeline: 0,
  frequency: 0,
  planType: 0,
  amount: [],
  totalAmount: 0,
  accountInfo: [],
};

// create store
export const usePaymentPlanCreationForm = create<State & Actions>()(
  (set, get) => ({
    ...initialState,

    updateTimeline: (value) => set({ timeline: value }),
    updateFrequency: (value) => set({ frequency: value }),
    updatePlanType: (value) => set({ planType: value }),
    updateAmount: (amount, index) => {
      console.log(`updateAmount called with: ${amount} at index: ${index}`);
      set((state) => {
        const newAmount = [...state.amount];
        console.log(`prev amount: ${JSON.stringify(newAmount)}`);
        console.log(`will update ${newAmount[index]} from index: ${index}`);
        newAmount[index] = amount;
        console.log(`new amount: ${JSON.stringify(newAmount)}`);
        return { amount: newAmount };
      });
    },
    setTotalAmount: () =>
      set((state) => ({
        totalAmount: state.amount.reduce((pv, cv) => pv + cv, 0),
      })),
    updateAccountInfo: (data, index) => {
      set((state) => {
        const newAccountInfo = [...state.accountInfo];
        newAccountInfo[index] = data;
        return { accountInfo: newAccountInfo };
      });
    },
    reset: () => {
      set(initialState);
    },
  })
);

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
      return redirect(`summary?resp=${encodeURI(JSON.stringify(resp))}`);

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
  const [totalAmount, setTotalAmount] = React.useState(0);
  const { amount, frequency, timeline, planType, accountInfo, reset } =
    usePaymentPlanCreationForm((state) => state);
  const { accountAndTransactions, email } = useLoaderData();

  useEffect(() => {
    console.log("total amount before update is: ", totalAmount);
    const ntotal = amount.reduce((pv, cv) => pv + cv, 0);
    console.log(
      `set totalAmount called, current amount ${JSON.stringify(
        amount
      )}, resulting total: ${ntotal}`
    );
    setTotalAmount(ntotal);
  }, [JSON.stringify(amount)]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    reset();
    return !confirm("Are you sure?") ? e.preventDefault() : true;
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
          Select the accounts or transactions you'd like to pay-down and select
          your payment preferences.
        </Text>
        <AccountAccordion accountAndTransactions={accountAndTransactions} />
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