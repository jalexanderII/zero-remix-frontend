import Paper from "@mui/material/Paper";
import type { FC } from "react";
import React, { useEffect, useMemo, useState } from "react";
import type { SlimTransaction } from "~/utils/types.server";

import type { MRT_ColumnDef } from "material-react-table";
import MaterialReactTable from "material-react-table";
import type { RowSelectionState } from "@tanstack/react-table";
import { usePaymentPlanCreationForm } from "~/utils/store";
import { cleanDate } from "~/utils/helpers";

export type CleanTransaction = {
  id: string;
  name: string;
  amount: string;
  date: string;
};

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

  const columns = useMemo<MRT_ColumnDef<CleanTransaction>[]>(
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

  const data: CleanTransaction[] = useMemo(
    () => toCleanTransaction(transactions),
    [transactions]
  );
  const trxnIdToAmount: Map<string, number> = useMemo(
    () => transactionIDToAmount(transactions),
    [transactions]
  );

  useEffect(() => {
    const selectedRows: string[] = Object.keys(rowSelection);

    let total = 0;
    selectedRows.forEach((id) => {
      total += trxnIdToAmount.get(id) || 0;
    });

    const accountInfo = {
      transaction_ids: selectedRows,
      account_id: accountId,
      amount: total,
    };

    updateAmount(total, idx);
    setTotalAmount();
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

export const toCleanTransaction = (trxns: SlimTransaction[]) => {
  let data: CleanTransaction[] = [];
  if (!trxns) {
    return data;
  }
  trxns.forEach((item) => {
    data.push({
      name: item.name,
      amount: item.amount,
      date: cleanDate(item.date),
      id: item.id,
    });
  });
  return data;
};
