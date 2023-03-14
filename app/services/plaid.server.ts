import { request } from "~/services/external-api.service.server";
import type { PlaidAccountLinkedResponse } from "~/utils/types.server";
import dotenv from "dotenv";

dotenv.config();

export const plaid = {
  is_plaid_linked: async (email: string) => {
    return await request.get<PlaidAccountLinkedResponse>(
      `/api/plaid/linked/${email}`
    );
  },
};

export const get_plaid_url = () => {
  return process.env.PLAID_FRONTEND_URL;
};
