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

export function toJson(map: Map<string, any>) {
  return JSON.stringify(Array.from(map.entries()));
}

export function fromJson(jsonStr: string): Map<string, any> {
  return new Map(JSON.parse(jsonStr));
}

export function cleanDate(date: string) {
  if (!date) return "";
  // Tue, 01 Aug 2023 23:15:39 GMT
  const dateArr = date.split(" ");
  const month = dateArr[2];
  const day = dateArr[1];
  const year = dateArr[3];
  return `${month}-${day}-${year}`;
}
