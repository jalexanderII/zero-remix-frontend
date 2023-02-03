// // import { json } from "@remix-run/node";
// // import { API_URL } from "~/utils/constants";
// import api from "~/services/external-api.service.server";
//
// // export const callApi = async () => {
// //   let apiUrl = "https://fiber-production-788b.up.railway.app";
// //   let res = await fetch(apiUrl);
// //   if (res.status === 200) {
// //     let prunedData = await res.json();
// //     return json(prunedData);
// //   }
// //   return { message: "No data found" };
// // };
//
// export const callApi = async (email: string) => {
//   return api.accounts.get_user_accounts(email);
// };

export {};
