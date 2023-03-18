import { Dropdown, DropdownItem, Text } from "@tremor/react";
import type { DropdownInput } from "~/utils/types.server";

interface props {
  options: DropdownInput[];
  label?: string;
  onChange?: (...args: any) => any;
  value?: any;
}

export function PreferenceDropdownItem({
  options = [],
  onChange = () => {},
  label,
  value,
}: props) {
  return (
    <>
      <Text>{label}</Text>
      <Dropdown
        onValueChange={(e) => {
          onChange(e);
        }}
        marginTop="mt-1"
        placeholder="Select an Option"
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
