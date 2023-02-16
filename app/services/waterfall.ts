import { request } from "~/services/external-api.service.server";
import type {
  SlimWaterfall,
  Waterfall,
  WaterfallDataResponse,
  WaterfallDataSeries,
  WaterfallResponse,
} from "~/utils/types.server";
import { getMonth } from "~/utils/helpers";

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

const fill_data = (waterfallPlans: SlimWaterfall[]) => {
  let data: WaterfallDataSeries[] = [...Array(12).keys()].map((mon) => ({
    Month: getMonth(mon),
  }));
  for (const sw of waterfallPlans) {
    sw.data.forEach((num, i) => {
      const newData = { [sw.planName]: num };
      data[i] = { ...data[i], ...newData };
    });
  }
  return data;
};

const getNames = (waterfallPlans: SlimWaterfall[]) => {
  const names: string[] = [];
  for (const sw of waterfallPlans) {
    names.push(sw.planName);
  }
  return names;
};

export const makeWaterfallFromJson = (
  input: WaterfallResponse
): WaterfallDataResponse => {
  if (!input.data || input.data.length === 0) {
    return { waterfallData: [], names: [] };
  }

  let waterfallPlans: SlimWaterfall[] = [];
  input.data.map((item) => waterfallPlans.push(toSlimWaterfall(item)));
  const wp: SlimWaterfall[] = waterfallPlans.sort(
    (a, b) => sumOfAmount(b) - sumOfAmount(a)
  );

  return { waterfallData: fill_data(wp), names: getNames(wp) };
};

function sumOfAmount(obj: SlimWaterfall) {
  return obj.data.reduce((a: number, b: number) => a + b, 0);
}
