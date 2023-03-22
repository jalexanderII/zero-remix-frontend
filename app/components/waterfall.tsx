import { BarChart, Button, Card, Col, Grid, Text, Title } from "@tremor/react";
import React from "react";
import { useNavigate } from "@remix-run/react";
import { valueFormatter } from "~/utils/helpers";
import type { WaterfallDataResponse } from "~/utils/types.server";
import { MissingData } from "~/components/missing_data";

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
    <Card className="mt-6">
      <Grid numCols={2} className="gap-x-6 gap-y-6">
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
      </Grid>
      {waterfall.waterfallData && waterfall.waterfallData.length > 0 && (
        <BarChart
          className="mt-4 h-80"
          data={waterfall.waterfallData}
          index="Month"
          categories={waterfall.names}
          colors={["indigo", "fuchsia", "amber"]}
          stack={true}
          valueFormatter={valueFormatter}
        />
      )}
      {(!waterfall.waterfallData || waterfall.waterfallData.length === 0) && (
        <MissingData
          text={
            "You have no Payment Plans. " +
            (ready
              ? "Create "
              : "Link a credit card account and then create ") +
            "a Payment Plan to see more data here."
          }
        />
      )}
    </Card>
  );
};
