import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getAuth } from "@clerk/remix/ssr.server";
import api from "~/services/api.server";
import type {
  AccountsResponse,
  KPIResponse,
  PlaidAccountLinkedResponse,
  SlimTransaction,
  TransactionResponse,
  WaterfallDataResponse,
  WaterfallResponse,
} from "~/utils/types.server";
import { Waterfall } from "~/components/waterfall";
import { KpiPanel } from "~/components/kpi_panel";
import { Button, Card, Flex } from "@tremor/react";
import { makeWaterfallFromJson } from "~/services/waterfall";
import { TransactionsTableWithPagination } from "~/components/transactions_table_with_pagination";
import { pruneTransactions } from "~/services/transactions.server";
import { createClerkClient } from "@clerk/remix/api.server";
import React, { useEffect } from "react";
import { get_plaid_url } from "~/services/plaid.server";
import { Onboarding } from "~/components/onboarding";

interface DashboardLoaderData {
  kpis: KPIResponse;
  waterfall: WaterfallDataResponse;
  transactions: SlimTransaction[];
  accounts: AccountsResponse;
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
  userId: string | null
): Promise<DashboardLoaderData> => {
  const trxnResp: TransactionResponse =
    await api.transactions.get_user_transactions(userId);
  if (!trxnResp.data || trxnResp.data.length === 0) {
    console.log(`User ${userId}, has no transactions`);
  }
  const accounts = await api.accounts.get_user_accounts(userId);
  let transactions: SlimTransaction[] = await pruneTransactions(trxnResp.data);
  const kpis: KPIResponse = await api.kpis.get_user_kpis(userId);
  const resp: WaterfallResponse = await api.waterfall.get_user_waterfall(
    userId
  );
  const waterfall = makeWaterfallFromJson(resp);
  return { kpis, waterfall, transactions, accounts };
};

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }

  const { kpis, waterfall, transactions, accounts } =
    await getDashboardLoaderData(userId);

  const plaidLinked: PlaidAccountLinkedResponse =
    await api.plaid.is_plaid_linked(userId);

  const PLAID_FRONTEND_URL = get_plaid_url();

  return {
    kpis,
    waterfall,
    transactions,
    accounts,
    plaidLinked,
    userId,
    PLAID_FRONTEND_URL,
  };
};

const Dashboard = (): JSX.Element => {
  const {
    kpis,
    waterfall,
    transactions,
    accounts,
    plaidLinked,
    userId,
    PLAID_FRONTEND_URL,
  } = useLoaderData();
  const [action, setAction] = React.useState<string[]>([]);

  useEffect(() => {
    if (kpis?.data?.payment_plans > 0) {
      setAction((prev) => [...prev, "payment-plan-created"]);
    }
  }, [kpis]);

  if (
    action.includes("linked-credit") &&
    action.includes("payment-plan-created") &&
    !action.includes("complete")
  ) {
    setAction((prev) => [...prev, "complete"]);
  }

  return (
    <main>
      <Onboarding action={action} />
      {PlaidButtonsComponent(
        plaidLinked,
        userId,
        PLAID_FRONTEND_URL,
        setAction
      )}
      <div className="mt-2">
        <Waterfall waterfall={waterfall} ready={transactions.length > 0} />
      </div>
      <div className="mt-2">
        <KpiPanel kpis={kpis} />
      </div>
      <div className="mt-2">
        <TransactionsTableWithPagination
          transactions={transactions}
          accounts={accounts.data}
        />
      </div>
      <div className="preContainer"></div>
      <Outlet />
    </main>
  );
};

const PlaidButtonsComponent = (
  plaidLinked: PlaidAccountLinkedResponse,
  userId: string,
  PLAID_FRONTEND_URL: string,
  setAction: React.Dispatch<React.SetStateAction<string[]>>
): JSX.Element => {
  useEffect(() => {
    if (plaidLinked?.data?.credit) {
      setAction((prev) => [...prev, "linked-credit"]);
    }
  }, [plaidLinked]);
  const handleOnClickDebit = () => {
    setAction((prev) => [...prev, "linked-debit"]);
    window.location.href = encodeURI(
      `${PLAID_FRONTEND_URL}/debit?uu=${userId}`
    );
  };
  const handleOnClickCredit = () => {
    setAction((prev) => [...prev, "linked-credit"]);
    window.location.href = encodeURI(
      `${PLAID_FRONTEND_URL}/credit?uu=${userId}`
    );
  };

  return (
    <div className="flex flex-col md:flex-row pr-4 mt-2">
      <div className="flex-1" />
      <Flex className="justify-center items-center space-x-6 truncate mt-0">
        {!plaidLinked?.data?.debit ? (
          <Card className="p-0 max-w-fit">
            <Button size="xs" onClick={handleOnClickDebit}>
              Link Debit account
            </Button>
          </Card>
        ) : null}
        {!plaidLinked?.data?.credit ? (
          <Card className="p-0 max-w-fit">
            <Button size="xs" onClick={handleOnClickCredit}>
              Link Credit account
            </Button>
          </Card>
        ) : (
          <Card className="p-0 max-w-fit">
            <Button size="xs" variant="secondary" onClick={handleOnClickCredit}>
              Link Another Credit account
            </Button>
          </Card>
        )}
      </Flex>
    </div>
  );
};

export default Dashboard;
