import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Block,
} from "@tremor/react";
import React from "react";
import type { AccountAndTransactions, SlimAccount } from "~/utils/types.server";
import { PaymentPlanTransactions } from "~/components/TrxnTableWithCheckbox/transactions_table_with_checkbox";

interface props {
  accountAndTransactions: AccountAndTransactions;
}

export const AccountAccordion: React.FC<props> = ({
  accountAndTransactions,
}) => {
  return (
    <Block marginTop="mt-6">
      <AccordionList>
        {accountAndTransactions.slimAccounts.map(
          (i: SlimAccount, idx: number) => (
            <Accordion key={i.accountId}>
              <AccordionHeader>{i.name}</AccordionHeader>
              <AccordionBody>
                <PaymentPlanTransactions
                  idx={idx}
                  transactions={
                    // @ts-ignore
                    accountAndTransactions.transactionDict[i.accountId]
                  }
                  accountId={i.accountId}
                />
              </AccordionBody>
            </Accordion>
          )
        )}
      </AccordionList>
      {/*{AccountTrxnItem(accountAndTransactions)}*/}
    </Block>
  );
};
