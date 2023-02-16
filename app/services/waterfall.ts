import { request } from "~/services/external-api.service.server";
import type {
  SlimWaterfall,
  Waterfall,
  WaterfallResponse,
} from "~/utils/types.server";
import { toJson } from "~/utils/helpers";

export const waterfall = {
  get_user_waterfall: async (email: string) =>
    request.get<WaterfallResponse>(`/api/planning/waterfall/${email}`),
};

const toSlimWaterfall = (data: Waterfall): SlimWaterfall => {
  const nameParts = data.name.split(" ");
  let newName = data.name;
  if (nameParts.length > 1) {
    newName = nameParts.slice(0, 2).join(" ");
  }
  return {
    planName: newName,
    planId: data.acc_id,
    data: data.data,
  };
};

export const makeWaterfallFromJson = (input: WaterfallResponse): string => {
  let waterfallPlans = new Map();
  if (!input.data || input.data.length === 0) {
    return toJson(waterfallPlans);
  }
  input.data.map((item) =>
    waterfallPlans.set(item.acc_id, toSlimWaterfall(item))
  );
  return toJson(waterfallPlans);
};
