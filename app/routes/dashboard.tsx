import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useLoaderData, useOutletContext } from "@remix-run/react";
import Container from "@mui/material/Container";
import { getAuth } from "@clerk/remix/ssr.server";
import api from "~/services/api.server";
import type {
  KPIResponse,
  SlimTransaction,
  SlimWaterfall,
  TransactionResponse,
  WaterfallResponse,
} from "~/utils/types.server";
import { Waterfall } from "~/components/waterfall";
import { KpiPanel } from "~/components/kpi_panel";
import { Block } from "@tremor/react";
import { makeWaterfallFromJson } from "~/services/waterfall";
import { fromJson } from "~/utils/helpers";
import { TransactionsTableWithPagination } from "~/components/transactions_table_with_pagination";
import { pruneTransactions } from "~/services/transactions.server";
import { createClerkClient } from "@clerk/remix/api.server";

interface DashboardLoaderData {
  kpis: KPIResponse;
  waterfall: string;
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

const getDashboardLoaderData = async (
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

  return await getDashboardLoaderData(email);
};

const Dashboard = (): JSX.Element => {
  const { kpis, waterfall, transactions } = useLoaderData();
  const newWaterfall: Map<string, SlimWaterfall> = fromJson(waterfall);
  return (
    <>
      <Container maxWidth="lg">
        <main>
          <Block marginTop="mt-2">
            <Waterfall waterfall={newWaterfall} />
          </Block>
          <Block marginTop="mt-2">
            <KpiPanel kpis={kpis} />
          </Block>
          <Block marginTop="mt-2">
            <TransactionsTableWithPagination transactions={transactions} />
          </Block>
          <div className="preContainer"></div>
        </main>
      </Container>
      <Outlet />
    </>
  );
};

export default Dashboard;
