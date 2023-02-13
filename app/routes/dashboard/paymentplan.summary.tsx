import { Modal } from "~/components/modal";

export default function PaymentPlanSummary() {
  return (
    <Modal
      isOpen={true}
      className="tr-overflow-auto p-10"
      navigate_path={"/dashboard"}
    >
      <div>
        <code>
          {JSON.stringify(
            {
              data: [
                {
                  id: "000000000000000000000000",
                  name: "Plan_1_68c2_02.13.2023",
                  payment_plan_id: "63eab57cf95d391550b4df8e",
                  user_id: "621d4f4da856825bd57268c2",
                  payment_task_id: ["63eaa54c16d98f8446edfae1"],
                  amount: 9.39,
                  timeline: 3,
                  payment_freq: 2,
                  amount_per_payment: 1.57,
                  plan_type: 1,
                  end_date: "Mon, 08 May 2023 22:11:08 GMT",
                  active: true,
                  status: 1,
                  payment_action: [
                    {
                      id: "000000000000000000000000",
                      account_id: "62ce9f1ebae41154387ac637",
                      amount: 1.57,
                      transaction_date: "Mon, 27 Feb 2023 21:02:09 GMT",
                      status: 1,
                    },
                    {
                      id: "000000000000000000000000",
                      account_id: "62ce9f1ebae41154387ac637",
                      amount: 1.57,
                      transaction_date: "Mon, 13 Mar 2023 21:02:09 GMT",
                      status: 1,
                    },
                    {
                      id: "000000000000000000000000",
                      account_id: "62ce9f1ebae41154387ac637",
                      amount: 1.57,
                      transaction_date: "Mon, 27 Mar 2023 21:02:09 GMT",
                      status: 1,
                    },
                    {
                      id: "000000000000000000000000",
                      account_id: "62ce9f1ebae41154387ac637",
                      amount: 1.57,
                      transaction_date: "Mon, 10 Apr 2023 21:02:09 GMT",
                      status: 1,
                    },
                    {
                      id: "000000000000000000000000",
                      account_id: "62ce9f1ebae41154387ac637",
                      amount: 1.57,
                      transaction_date: "Mon, 24 Apr 2023 21:02:09 GMT",
                      status: 1,
                    },
                    {
                      id: "000000000000000000000000",
                      account_id: "62ce9f1ebae41154387ac637",
                      amount: 1.5399999999999994,
                      transaction_date: "Mon, 08 May 2023 21:02:09 GMT",
                      status: 1,
                    },
                  ],
                },
              ],
              message: "payment plan created",
              status: "success",
            },
            null,
            2
          )}
        </code>
      </div>
    </Modal>
  );
}
