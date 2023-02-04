import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Title,
} from "@tremor/react";
import React from "react";
import type { SlimTransaction } from "~/utils/types.server";

interface props {
  transactions: SlimTransaction[];
}

export const Transactions: React.FC<props> = ({ transactions }) => {
  return (
    <Card>
      <Title>Recent Transactions</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell> Name </TableHeaderCell>
            <TableHeaderCell textAlignment="text-right"> Date </TableHeaderCell>
            <TableHeaderCell textAlignment="text-right">
              {" "}
              Amount{" "}
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions.map((item, idx) => (
            <TableRow key={`${item.transactionId}_${idx}`}>
              <TableCell key={`${item.transactionId}_${idx}a`}>
                {item.name}
              </TableCell>
              <TableCell
                key={`${item.transactionId}_${idx}b`}
                textAlignment="text-right"
              >
                {item.date}
              </TableCell>
              <TableCell
                key={`${item.transactionId}_${idx}c`}
                textAlignment="text-right"
              >
                {item.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
