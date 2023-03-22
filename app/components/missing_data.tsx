import { Card, Text } from "@tremor/react";
import React from "react";

interface props {
  text: string;
}
export const MissingData: React.FC<props> = ({ text }) => {
  return (
    <Card className="mt-4">
      <Text className="text-center">{text}</Text>
    </Card>
  );
};
