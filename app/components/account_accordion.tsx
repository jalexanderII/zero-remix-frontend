import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from "@tremor/react";
import React from "react";
import type { AccountAndTransactions, SlimAccount } from "~/utils/types.server";
import { AccountAccordionBody } from "~/components/account_accordion_body";

interface props {
  accountAndTransactions: AccountAndTransactions;
  purpose: string;
}

export const AccountAccordion: React.FC<props> = ({
  accountAndTransactions,
  purpose,
}) => {
  return (
    <div className="mt-1">
      <AccordionList>
        {accountAndTransactions.slimAccounts.map(
          (i: SlimAccount, idx: number) => (
            <Accordion key={i.accountId}>
              <AccordionHeader>{i.name}</AccordionHeader>
              <AccordionBody>
                <AccountAccordionBody
                  accountId={i.accountId}
                  balance={i.balance}
                  idx={idx}
                  purpose={purpose}
                  transactions={
                    // @ts-ignore
                    accountAndTransactions.transactionDict[i.accountId]
                  }
                  name={i.name}
                />
              </AccordionBody>
            </Accordion>
          )
        )}
      </AccordionList>
    </div>
  );
};
