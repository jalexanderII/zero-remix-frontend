import { request } from "~/services/external-api.service.server";
import type {
  AccountDetailsResponse,
  PlaidAccountLinkedResponse,
} from "~/utils/types.server";
import dotenv from "dotenv";

dotenv.config();

export const plaid = {
  is_plaid_linked: async (userId: string | null) => {
    return await request.get<PlaidAccountLinkedResponse>(
      `/api/plaid/linked`,
      userId
    );
  },
  fetchAndCache: async (userId: string | null) => {
    return await request.get<AccountDetailsResponse>(
      `/api/plaid/accounts`,
      userId
    );
  },
};

export const get_plaid_url = () => {
  return process.env.PLAID_FRONTEND_URL;
};
