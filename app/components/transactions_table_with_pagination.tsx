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
import React, { useEffect, useState } from "react";
import type { SlimTransaction } from "~/utils/types.server";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface props {
  transactions: SlimTransaction[];
}

const ITEMS_PER_PAGE = 5;
const initialState: SlimTransaction[] = [];

const Items: React.FC<props> = ({ transactions }) => {
  return (
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
  );
};

export const Transactions_table_with_pagination: React.FC<props> = ({
  transactions,
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

        <Items transactions={currentItems} />
      </Table>
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
