import { BarChart, Button, Card, Text, Title } from "@tremor/react";
import React from "react";
import type { SlimWaterfall } from "~/utils/types.server";
import { getMonth } from "~/utils/helpers";
import { useNavigate } from "@remix-run/react";

interface props {
  waterfall: Map<string, SlimWaterfall>;
}

const fill_data = (waterfallPlans: Map<string, SlimWaterfall>) => {
  let data = [...Array(12).keys()].map((mon) => ({
    Month: getMonth(mon),
  }));
  for (let value of waterfallPlans.values()) {
    for (let i = 0; i < value.data.length; i++) {
      const newData = { [value.planName]: value.data[i] };
      data[i] = { ...data[i], ...newData };
    }
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
      {/*<ColGrid*/}
      {/*  numColsMd={2}*/}
      {/*  numColsLg={2}*/}
      {/*  gapX="gap-x-6"*/}
      {/*  gapY="gap-y-6"*/}
      {/*  marginTop="mt-0"*/}
      {/*>*/}
      <div>
        <Title>Payment Plan Waterfall</Title>
        <Text>Monthly payments due for each plan this year (2023)</Text>
      </div>
      <div
        style={{
          marginTop: 25,
          marginRight: 35,
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Button onClick={handleModal}>PaymentPlan Creation</Button>
      </div>
      {/*</ColGrid>*/}
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
