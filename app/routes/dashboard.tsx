import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getAuth } from "@clerk/remix/ssr.server";
import api from "~/services/api.server";
import type {
  KPIResponse,
  PlaidAccountLinkedResponse,
  SlimTransaction,
  TransactionResponse,
  WaterfallDataResponse,
  WaterfallResponse,
} from "~/utils/types.server";
import { Waterfall } from "~/components/waterfall";
import { KpiPanel } from "~/components/kpi_panel";
import { Block, Button, Card, Flex } from "@tremor/react";
import { makeWaterfallFromJson } from "~/services/waterfall";
import { TransactionsTableWithPagination } from "~/components/transactions_table_with_pagination";
import { pruneTransactions } from "~/services/transactions.server";
import { createClerkClient } from "@clerk/remix/api.server";
import React from "react";
import { get_plaid_url } from "~/services/plaid.server";

interface DashboardLoaderData {
  kpis: KPIResponse;
  waterfall: WaterfallDataResponse;
  transactions: SlimTransaction[];
}

export const getUserEmail = async (userId: string): Promise<string> => {
  const { emailAddresses } = await createClerkClient({
    apiKey: process.env.CLERK_SECRET_KEY,
  }).users.getUser(userId);

  if (!emailAddresses || emailAddresses.length === 0) {
    throw new Error("No email address found for user");
  }

  return emailAddresses[0].emailAddress;
};

export const getDashboardLoaderData = async (
  email: string
): Promise<DashboardLoaderData> => {
  const trxnResp: TransactionResponse =
    await api.transactions.get_user_transactions(email);
  const transactions: SlimTransaction[] = await pruneTransactions(
    trxnResp.data
  );
  const kpis: KPIResponse = await api.kpis.get_user_kpis(email);
  const resp: WaterfallResponse = await api.waterfall.get_user_waterfall(email);
  const waterfall = makeWaterfallFromJson(resp);
  return { kpis, waterfall, transactions };
};

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }

  const email = await getUserEmail(userId);
  const { kpis, waterfall, transactions } = await getDashboardLoaderData(email);

  const plaidLinked: PlaidAccountLinkedResponse =
    await api.plaid.is_plaid_linked(email);

  const PLAID_FRONTEND_URL = get_plaid_url();

  return {
    kpis,
    waterfall,
    transactions,
    plaidLinked,
    email,
    PLAID_FRONTEND_URL,
  };
};

const Dashboard = (): JSX.Element => {
  const {
    kpis,
    waterfall,
    transactions,
    plaidLinked,
    email,
    PLAID_FRONTEND_URL,
  } = useLoaderData();

  return (
    <main>
      {PlaidButtonsComponent(plaidLinked, email, PLAID_FRONTEND_URL)}
      <Block marginTop="mt-2">
        <Waterfall waterfall={waterfall} />
      </Block>
      <Block marginTop="mt-2">
        <KpiPanel kpis={kpis} />
      </Block>
      <Block marginTop="mt-2">
        <TransactionsTableWithPagination transactions={transactions} />
      </Block>
      <div className="preContainer"></div>
      <Outlet />
    </main>
  );
};

const PlaidButtonsComponent = (
  plaidLinked: PlaidAccountLinkedResponse,
  email: string,
  PLAID_FRONTEND_URL: string
): JSX.Element => {
  const handleOnClickDebit = () => {
    window.location.href = `${PLAID_FRONTEND_URL}/debit?email=${email}`;
  };
  const handleOnClickCredit = () => {
    window.location.href = `${PLAID_FRONTEND_URL}/credit?email=${email}`;
  };

  return (
    <Card maxWidth="max-w-md">
      <Flex
        justifyContent="justify-center"
        alignItems="items-center"
        spaceX="space-x-6"
        truncate={true}
        marginTop="mt-0"
      >
        <input type="hidden" name="email" value={email} />
        {!plaidLinked?.data?.debit ? (
          <Button size="sm" onClick={handleOnClickDebit}>
            Link Debit account
          </Button>
        ) : null}
        {!plaidLinked?.data?.credit ? (
          <Button size="sm" onClick={handleOnClickCredit}>
            Link Credit account
          </Button>
        ) : (
          <Button size="sm" onClick={handleOnClickCredit}>
            Link Another Credit account
          </Button>
        )}
      </Flex>
    </Card>
  );
};

export default Dashboard;
