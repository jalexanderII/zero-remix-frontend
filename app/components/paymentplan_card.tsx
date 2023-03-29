import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Badge,
  Bold,
  Card,
  Col,
  Flex,
  Grid,
  Metric,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
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
import type { PaymentAction, PaymentPlan } from "~/utils/types.server";
import { MissingData } from "~/components/missing_data";

interface props {
  plans: PaymentPlan[];
  accIdToName: Map<string, string>;
  footer?: (paymentPlanId: string, transactionIds: string[]) => JSX.Element;
  accept?: (paymentPlan: PaymentPlan) => JSX.Element;
}

interface ItemProps {
  payment_actions: PaymentAction[];
  accIdToName: Map<string, string>;
}

const Items: React.FC<ItemProps> = ({ payment_actions, accIdToName }) => {
  return (
    <TableBody>
      {payment_actions.map((action, idx) => (
        <TableRow key={`${action.id}_${idx}`}>
          <TableCell key={`${action.id}_${idx}_accname`}>
            {accIdToName.get(action.account_id)}
          </TableCell>
          <TableCell key={`${action.id}_${idx}a`} className="text-right">
            {toUSD(action.amount)}
          </TableCell>
          <TableCell key={`${action.id}_${idx}b`} className="text-right">
            {cleanDate(action.transaction_date)}
          </TableCell>
          <TableCell key={`${action.id}_${idx}c`} className="text-right">
            {ActionStatus.get(action.status)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export const PaymentPlanCard: React.FC<props> = ({
  plans,
  accIdToName,
  footer,
  accept,
}) => {
  if (!plans || plans.length === 0) {
    return (
      <MissingData text="You have no Payment Plans. Create a Payment Plan to see more data here." />
    );
  }

  const numcols = plans.length >= 2 ? 2 : 1;
  return (
    <Grid numColsMd={numcols} className="gap-x-6 gap-y-6 mt-6">
      {plans.map((plan, idx) => (
        <Col key={`${plan.name}_${idx}`}>
          <Card>
            <Grid numCols={2} className="gap-x-2 gap-y-2">
              <Col numColSpan={2}>
                <Flex className="items-start">
                  <Title>{plan.name}</Title>
                  <Badge
                    color="green"
                    size="sm"
                    icon={
                      plan.plan_type === 1
                        ? ArrowUpCircleIcon
                        : ArrowDownCircleIcon
                    }
                  >
                    {PlanType.get(plan.plan_type) || ""}
                  </Badge>
                </Flex>
              </Col>
              <Col numColSpan={2}>
                <Flex className="justify-start items-baseline space-x-1">
                  <Metric className="mt-2">{toUSD(plan.amount)}</Metric>
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
                <Text className="mt-2">
                  <Bold>{PaymentFrequency.get(plan.payment_freq)}</Bold>
                </Text>
              </Col>
              <Col>
                <Text className="text-right mt-2">
                  <Bold>
                    {TimelineMonths.get(plan.timeline)} (
                    {plan.payment_action.length} payments)
                  </Bold>
                </Text>
              </Col>
              <Col numColSpan={2}>
                <Accordion className="mt-3">
                  <AccordionHeader>Payments Schedule</AccordionHeader>
                  <AccordionBody>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableHeaderCell> Account </TableHeaderCell>
                          <TableHeaderCell className="text-right">
                            {" "}
                            Amount ($){" "}
                          </TableHeaderCell>
                          <TableHeaderCell className="text-right">
                            {" "}
                            Date{" "}
                          </TableHeaderCell>
                          <TableHeaderCell className="text-right">
                            {" "}
                            Status{" "}
                          </TableHeaderCell>
                        </TableRow>
                      </TableHead>

                      <Items
                        payment_actions={plan.payment_action}
                        accIdToName={accIdToName}
                      />
                    </Table>
                  </AccordionBody>
                </Accordion>
              </Col>
            </Grid>
            <>
              {footer && footer(plan.payment_plan_id, plan.transactions || [])}
            </>
            <>{accept && accept(plan)}</>
          </Card>
        </Col>
      ))}
    </Grid>
  );
};
