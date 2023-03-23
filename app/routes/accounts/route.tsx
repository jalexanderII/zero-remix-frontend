import React from "react";
import {
  Badge,
  Bold,
  Callout,
  Card,
  Col,
  Divider,
  Flex,
  Grid,
  ProgressBar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { getUserEmail } from "~/routes/dashboard";
import api from "~/services/api.server";
import { useLoaderData } from "@remix-run/react";
import type { Account, AnnualPercentageRate } from "~/utils/types.server";
import { cleanDate, formatAsPercentage, toUSD } from "~/utils/helpers";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";

const APRTypeToName: Map<string, string> = new Map([
  ["purchase_apr", "Purchase Apr"],
  ["cash_apr", "Cash Apr"],
  ["special", "Special"],
]);
export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  const email = await getUserEmail(userId);
  const accountsResponse = await api.accounts.get_user_accounts(email);
  const accounts: Account[] = [];
  for (const account of accountsResponse.data) {
    if (account.type === "credit") {
      accounts.push(account);
    }
  }
  return { accounts };
};

export default function AccountSummary() {
  const { accounts } = useLoaderData();

  if (!accounts || accounts.length === 0) {
    return (
      <Text>
        You have no linked accounts. Connect a credit card account to see more
        data here.
      </Text>
    );
  }

  return (
    <Card className="mt-6">
      <Title>Linked Accounts</Title>
      <Text>
        These are all of your linked accounts. If any account has a balance and
        recent transactions you can may a payment plan for it.
      </Text>
      <Grid numColsMd={1} className="gap-x-6 gap-y-8 mt-6">
        {accounts.map((account: Account) => (
          <Col key={`${account.plaid_account_id}`}>
            <Card>
              <Grid numCols={2} className="gap-x-2 gap-y-2">
                <Col numColSpan={2}>
                  <Flex className="items-start justify-between">
                    <Title>{account.name}</Title>
                    {(account.current_balance / account.credit_limit) * 100 >
                      0.4 &&
                      account.credit_limit > 0 && (
                        <Badge color="red" size="sm" className="ml-2">
                          {"High Utilization (>40%)"}
                        </Badge>
                      )}
                  </Flex>
                </Col>
                <Col numColSpan={1}>
                  <Text>
                    <Bold>Official Name:</Bold> {account.official_name}
                  </Text>
                </Col>
                <Col numColSpan={1}>
                  <Text>
                    <Bold>Next Payment Due Date:</Bold>{" "}
                    {cleanDate(account.next_payment_due_date)}
                  </Text>
                  {account.is_overdue && (
                    <Badge color="red" size="sm" className="ml-2">
                      Overdue
                    </Badge>
                  )}
                </Col>
                <Col numColSpan={2}>
                  <Divider className="mt-0 mb-1" />
                </Col>
                <Col numColSpan={1}>
                  <Callout
                    title={`Available Balance: ${toUSD(
                      account.available_balance
                    )}`}
                    icon={CheckCircleIcon}
                    color="teal"
                  ></Callout>
                </Col>
                <Col numColSpan={1}>
                  <Callout
                    title={`Current Balance: ${toUSD(account.current_balance)}`}
                    icon={ExclamationTriangleIcon}
                    color="rose"
                  ></Callout>
                </Col>
                <Col numColSpan={1}>
                  <Text className="mt-2">
                    <Bold>Credit Limit: {toUSD(account.credit_limit)}</Bold>{" "}
                  </Text>
                </Col>
                <Col numColSpan={1}>
                  <Text className="mt-2">
                    <Bold>
                      Credit Utilization:{" "}
                      {formatAsPercentage(
                        (account.current_balance / account.credit_limit) * 100
                      )}
                    </Bold>{" "}
                  </Text>
                </Col>
                <Col numColSpan={2}>
                  <ProgressBar
                    percentageValue={
                      (account.current_balance / account.credit_limit) * 100
                    }
                    color="indigo"
                    className="mt-2"
                  />
                </Col>
                <Col numColSpan={2}>
                  <Divider className="mt-4" />
                  <Text>
                    <Bold>APR Information</Bold>
                  </Text>
                  {account.annual_percentage_rate &&
                  account.annual_percentage_rate.length > 0 ? (
                    <Table className="mt-2">
                      <TableHead>
                        <TableRow>
                          <TableHeaderCell>Type</TableHeaderCell>
                          <TableHeaderCell>APR %</TableHeaderCell>
                          <TableHeaderCell>
                            Balance Subject to APR
                          </TableHeaderCell>
                          <TableHeaderCell>
                            Interest Charge Amount
                          </TableHeaderCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {account.annual_percentage_rate.map(
                          (apr: AnnualPercentageRate, index: number) => (
                            <TableRow key={`apr-${index}`}>
                              <TableCell>
                                {APRTypeToName.get(apr.apr_type)}
                              </TableCell>
                              <TableCell>
                                {formatAsPercentage(apr.apr_percentage)}
                              </TableCell>
                              <TableCell>
                                {toUSD(apr.balance_subject_to_apr)}
                              </TableCell>
                              <TableCell>
                                {toUSD(apr.interest_charge_amount)}
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  ) : (
                    <Text className="mt-2">
                      No APR information available for this account.
                    </Text>
                  )}
                </Col>
              </Grid>
            </Card>
          </Col>
        ))}
      </Grid>
    </Card>
  );
}
