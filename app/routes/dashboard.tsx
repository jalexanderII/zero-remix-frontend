import type { ActionArgs, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Outlet, useLoaderData } from "@remix-run/react";
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
import { plaid_url } from "~/services/plaid.server";

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

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const link = form.get("link");
  const email = form.get("email");
  if (typeof link === "string" && typeof email === "string") {
    return redirect(plaid_url(email, link));
  }
  return json({ error: `Invalid Form Data` }, { status: 400 });
}

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }

  const email = await getUserEmail(userId);
  const { kpis, waterfall, transactions } = await getDashboardLoaderData(email);

  const plaidLinked: PlaidAccountLinkedResponse =
    await api.plaid.is_plaid_linked(email);

  return { kpis, waterfall, transactions, plaidLinked, email };
};

const Dashboard = (): JSX.Element => {
  const { kpis, waterfall, transactions, plaidLinked, email } = useLoaderData();

  return (
    <main>
      {PlaidButtonsComponent(plaidLinked, email)}
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
  email: string
): JSX.Element => {
  return (
    <Card maxWidth="max-w-md">
      <Form method="post">
        <Flex
          justifyContent="justify-center"
          alignItems="items-center"
          spaceX="space-x-6"
          truncate={true}
          marginTop="mt-0"
        >
          <input type="hidden" name="email" value={email} />
          {!plaidLinked?.data?.debit ? (
            <>
              <input type="hidden" name="link" value="debit" />
              <Button type="submit" size="sm">
                Link Debit account
              </Button>
            </>
          ) : null}
          <input type="hidden" name="link" value="credit" />
          {!plaidLinked?.data?.credit ? (
            <Button type="submit" size="sm">
              Link Credit account
            </Button>
          ) : (
            <Button type="submit" size="sm">
              Link Another Credit account
            </Button>
          )}
        </Flex>
      </Form>
    </Card>
  );
};

export default Dashboard;
