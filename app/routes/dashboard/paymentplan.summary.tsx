import { Modal } from "~/components/modal";
import { Block, Flex } from "@tremor/react";

import type { CreatePaymentPlanResponse } from "~/utils/types.server";
import React from "react";

interface props {
  response: CreatePaymentPlanResponse;
}

export const PaymentPlanSummary: React.FC<props> = ({ response }) => {
  return (
    <Modal
      isOpen={true}
      className="tr-overflow-auto p-10"
      navigate_path={"/dashboard"}
    >
      <Flex marginTop="mt-4">
        <Block>
          <code>{JSON.stringify(response, null, 2)}</code>
        </Block>
      </Flex>
    </Modal>
  );
};
