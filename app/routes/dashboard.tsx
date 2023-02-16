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

  return { kpis, waterfall, transactions, plaidLinked };
};

const Dashboard = (): JSX.Element => {
  const { kpis, waterfall, transactions, plaidLinked } = useLoaderData();

  return (
    <main>
      {PlaidButtonsComponent(plaidLinked)}
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
  plaidLinked: PlaidAccountLinkedResponse
): JSX.Element => {
  return (
    <>
      {plaidLinked?.data?.debit && plaidLinked?.data?.credit ? null : (
        <Card maxWidth="max-w-md">
          <Flex
            justifyContent="justify-center"
            alignItems="items-center"
            spaceX="space-x-6"
            truncate={true}
            marginTop="mt-0"
          >
            {!plaidLinked?.data?.debit ? (
              <Button size="sm">{`"Link Debit account"`}</Button>
            ) : null}
            {!plaidLinked?.data?.credit ? (
              <Button size="sm">{`"Link Credit account"`}</Button>
            ) : null}
          </Flex>
        </Card>
      )}
    </>
  );
};

export default Dashboard;
