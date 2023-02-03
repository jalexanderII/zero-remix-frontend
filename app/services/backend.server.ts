import { json } from "@remix-run/node";

export const callApi = async () => {
  let apiUrl = "https://fiber-production-788b.up.railway.app";
  let res = await fetch(apiUrl);
  let prunedData = await res.json();
  return json(prunedData);
};
