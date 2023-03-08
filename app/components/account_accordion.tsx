import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Block,
} from "@tremor/react";
import React from "react";
import type {
  AccountAndTransactions,
  SlimAccount,
  SlimTransaction,
} from "~/utils/types.server";
import { PaymentPlanTransactions } from "~/components/TrxnTableWithCheckbox/transactions_table_with_checkbox";
import { toUSD } from "~/utils/helpers";

interface props {
  accountAndTransactions: AccountAndTransactions;
}

export const AccountAccordion: React.FC<props> = ({
  accountAndTransactions,
}) => {
  return (
    <Block marginTop="mt-6">
      {AccountTrxnItem(accountAndTransactions)}
      {/*<AccordionList>*/}
      {/*  {accountAndTransactions.slimAccounts.map(*/}
      {/*    (i: SlimAccount, idx: number) => (*/}
      {/*      <Accordion key={i.accountId}>*/}
      {/*        <AccordionHeader>{i.name}</AccordionHeader>*/}
      {/*        <AccordionBody>*/}
      {/*          <PaymentPlanTransactions*/}
      {/*            idx={idx}*/}
      {/*            transactions={*/}
      {/*              // @ts-ignore*/}
      {/*              accountAndTransactions.transactionDict[i.accountId]*/}
      {/*            }*/}
      {/*            accountId={i.accountId}*/}
      {/*          />*/}
      {/*        </AccordionBody>*/}
      {/*      </Accordion>*/}
      {/*    )*/}
      {/*  )}*/}
      {/*</AccordionList>*/}
    </Block>
  );
};

const AccountTrxnItem = (accountAndTransactions: AccountAndTransactions) => {
  const accounts = [];
  const transaction: SlimTransaction[][] = [];
  for (const acc of accountAndTransactions.slimAccounts) {
    accounts.push(acc);
    // @ts-ignore
    const a = accountAndTransactions.transactionDict[acc.accountId];
    if (a) {
      transaction.push(a);
    }
  }

  return (
    <AccordionList>
      {accounts.map((i: SlimAccount, idx: number) => (
        <Accordion key={i.accountId}>
          <AccordionHeader>{i.name}</AccordionHeader>
          <AccordionBody>
            <PaymentPlanTransactions
              idx={idx}
              transactions={
                transaction.length == 0
                  ? makeTrxnForFullAccount(i)
                  : transaction[idx]
              }
              accountId={i.accountId}
            />
          </AccordionBody>
        </Accordion>
      ))}
    </AccordionList>
  );
};

const makeTrxnForFullAccount = (acc: SlimAccount) => {
  const transactions: SlimTransaction[] = [];
  transactions.push({
    id: acc.accountId,
    accountId: acc.accountId,
    userId: acc.userId,
    name: "Account current balance",
    amount: toUSD(acc.balance),
    value: acc.balance,
    date: "n/a",
    transactionId: acc.accountId,
  });
  return transactions;
};
