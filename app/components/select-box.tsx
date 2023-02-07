import React from "react";
import { Dropdown, DropdownItem, Text } from "@tremor/react";
import type { DropdownInput } from "~/utils/types.server";

interface props {
  options: DropdownInput[];
  label?: string;
  onChange?: (...args: any) => any;
}

export function PreferenceDropdownItem({
  options = [],
  onChange = () => {},
  label,
}: props) {
  return (
    <>
      <Text>{label}</Text>
      <Dropdown onValueChange={onChange} marginTop="mt-2" placeholder="Unknown">
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
