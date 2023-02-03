import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from "@clerk/remix/api.server";
import * as process from "process";
import api from "~/services/api.server";
import type { KPIResponse } from "~/utils/types.server";
import Container from "@mui/material/Container";
import { Waterfall } from "~/components/waterfall";
import { KpiPanel } from "~/components/kpi_panel";
import TableWithCheckbox from "~/components/table_with_checkbox";
import { Block } from "@tremor/react";
import { makeWaterfallFromJson } from "~/services/waterfall";
import { fromJson } from "~/utils/helpers";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);

  if (!userId) {
    return redirect("/sign-in");
  }

  const { emailAddresses } = await createClerkClient({
    apiKey: process.env.CLERK_SECRET_KEY,
  }).users.getUser(userId);
  const email = emailAddresses[0].emailAddress;

  const kpis: KPIResponse = await api.kpis.get_user_kpis(email);
  const resp = await api.waterfall.get_user_waterfall(email);
  const waterfall = makeWaterfallFromJson(resp);
  return { kpis, waterfall };
};

const Dashboard = (): JSX.Element => {
  const { kpis, waterfall } = useLoaderData();
  const newWaterfall = fromJson(waterfall);
  return (
    <Container maxWidth="lg">
      <main>
        <Block marginTop="mt-2">
          <Waterfall waterfall={newWaterfall} />
        </Block>
        <Block marginTop="mt-2">
          <KpiPanel kpis={kpis} />
        </Block>
        <Block marginTop="mt-2">
          <TableWithCheckbox />
        </Block>
        <div className="preContainer"></div>
      </main>
    </Container>
  );
};

export default Dashboard;
