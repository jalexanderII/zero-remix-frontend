import { request } from "~/services/external-api.service.server";
import type { PlaidAccountLinkedResponse } from "~/utils/types.server";

export const plaid = {
  is_plaid_linked: async (email: string) => {
    return await request.get<PlaidAccountLinkedResponse>(
      `/api/plaid/linked/${email}`
    );
  },
};
