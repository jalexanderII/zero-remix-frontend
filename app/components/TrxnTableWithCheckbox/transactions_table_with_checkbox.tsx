import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
import { useRowSelect, useTable } from "react-table";
import type { PaymentPlanCreationTransaction } from "~/utils/types.server";
import { IndeterminateCheckbox } from "~/components/TrxnTableWithCheckbox/checkbox";

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newTrxn = (idx: number): PaymentPlanCreationTransaction => {
  return {
    transactionId: `${idx}`,
    name: `jacky_${idx}`,
    date: "2021-09-01",
    amount: Math.floor(Math.random() * 30),
  };
};

function makeData(len: number) {
  return range(len).map((i) => {
    return { ...newTrxn(i) };
  });
}

export const PaymentPlanTransactions = () => {
  const columns: any = React.useMemo(() => {
    return [
      { Header: "Name", accessor: "name" },
      { Header: "Date", accessor: "date" },
      { Header: "Amount", accessor: "amount" },
    ];
  }, []);

  const data: PaymentPlanCreationTransaction[] = React.useMemo(
    () => makeData(25),
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable({ columns, data }, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => [
      // Let's make a column for selection
      {
        id: "selection",
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        // @ts-ignore
        Cell: ({ row }) => (
          <>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </>
        ),
      },
      ...columns,
    ]);
  });

  console.log("Selected Rows:", Object.keys(selectedRowIds).length);
  console.log(
    "Selected Rows Json:",
    JSON.stringify(
      {
        selectedRowIds: selectedRowIds,
        "selectedFlatRows[].original": selectedFlatRows.map((d) => d.original),
      },
      null,
      2
    )
  );

  // Render the UI for your table
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup, idx) => (
              <TableRow {...headerGroup.getHeaderGroupProps()} key={idx}>
                {headerGroup.headers.map((column, idx) => (
                  <TableCell {...column.getHeaderProps()} key={idx}>
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row, idx) => {
              prepareRow(row);
              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  {...row.getRowProps()}
                  key={idx}
                >
                  {row.cells.map((cell, idx) => {
                    return (
                      <TableCell
                        component="th"
                        scope="row"
                        {...cell.getCellProps()}
                        key={idx}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
