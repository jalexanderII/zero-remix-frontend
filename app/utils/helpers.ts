import type { Account } from "~/utils/types.server";

export const toUSD = (value: number, digits = 2) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: digits, // (causes 2500.99 to be printed as $2,501)
  });
  return formatter.format(value);
};

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getMonth = (val: number) => {
  return month[val];
};

export function mapToJson(map: Map<string, any>) {
  return JSON.stringify(Array.from(map.entries()));
}

export function jsonToMap(jsonStr: string): Map<string, any> {
  return new Map(JSON.parse(jsonStr));
}

export const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export function cleanDate(date: string) {
  if (!date) return "";
  // Tue, 01 Aug 2023 23:15:39 GMT
  const clean_date = new Date(Date.parse(date));
  const month = getMonth(clean_date.getUTCMonth());
  const day = clean_date.getUTCDate();
  const year = clean_date.getUTCFullYear();
  return `${month}-${day}-${year}`;
}

export const AccountIDToName = (data: Account[]) => {
  const accIDToName: Map<string, string> = new Map();
  data.forEach((item) => {
    accIDToName.set(item.id, item.official_name);
  });
  return accIDToName;
};
