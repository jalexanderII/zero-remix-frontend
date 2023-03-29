import React, { useMemo } from "react";
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
import type { Account, AnnualPercentageRate } from "~/utils/types.server";
import { cleanDate, formatAsPercentage, toUSD } from "~/utils/helpers";
import {
  BanknotesIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";
import { MissingData } from "~/components/missing_data";

const APRTypeToName: Record<string, string> = {
  purchase_apr: "Purchase Apr",
  cash_apr: "Cash Apr",
  special: "Special",
};
interface Props {
  accounts: Account[];
}

export const AccountCard: React.FC<Props> = ({ accounts }) => {
  const hasAccounts = useMemo(
    () => !!accounts && accounts.length > 0,
    [accounts]
  );

  if (!hasAccounts) {
    return (
      <MissingData
        text="You have no linked accounts. Connect a credit card account to see more
        data here."
      />
    );
  }

  return (
    <Grid numColsMd={1} className="gap-x-6 gap-y-8 mt-6">
      {accounts.map((account) => {
        const highUtilization =
          (account.current_balance / account.credit_limit) * 100 > 0.4 &&
          account.credit_limit > 0;

        return (
          <Col key={account.plaid_account_id}>
            <Card>
              <Grid numCols={2} className="gap-x-2 gap-y-2">
                <Col numColSpan={2}>
                  <Flex className="items-start justify-between mb-3">
                    <Title>{account.official_name}</Title>
                    {highUtilization && (
                      <Badge color="red" size="sm" className="ml-2">
                        {"High Utilization (>40%)"}
                      </Badge>
                    )}
                  </Flex>
                </Col>
                <Col numColSpan={1}>
                  <Text>
                    <Bold>Account Name:</Bold> {account.name}
                  </Text>
                </Col>
                <Col numColSpan={1}>
                  <Text className="text-right">
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
                <Col numColSpan={2}>
                  <Grid
                    numCols={
                      account.credit_limit > 0
                        ? 3
                        : account.available_balance > 0
                        ? 2
                        : 1
                    }
                    className="items-center gap-x-2 gap-y-2"
                  >
                    {account.available_balance > 0 && (
                      <CalloutRow
                        title={`Available Balance: ${toUSD(
                          account.available_balance
                        )}`}
                        icon={CheckCircleIcon}
                        color="teal"
                      />
                    )}
                    <CalloutRow
                      title={`Current Balance: ${toUSD(
                        account.current_balance
                      )}`}
                      icon={ExclamationTriangleIcon}
                      color="rose"
                    />
                    {account.credit_limit > 0 && (
                      <CalloutRow
                        title={`Credit Limit: ${toUSD(account.credit_limit)}`}
                        icon={BanknotesIcon}
                        color="purple"
                      />
                    )}
                  </Grid>
                </Col>
                {account.credit_limit > 0 && (
                  <ProgressBarSection account={account} />
                )}
                <Col numColSpan={2}>
                  <Divider className="mt-4" />
                  <Text>
                    <Bold>APR Information</Bold>
                  </Text>
                  {account.annual_percentage_rate &&
                  account.annual_percentage_rate.length > 0 ? (
                    <APRTable account={account} />
                  ) : (
                    <Text className="mt-2">
                      No APR information available for this account.
                    </Text>
                  )}
                </Col>
              </Grid>
            </Card>
          </Col>
        );
      })}
    </Grid>
  );
};

interface CalloutRowProps {
  title: string;
  icon: any;
  color: any;
}

const CalloutRow: React.FC<CalloutRowProps> = ({ title, icon, color }) => (
  <Col numColSpan={1}>
    <Callout title={title} icon={icon} color={color} className="items-center" />
  </Col>
);

interface AccountProp {
  account: Account;
}

const ProgressBarSection: React.FC<AccountProp> = ({ account }) => (
  <Col numColSpan={2}>
    <Text className="mt-2">
      <Bold>
        Credit Utilization:{" ("}
        {formatAsPercentage(
          (account.current_balance / account.credit_limit) * 100
        )}
        {") "}
      </Bold>
    </Text>
    <ProgressBar
      percentageValue={(account.current_balance / account.credit_limit) * 100}
      color="indigo"
      className="mt-2"
    />
  </Col>
);

const APRTable: React.FC<AccountProp> = ({ account }) => (
  <Table className="mt-2">
    <TableHead>
      <TableRow>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>APR %</TableHeaderCell>
        <TableHeaderCell>Balance Subject to APR</TableHeaderCell>
        <TableHeaderCell>Interest Charge Amount</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {account.annual_percentage_rate.map(
        (apr: AnnualPercentageRate, index: number) => (
          <APRTableBody key={`apr-${index}`} apr={apr} index={index} />
        )
      )}
    </TableBody>
  </Table>
);
interface APRTableBodyProps {
  apr: AnnualPercentageRate;
  index: number;
}

const APRTableBody: React.FC<APRTableBodyProps> = ({ apr, index }) => (
  <TableRow key={`apr-${index}`}>
    <TableCell>{APRTypeToName[apr.apr_type]}</TableCell>
    <TableCell>{formatAsPercentage(apr.apr_percentage)}</TableCell>
    <TableCell>{toUSD(apr.balance_subject_to_apr)}</TableCell>
    <TableCell>{toUSD(apr.interest_charge_amount)}</TableCell>
  </TableRow>
);
