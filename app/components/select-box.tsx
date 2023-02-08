import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItem, Text } from "@tremor/react";
import type { DropdownInput } from "~/utils/types.server";

interface props {
  options: DropdownInput[];
  label?: string;
  onChange?: (...args: any) => any;
  error?: string;
  value?: any;
}

export function PreferenceDropdownItem({
  options = [],
  onChange = () => {},
  label,
  error = "",
  value,
}: props) {
  const [errorText, setErrorText] = useState(error);

  useEffect(() => {
    setErrorText(error);
  }, [error]);

  if (errorText) {
    console.log(errorText);
  }

  return (
    <>
      <Text>{label}</Text>

      <Dropdown
        onValueChange={(e) => {
          onChange(e);
          setErrorText("");
        }}
        marginTop="mt-1"
        placeholder="Unknown"
        value={value || 0}
      >
        {options.map((item, i) => (
          <DropdownItem
            key={i}
            value={item.value}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </Dropdown>
    </>
  );
}
