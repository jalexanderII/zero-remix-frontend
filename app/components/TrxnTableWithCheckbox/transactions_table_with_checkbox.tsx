import Paper from "@mui/material/Paper";
import type { FC } from "react";
import React, { useEffect, useMemo, useState } from "react";
import type { SlimTransaction } from "~/utils/types.server";

import type { MRT_ColumnDef } from "material-react-table";
import MaterialReactTable from "material-react-table";
import type { RowSelectionState } from "@tanstack/react-table";
import { usePaymentPlanCreationForm } from "~/routes/dashboard.paymentplan.create";

interface props {
  transactions: SlimTransaction[];
  idx: number;
  accountId: string;
}

const transactionIDToAmount = (trxns: SlimTransaction[]) => {
  const transactionsDict = new Map<string, number>();
  trxns.forEach((item) => {
    transactionsDict.set(item.id, item.value);
  });
  return transactionsDict;
};

export const PaymentPlanTransactions: FC<props> = ({
  transactions,
  idx,
  accountId,
}) => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const { updateAmount, setTotalAmount, updateAccountInfo } =
    usePaymentPlanCreationForm((state) => state);

  const columns = useMemo<MRT_ColumnDef<SlimTransaction>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Date",
        accessorKey: "date",
      },
      {
        header: "Amount",
        accessorKey: "amount",
      },
    ],
    []
  );

  const data: SlimTransaction[] = useMemo(() => transactions, [transactions]);
  const trxnIdToAmount: Map<string, number> = useMemo(
    () => transactionIDToAmount(transactions),
    [transactions]
  );

  useEffect(() => {
    const selectedRows: string[] = Object.keys(rowSelection);
    console.log(`selectedRows for transaction ${idx}`, selectedRows);

    let total = 0;
    selectedRows.forEach((id) => {
      console.log(
        `selectedRows ${id}`,
        "fetched value",
        trxnIdToAmount.get(id)
      );
      total += trxnIdToAmount.get(id) || 0;
      console.log("new total", total);
    });

    const accountInfo = {
      transaction_ids: selectedRows,
      account_id: accountId,
      amount: total,
    };
    console.log("latest accountInfo", accountInfo);

    updateAmount(total, idx);
    // setTotalAmount();
    updateAccountInfo(accountInfo, idx);
  }, [rowSelection]);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection
        getRowId={(row) => row.id}
        onRowSelectionChange={setRowSelection}
        state={{ rowSelection }}
        enableStickyHeader={true}
        enablePagination={false}
        enableDensityToggle={false}
        enableTopToolbar={false}
      />
    </Paper>
  );
};
