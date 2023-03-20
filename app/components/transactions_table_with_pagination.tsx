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

interface props {
  transactions: SlimTransaction[];
  accounts: Account[];
}

interface ItemProps {
  transactions: SlimTransaction[];
  accIdToName: Map<string, string>;
}

const ITEMS_PER_PAGE = 5;
const initialState: SlimTransaction[] = [];

export const AccountIDToName = (data: Account[]) => {
  const accIDToName: Map<string, string> = new Map();
  data.forEach((item) => {
    accIDToName.set(item.id, item.official_name);
  });
  return accIDToName;
};

const Items: React.FC<ItemProps> = ({ transactions, accIdToName }) => {
  return (
    <TableBody>
      {transactions.map((item, idx) => (
        <TableRow key={`${item.transactionId}_${idx}`}>
          <TableCell key={`${item.transactionId}_${idx}_accname`}>
            {accIdToName.get(item.accountId)}
          </TableCell>
          <TableCell
            key={`${item.transactionId}_${idx}a`}
            textAlignment="text-left"
          >
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
  );
};

export const TransactionsTableWithPagination: React.FC<props> = ({
  transactions,
  accounts,
}) => {
  const [items, setItems] = useState(initialState);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(initialState);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Fetch items from another resources.
  const endOffset = itemOffset + ITEMS_PER_PAGE;

  const currSelection: SlimTransaction[] = transactions.slice(
    itemOffset,
    endOffset
  );

  const accIdToName: Map<string, string> = useMemo(
    () => AccountIDToName(accounts),
    [accounts]
  );

  useEffect(() => {
    setCurrentItems(currSelection);
    setPageCount(Math.ceil(transactions.length / ITEMS_PER_PAGE));
    setItems(transactions);
  }, [itemOffset]);

  const handlePageClick = (event: React.ChangeEvent<unknown>, page: number) => {
    const newOffset = (page * ITEMS_PER_PAGE) % items.length;
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
              <TableHeaderCell textAlignment="text-right">
                {" "}
                Date{" "}
              </TableHeaderCell>
              <TableHeaderCell textAlignment="text-right">
                {" "}
                Amount{" "}
              </TableHeaderCell>
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
