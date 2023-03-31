import { request } from "~/services/external-api.service.server";
import type {
  SlimWaterfall,
  Waterfall,
  WaterfallDataResponse,
  WaterfallResponse,
} from "~/utils/types.server";
import { getMonth } from "~/utils/helpers";

export const waterfall = {
  get_user_waterfall: async (userId: string | null) =>
    request.get<WaterfallResponse>(`/api/planning/waterfall`, userId),
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

export const makeWaterfallFromJson = (
  input: WaterfallResponse
): WaterfallDataResponse => {
  if (!input.data || input.data.length === 0) {
    return { waterfallData: [], names: [] };
  }

  const waterfallPlans = input.data
    .map(toSlimWaterfall)
    .sort((a, b) => sumOfAmount(b) - sumOfAmount(a));

  const waterfallData = [...Array(12).keys()].map((mon) => ({
    Month: getMonth(mon),
    ...waterfallPlans.reduce((acc, { planName, data }) => {
      // @ts-ignore
      acc[planName] = (acc[planName] || []).concat(data[mon]);
      return acc;
    }, {}),
  }));

  const names = waterfallPlans.map(({ planName }) => planName);

  return { waterfallData, names };
};

function sumOfAmount(obj: SlimWaterfall) {
  return obj.data.reduce((a: number, b: number) => a + b, 0);
}
