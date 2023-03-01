import { request } from "~/services/external-api.service.server";
import type { PlaidAccountLinkedResponse } from "~/utils/types.server";
import { PLAID_FRONTEND_URL } from "~/utils/constants";

export const plaid = {
  is_plaid_linked: async (email: string) => {
    return await request.get<PlaidAccountLinkedResponse>(
      `/api/plaid/linked/${email}`
    );
  },
};

export const plaid_url = (email: string, type: string) => {
  return `${PLAID_FRONTEND_URL}/${type}?email=${email}`;
};
