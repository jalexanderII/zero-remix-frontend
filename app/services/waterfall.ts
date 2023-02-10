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

const toSlimWaterfall = (data: Waterfall, i: number): SlimWaterfall => {
  return {
    planName: `Plan${i + 1}`,
    planId: data.name,
    data: data.data,
  };
};

export const makeWaterfallFromJson = (input: WaterfallResponse): string => {
  let waterfallPlans = new Map();
  if (!input.data || input.data.length === 0) {
    return toJson(waterfallPlans);
  }
  input.data.map((item, i) =>
    waterfallPlans.set(`Plan${i + 1}`, toSlimWaterfall(item, i))
  );
  return toJson(waterfallPlans);
};
