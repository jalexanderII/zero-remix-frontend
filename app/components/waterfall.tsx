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

interface props {
  waterfall: WaterfallDataResponse;
}

export const Waterfall: React.FC<props> = ({ waterfall }) => {
  const navigate = useNavigate();

  const handleModal = () => {
    navigate("paymentplan");
  };

  return (
    <Card marginTop="mt-6">
      <ColGrid numCols={2} gapX="gap-x-6" gapY="gap-y-6">
        <Col>
          <Title>Payment Plan Waterfall</Title>
          <Text>Monthly payments due for each plan this year (2023)</Text>
        </Col>
        <Col>
          <div className="flex flex-col items-right md:flex-row">
            <div className="flex-1" />
            <Button onClick={handleModal}>PaymentPlan Creation</Button>
          </div>
        </Col>
      </ColGrid>
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
    </Card>
  );
};
