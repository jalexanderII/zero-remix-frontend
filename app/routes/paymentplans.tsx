import { Button, Footer, Text, Title } from "@tremor/react";
import type { PaymentAction, PaymentPlan } from "~/utils/types.server";
import { PaymentPlanCard } from "~/components/paymentplan_card";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

const Pactions: PaymentAction[] = [
  {
    id: "000000000000000000000001",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.79,
    transaction_date: "Tue, 28 Feb 2023 23:15:39 GMT",
    status: 1,
  },
  {
    id: "000000000000000000000002",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.79,
    transaction_date: "Tue, 14 Mar 2023 23:15:39 GMT",
    status: 1,
  },
  {
    id: "000000000000000000000003",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.79,
    transaction_date: "Tue, 28 Mar 2023 23:15:39 GMT",
    status: 1,
  },
  {
    id: "000000000000000000000004",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.79,
    transaction_date: "Tue, 11 Apr 2023 23:15:39 GMT",
    status: 1,
  },
  {
    id: "000000000000000000000005",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.79,
    transaction_date: "Tue, 25 Apr 2023 23:15:39 GMT",
    status: 1,
  },
  {
    id: "000000000000000000000006",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.79,
    transaction_date: "Tue, 09 May 2023 23:15:39 GMT",
    status: 1,
  },
  {
    id: "000000000000000000000007",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.79,
    transaction_date: "Tue, 23 May 2023 23:15:39 GMT",
    status: 1,
  },
  {
    id: "000000000000000000000008",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.79,
    transaction_date: "Tue, 06 Jun 2023 23:15:39 GMT",
    status: 1,
  },
  {
    id: "000000000000000000000009",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.79,
    transaction_date: "Tue, 20 Jun 2023 23:15:39 GMT",
    status: 1,
  },
  {
    id: "000000000000000000000010",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.79,
    transaction_date: "Tue, 04 Jul 2023 23:15:39 GMT",
    status: 1,
  },
  {
    id: "000000000000000000000011",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.79,
    transaction_date: "Tue, 18 Jul 2023 23:15:39 GMT",
    status: 1,
  },
  {
    id: "000000000000000000000012",
    account_id: "62ce9f1ebae41154387ac637",
    amount: 0.7000000000000011,
    transaction_date: "Tue, 01 Aug 2023 23:15:39 GMT",
    status: 1,
  },
];
const plans: PaymentPlan[] = [
  {
    id: "000000000000000000000001",
    payment_plan_id: "000000000000000000000001",
    user_id: "62ce9f1ebae41154387ac637",
    payment_task_id: [],
    active: true,
    name: "Plan_1_68c2_02.14.2023",
    amount: 9.39,
    timeline: 6,
    payment_freq: 2,
    amount_per_payment: 0.79,
    plan_type: 2,
    end_date: "Tue, 01 Aug 2023 23:15:39 GMT",
    status: 1,
    payment_action: Pactions,
  },
  {
    id: "000000000000000000000001",
    payment_plan_id: "000000000000000000000001",
    user_id: "62ce9f1ebae41154387ac637",
    payment_task_id: [],
    active: true,
    name: "Plan_2_68c2_02.14.2023",
    amount: 9.39,
    timeline: 6,
    payment_freq: 2,
    amount_per_payment: 0.79,
    plan_type: 2,
    end_date: "Tue, 01 Aug 2023 23:15:39 GMT",
    status: 1,
    payment_action: Pactions,
  },
  {
    id: "000000000000000000000001",
    payment_plan_id: "000000000000000000000001",
    user_id: "62ce9f1ebae41154387ac637",
    payment_task_id: [],
    active: true,
    name: "Plan_3_68c2_02.14.2023",
    amount: 9.39,
    timeline: 6,
    payment_freq: 2,
    amount_per_payment: 0.79,
    plan_type: 2,
    end_date: "Tue, 01 Aug 2023 23:15:39 GMT",
    status: 1,
    payment_action: Pactions,
  },
  {
    id: "000000000000000000000001",
    payment_plan_id: "000000000000000000000001",
    user_id: "62ce9f1ebae41154387ac637",
    payment_task_id: [],
    active: true,
    name: "Plan_4_68c2_02.14.2023",
    amount: 9.39,
    timeline: 6,
    payment_freq: 2,
    amount_per_payment: 0.79,
    plan_type: 2,
    end_date: "Tue, 01 Aug 2023 23:15:39 GMT",
    status: 1,
    payment_action: Pactions,
  },
];

export default function PaymentPlans() {
  return (
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
      <PaymentPlanCard plans={plans} footer={PlanFooter} />
    </main>
  );
}

const PlanFooter = () => {
  return (
    <Footer>
      <Button
        variant="light"
        size="sm"
        text="Delete"
        icon={XMarkIcon}
        iconPosition="left"
        color="red"
        onClick={() => {
          console.log("delete");
        }}
      />
    </Footer>
  );
};
