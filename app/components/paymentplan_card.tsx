import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Badge,
  Bold,
  Card,
  Col,
  ColGrid,
  Flex,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import { cleanDate, toUSD } from "~/utils/helpers";
import {
  ActionStatus,
  PaymentFrequency,
  PlanType,
  TimelineMonths,
} from "~/utils/constants";
import React from "react";
import type { PaymentPlan } from "~/utils/types.server";
import { MissingData } from "~/components/missing_data";

interface props {
  plans: PaymentPlan[];
  footer?: (paymentPlanId: string, transactionIds: string[]) => JSX.Element;
}

export const PaymentPlanCard: React.FC<props> = ({ plans, footer }) => {
  if (!plans || plans.length === 0) {
    return (
      <MissingData text="You have no Payment Plans. Create a Payment Plan to see more data here." />
    );
  }

  const numcols = plans.length >= 2 ? 2 : 1;
  return (
    <ColGrid numColsMd={numcols} gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
      {plans.map((plan, idx) => (
        <Col key={`${plan.name}_${idx}`}>
          <Card>
            <ColGrid numCols={2} gapX="gap-x-2" gapY="gap-y-2">
              <Col numColSpan={2}>
                <Flex alignItems="items-start">
                  <Title>{plan.name}</Title>
                  <Badge
                    text={PlanType.get(plan.plan_type) || ""}
                    color="green"
                    size="sm"
                    icon={
                      plan.plan_type === 1
                        ? ArrowUpCircleIcon
                        : ArrowDownCircleIcon
                    }
                  />
                </Flex>
              </Col>
              <Col numColSpan={2}>
                <Flex
                  justifyContent="justify-start"
                  alignItems="items-baseline"
                  spaceX="space-x-1"
                >
                  <Metric marginTop="mt-2">{toUSD(plan.amount)}</Metric>
                  <Text>
                    /<Bold>{toUSD(plan.amount_per_payment)}</Bold> per payment
                    avg
                  </Text>
                </Flex>
              </Col>
              <Col numColSpan={2}>
                <Text>Last Payment: {cleanDate(plan.end_date)}</Text>
              </Col>
              <Col>
                <Text marginTop="mt-2">
                  <Bold>{PaymentFrequency.get(plan.payment_freq)}</Bold>
                </Text>
              </Col>
              <Col>
                <Text textAlignment="text-right" marginTop="mt-2">
                  <Bold>
                    {TimelineMonths.get(plan.timeline)} (
                    {plan.payment_action.length} payments)
                  </Bold>
                </Text>
              </Col>
              <Col numColSpan={2}>
                <Accordion marginTop="mt-3">
                  <AccordionHeader>Payments Schedule</AccordionHeader>
                  <AccordionBody>
                    <List>
                      <ListItem>
                        <span>
                          <strong>Account</strong>
                        </span>
                        <span>
                          <strong>Amount ($)</strong>
                        </span>
                        <span>
                          <strong>Date</strong>
                        </span>
                        <span> </span>
                        <span>
                          <strong>Status</strong>
                        </span>
                      </ListItem>
                      {plan.payment_action.map((action, idx) => (
                        <ListItem key={`${action.id}_${idx}`}>
                          <span>{action.account_id.slice(0, 4)}</span>
                          <span>{toUSD(action.amount)}</span>
                          <span>{cleanDate(action.transaction_date)}</span>
                          <span>{ActionStatus.get(action.status)}</span>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionBody>
                </Accordion>
              </Col>
            </ColGrid>
            <>
              {footer && footer(plan.payment_plan_id, plan.transactions || [])}
            </>
          </Card>
        </Col>
      ))}
    </ColGrid>
  );
};
