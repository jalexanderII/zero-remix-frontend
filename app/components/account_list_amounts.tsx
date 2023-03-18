import { ListItem, Text, TextInput } from "@tremor/react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { toUSD } from "~/utils/helpers";
import { usePaymentPlanCreationForm } from "~/utils/store";

interface props {
  idx: number;
  accountId: string;
  balance: number;
  name: string;
}

export const AccountListAmount: React.FC<props> = ({
  idx,
  accountId,
  balance,
  name,
}) => {
  const [total, SetTotal] = useState(0);
  const { updateAmount, setTotalAmount, updateAccountInfo } =
    usePaymentPlanCreationForm((state) => state);

  const handleOnChange = (e: React.BaseSyntheticEvent) => {
    SetTotal(Number(e.target.value));
  };

  useEffect(() => {
    const accountInfo = {
      transaction_ids: [],
      account_id: accountId,
      amount: total,
    };

    updateAmount(total, idx);
    setTotalAmount();
    updateAccountInfo(accountInfo, idx);
  }, [total]);

  return (
    <ListItem key={accountId}>
      <Text textAlignment="text-left">{`${name}: Total Balance (${toUSD(
        balance
      )})`}</Text>
      <TextInput
        id={accountId}
        icon={CurrencyDollarIcon}
        maxWidth="max-w-xs"
        placeholder="Enter Dollar Amount ($)"
        onChange={(e) => handleOnChange(e)}
      />
    </ListItem>
  );
};
