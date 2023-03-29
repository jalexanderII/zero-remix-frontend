import {
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";
import React, { useEffect, useMemo, useState } from "react";
import type { Account, SlimTransaction } from "~/utils/types.server";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { MissingData } from "~/components/missing_data";
import { AccountIDToName, cleanDate } from "~/utils/helpers";

interface props {
  transactions: SlimTransaction[];
  accounts: Account[];
}

interface ItemProps {
  transactions: SlimTransaction[];
  accIdToName: Map<string, string>;
}

const ITEMS_PER_PAGE = 10;

const Items: React.FC<ItemProps> = ({ transactions, accIdToName }) => {
  return (
    <TableBody>
      {transactions.map((item) => (
        <TableRow key={item.transactionId}>
          <TableCell>{accIdToName.get(item.accountId)}</TableCell>
          <TableCell className="text-left">{item.name}</TableCell>
          <TableCell className="text-right">{cleanDate(item.date)}</TableCell>
          <TableCell className="text-right">{item.amount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export const TransactionsTableWithPagination: React.FC<props> = ({
  transactions,
  accounts,
}) => {
  transactions.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const [currentItems, setCurrentItems] = useState<SlimTransaction[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const accIdToName: Map<string, string> = useMemo(
    () => AccountIDToName(accounts),
    [accounts]
  );

  useEffect(() => {
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    const currSelection: SlimTransaction[] = transactions.slice(
      itemOffset,
      endOffset
    );
    setCurrentItems(currSelection);
    setPageCount(Math.ceil(transactions.length / ITEMS_PER_PAGE));
  }, [itemOffset]);

  const handlePageClick = (event: React.ChangeEvent<unknown>, page: number) => {
    const newOffset = (page - 1) * ITEMS_PER_PAGE;
    setItemOffset(newOffset);
  };

  return (
    <Card>
      <Title>Recent Transactions</Title>
      {(!transactions || transactions.length === 0) && (
        <MissingData text="Link a Credit Card to see a list of your recent transactions here." />
      )}
      {transactions && transactions.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell> Account </TableHeaderCell>
              <TableHeaderCell> Name </TableHeaderCell>
              <TableHeaderCell className="text-right"> Date </TableHeaderCell>
              <TableHeaderCell className="text-right"> Amount </TableHeaderCell>
            </TableRow>
          </TableHead>

          <Items transactions={currentItems} accIdToName={accIdToName} />
        </Table>
      )}
      <Divider />
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          onChange={handlePageClick}
          variant="outlined"
          shape="rounded"
          color="primary"
          style={{
            display: "flex",
            justifyContent: "center",
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
          }}
        />
      </Stack>
    </Card>
  );
};
