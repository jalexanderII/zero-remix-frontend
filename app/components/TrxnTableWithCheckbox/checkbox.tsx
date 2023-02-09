import React, { forwardRef, useEffect, useRef } from "react";
import type { TableToggleAllRowsSelectedProps } from "react-table";

export const IndeterminateCheckbox = forwardRef<
  HTMLInputElement,
  TableToggleAllRowsSelectedProps
>((props, ref) => {
  const myRef = useRef<HTMLInputElement | null>(null);
  const { indeterminate, ...rest } = props;

  useEffect(() => {
    const node = myRef.current;
    if (node) {
      if (typeof indeterminate === "boolean") {
        node.indeterminate = indeterminate;
      }
    }
  }, [indeterminate, ref]);

  return (
    <input
      ref={(node) => {
        const exNode = myRef.current;
        if (exNode) {
          exNode.indeterminate = node?.indeterminate || false;
        }
        if (typeof ref === "function") {
          ref(node);
        } else if (ref && ref.current) {
          ref.current.indeterminate = node?.indeterminate || false;
        }
      }}
      {...rest}
      type="checkbox"
    />
  );
});

IndeterminateCheckbox.displayName = "IndeterminateCheckbox";
