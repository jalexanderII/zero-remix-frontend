import { Card, Text } from "@tremor/react";
import React from "react";

export const NoPaymentPlan = () => {
  return (
    <Card marginTop="mt-4">
      <Text textAlignment="text-center">
        You have no Payment Plans. Create a Payment Plan to see more data here.
      </Text>
    </Card>
  );
};
