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
import type { SlimWaterfall } from "~/utils/types.server";
import { useNavigate } from "@remix-run/react";
import { getMonth } from "~/utils/helpers";

interface props {
  waterfall: Map<string, SlimWaterfall>;
}

const fill_data = (waterfallPlans: Map<string, SlimWaterfall>) => {
  let data = [...Array(12).keys()].map((mon) => ({
    Month: getMonth(mon),
  }));
  for (let value of waterfallPlans.values()) {
    value.data.forEach(function (num, i) {
      const newData = { [value.planName]: num };
      data[i + 1] = { ...data[i + 1], ...newData };
    });
  }
  return data;
};

const getNames = (waterfallPlans: Map<string, SlimWaterfall>) => {
  const names = [];
  for (let value of waterfallPlans.values()) {
    names.push(value.planName);
  }
  return names;
};

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export const Waterfall: React.FC<props> = ({ waterfall }) => {
  const navigate = useNavigate();
  const waterfallData = fill_data(waterfall);
  const names = getNames(waterfall);

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
        data={waterfallData}
        dataKey="Month"
        categories={names}
        colors={["indigo", "fuchsia", "amber"]}
        stack={true}
        valueFormatter={valueFormatter}
        height="h-80"
      />
    </Card>
  );
};
