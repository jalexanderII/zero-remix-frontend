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

const month = () => {
  const months = [
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

  const today = new Date();
  const currentMonth = today.getMonth();

  return [...months.slice(currentMonth), ...months.slice(0, currentMonth)];
};

export const getMonth = (val: number) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const year = val < month().indexOf("Jan") ? currentYear : currentYear + 1;
  return `${month()[val]} '${year.toString().slice(-2)}`;
};

export function mapToJson(map: Map<string, any>) {
  return JSON.stringify(Array.from(map.entries()));
}

export function jsonToMap(jsonStr: string): Map<string, any> {
  return new Map(JSON.parse(jsonStr));
}

export const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export function formatAsPercentage(num: number) {
  return new Intl.NumberFormat("us", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num / 100);
}

export function cleanDate(date: string | Date) {
  if (!date) return "";
  let clean_date: Date;

  if (typeof date === "string") {
    clean_date = new Date(Date.parse(date));
  } else {
    clean_date = date;
  }
  // Tue, 01 Aug 2023 23:15:39 GMT
  if (typeof date === "string") {
    clean_date = new Date(Date.parse(date));
  }
  const month = getMonth(clean_date.getUTCMonth());
  const day = clean_date.getUTCDate();
  const year = clean_date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}

export const AccountIDToName = (data: Account[]) => {
  const accIDToName: Map<string, string> = new Map();
  if (!data || data.length === 0) {
    return accIDToName;
  }
  data.forEach((item) => {
    accIDToName.set(item.id, item.official_name);
  });
  return accIDToName;
};
