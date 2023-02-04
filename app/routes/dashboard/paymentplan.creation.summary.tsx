import { Modal } from "~/components/modal";
import {
  Block,
  Bold,
  ButtonInline,
  Callout,
  Card,
  Flex,
  Footer,
  List,
  ListItem,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";

import { BanknotesIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";

interface Issues {
  issue: string;
  topic: string;
}

const issues: Issues[] = [
  {
    issue: "Issue #249",
    topic: "Input bar",
  },
  {
    issue: "Issue #142",
    topic: "Custom colors",
  },
  {
    issue: "Issue #136",
    topic: "Button loading state",
  },
  {
    issue: "Issue #129",
    topic: "minValue for Charts",
  },
  {
    issue: "Issue #128",
    topic: "Dark mode support",
  },
  {
    issue: "Issue #124",
    topic: "className props",
  },
];

export default function PaymentPlanSummary() {
  return (
    <Modal
      isOpen={true}
      className="tr-overflow-auto p-10"
      navigate_path={"/dashboard"}
    >
      <Card maxWidth="max-w-md">
        <Text> Issues solved </Text>
        <Flex
          justifyContent="justify-start"
          spaceX="space-x-1"
          alignItems="items-baseline"
        >
          <Metric> 338 </Metric>
          <Text>/ 450</Text>
        </Flex>
        <Callout
          title="Resolving 6x more issues than receiving"
          text="45 days until all issues are solved with the current cadence and income rate. Keep going, you got this!"
          icon={BanknotesIcon}
          color="emerald"
          marginTop="mt-6"
        />
        <ProgressBar percentageValue={75} color="emerald" marginTop="mt-6" />
        <Flex marginTop="mt-4">
          <Block>
            <Text>Solved</Text>
            <Text color="emerald">
              <Bold>338</Bold>
              (75%)
            </Text>
          </Block>
          <Block>
            <Text textAlignment="text-right">Open</Text>
            <Text textAlignment="text-right">
              <Bold>112</Bold>(25%)
            </Text>
          </Block>
        </Flex>
        <Flex marginTop="mt-6">
          <Text>
            <Bold>Open issues</Bold>
          </Text>
          <Text>
            <Bold>Topic</Bold>
          </Text>
        </Flex>
        <List marginTop="mt-1">
          {issues.map((item) => (
            <ListItem key={item.issue}>
              <span> {item.issue} </span>
              <span> {item.topic} </span>
            </ListItem>
          ))}
        </List>
        <Footer>
          <ButtonInline
            size="sm"
            text="View more"
            icon={CalendarDaysIcon}
            iconPosition="right"
          />
        </Footer>
      </Card>
    </Modal>
  );
}
