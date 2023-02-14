import { Modal } from "~/components/modal";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  let encrypted = url.searchParams.get("resp") as string;
  const decrypted = JSON.parse(decodeURI(encrypted));
  return { decrypted };
};

export default function PaymentPlanSummary() {
  const { decrypted } = useLoaderData();
  return (
    <Modal
      isOpen={true}
      className="tr-overflow-auto p-10"
      navigate_path={"/dashboard"}
    >
      <div>
        <code>{JSON.stringify(decrypted, null, 2)}</code>
      </div>
    </Modal>
  );
}
