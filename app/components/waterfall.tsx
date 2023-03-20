import {
  BarChart,
  Button,
  Card,
  Col,
  ColGrid,
  Text,
  Title,
} from "@tremor/react";
import React from "react";
import { useNavigate } from "@remix-run/react";
import { valueFormatter } from "~/utils/helpers";
import type { WaterfallDataResponse } from "~/utils/types.server";
import { NoPaymentPlan } from "~/components/no_payment_plans";

interface props {
  waterfall: WaterfallDataResponse;
  ready: boolean;
}

export const Waterfall: React.FC<props> = ({ waterfall, ready }) => {
  const navigate = useNavigate();
  const current_year = new Date().getUTCFullYear();

  const handleModal = () => {
    console.log("handleModal .. navigate");
    navigate("paymentplan/create");
  };

  return (
    <Card marginTop="mt-6">
      <ColGrid numCols={2} gapX="gap-x-6" gapY="gap-y-6">
        <Col>
          <Title>Payment Plan Waterfall</Title>
          <Text>{`Monthly payments due for each plan this year (${current_year})`}</Text>
        </Col>
        <Col>
          <div className="flex flex-col items-right md:flex-row">
            <div className="flex-1" />
            <Button onClick={handleModal} disabled={!ready}>
              PaymentPlan Creation
            </Button>
          </div>
        </Col>
      </ColGrid>
      {waterfall.waterfallData && waterfall.waterfallData.length > 0 && (
        <BarChart
          marginTop="mt-4"
          data={waterfall.waterfallData}
          dataKey="Month"
          categories={waterfall.names}
          colors={["indigo", "fuchsia", "amber"]}
          stack={true}
          valueFormatter={valueFormatter}
          height="h-80"
        />
      )}
      {(!waterfall.waterfallData || waterfall.waterfallData.length === 0) && (
        <NoPaymentPlan />
      )}
    </Card>
  );
};
