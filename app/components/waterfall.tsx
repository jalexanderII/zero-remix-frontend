import { Card, BarChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  // ...
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default function Waterfall() {
  return (
    <Card>
      <Title>Performance</Title>
      <Text>Comparison between Sales and Profit</Text>
      <BarChart
        marginTop="mt-2"
        data={data}
        dataKey="Month"
        categories={["Sales", "Profit"]}
        colors={["indigo", "fuchsia"]}
        stack={false}
        valueFormatter={valueFormatter}
        height="h-60"
      />
    </Card>
  );
}
