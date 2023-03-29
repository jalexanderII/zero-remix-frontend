import React from "react";
import type { SlimTransaction } from "~/utils/types.server";
import { PaymentPlanTransactions } from "~/components/TrxnTableWithCheckbox/transactions_table_with_checkbox";
import { AccountListAmount } from "~/components/account_list_amounts";

interface props {
  idx: number;
  name: string;
  transactions: SlimTransaction[];
  accountId: string;
  purpose: string;
  balance: number;
}

export const AccountAccordionBody: React.FC<props> = ({
  idx,
  transactions,
  accountId,
  purpose,
  name,
  balance,
}) => {
  transactions.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return purpose === "transactions" ? (
    <PaymentPlanTransactions
      idx={idx}
      transactions={transactions}
      accountId={accountId}
    />
  ) : (
    <AccountListAmount
      idx={idx}
      accountId={accountId}
      balance={balance}
      name={name}
    />
  );
};
