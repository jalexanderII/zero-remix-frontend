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

const ErrorTypeToMsg: Map<string, string | undefined> = new Map([
  ["not_number", "Value must be a number"],
  ["too_large", "Amount must be less than or equal to account balance"],
  ["", undefined],
]);

export const AccountListAmount: React.FC<props> = ({
  idx,
  accountId,
  balance,
  name,
}) => {
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");
  const { updateAmount, setTotalAmount, updateAccountInfo } =
    usePaymentPlanCreationForm((state) => state);

  const handleOnChange = (e: React.BaseSyntheticEvent) => {
    if (isNaN(e.target.value)) {
      setError("not_number");
    } else if (e.target.value > balance) {
      setError("too_large");
    } else {
      setError("");
      setTotal(Number(e.target.value));
    }
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
    <ListItem
      key={accountId}
      className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0 md:space-x-4"
    >
      <Text className="mt-2">Total Balance ({toUSD(balance)}) </Text>
      <TextInput
        id={accountId}
        error={error !== ""}
        errorMessage={ErrorTypeToMsg.get(error)}
        icon={CurrencyDollarIcon}
        className="max-w-xs w-full md:w-md"
        placeholder="Enter Dollar Amount ($)"
        onChange={(e) => handleOnChange(e)}
      />
    </ListItem>
  );
};
