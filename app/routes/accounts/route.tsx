import React from "react";
import { Card, Text, Title } from "@tremor/react";
import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { getUserEmail } from "~/routes/dashboard";
import api from "~/services/api.server";
import { useLoaderData } from "@remix-run/react";
import type { Account } from "~/utils/types.server";
import { AccountCard } from "~/components/acccount_card";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  const email = await getUserEmail(userId);
  const accountsResponse = await api.accounts.get_user_accounts(email);
  const accounts: Account[] = [];
  if (accountsResponse.data && accountsResponse.data.length > 0) {
    for (const account of accountsResponse.data) {
      if (account.type === "credit") {
        accounts.push(account);
      }
    }
  }
  return { accounts };
};

export default function AccountSummary() {
  const { accounts } = useLoaderData();

  return (
    <Card className="mt-6">
      <Title>Linked Accounts</Title>
      <Text>
        These are all of your linked accounts. If any account has a balance and
        recent transactions you can may a payment plan for it.
      </Text>
      <AccountCard accounts={accounts} />
    </Card>
  );
}
