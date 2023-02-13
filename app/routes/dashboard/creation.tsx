// import { Modal } from "~/components/modal";
// import {
//   Accordion,
//   AccordionBody,
//   AccordionHeader,
//   AccordionList,
//   Block,
//   Card,
//   ColGrid,
//   Metric,
//   Text,
//   Title,
// } from "@tremor/react";
// import {
//   BanknotesIcon,
//   CalendarDaysIcon,
//   CalendarIcon,
// } from "@heroicons/react/24/outline";
// import React, { useEffect, useRef, useState } from "react";
// import { Form, useActionData, useLoaderData } from "@remix-run/react";
// import { PaymentFrequency, PlanType, TimelineMonths } from "~/utils/constants";
// import type {
//   AccountAndTransactions,
//   DropdownInput,
//   SlimTransaction,
// } from "~/utils/types.server";
// import type { ActionArgs, LoaderFunction } from "@remix-run/node";
// import { json, redirect } from "@remix-run/node";
// import { PreferenceDropdownItem } from "~/components/select-box";
// import { PaymentPlanTransactions } from "~/components/TrxnTableWithCheckbox/transactions_table_with_checkbox";
// import { createPaymentPlan } from "~/services/paymentplan.server";
// import { getAuth } from "@clerk/remix/ssr.server";
// import api from "~/services/api.server";
// import { getUserEmail } from "~/routes/dashboard";
// // import { toUSD } from "~/utils/helpers";
//
// export async function action({ request }: ActionArgs) {
//   const form = await request.formData();
//   let timeline = form.get("timeline");
//   let frequency = form.get("frequency");
//   let planType = form.get("planType");
//   const action = form.get("_action");
//
//   switch (action) {
//     case "submit_preference":
//       if (
//         typeof timeline !== "string" ||
//         typeof frequency !== "string" ||
//         typeof planType !== "string"
//       ) {
//         return json({ error: `Invalid Form Data Wrong Type` }, { status: 400 });
//       }
//
//       const errors = {
//         timeline: timeline ? null : 0,
//         frequency: frequency ? null : 0,
//         planType: planType ? null : 0,
//       };
//
//       if (Object.values(errors).some(Boolean))
//         return json(
//           { errors, fields: { timeline, frequency, planType } },
//           { status: 400 }
//         );
//
//       await createPaymentPlan({ timeline, frequency, planType });
//
//       return redirect("/dashboard/paymentplan/creation/summary");
//
//     default:
//       return json({ error: `Invalid Form Data` }, { status: 400 });
//   }
// }
//
// export const loader: LoaderFunction = async (args) => {
//   const { userId } = await getAuth(args);
//   if (!userId) {
//     return redirect("/sign-in");
//   }
//   const email = await getUserEmail(userId);
//
//   const accountAndTransactions: AccountAndTransactions =
//     await api.paymentplan.get_transactions_by_account(email);
//   return { accountAndTransactions };
// };
//
// export default function Creation() {
//   const [state, setState] = useState({});
//
//   const { accountAndTransactions } = useLoaderData();
//
//   const actionData = useActionData();
//   const [formError, setFormError] = useState(actionData?.error || "");
//   const firstLoad = useRef(true);
//
//   const [formData, setFormData] = useState({
//     timeline: actionData?.fields?.timeline || "",
//     frequency: actionData?.fields?.frequency || "",
//     planType: actionData?.fields?.planType || "",
//   });
//
//   // const updateAmount = (newAmount: number, accountId: number) => {
//   //   const updateAmount = amounts.map((n, i) => {
//   //     if (i === idx) {
//   //       return newAmount;
//   //     } else {
//   //       return n;
//   //     }
//   //   });
//   //   setAmounts(updateAmount);
//   // toUSD(amounts.reduce((a, b) => a + b, 0))
//   // };
//
//   const updateState = (newAmount: number, accountId: string) => {
//     setState((prevState) => ({
//       ...prevState,
//       [accountId]: newAmount,
//     }));
//   };
//
//   useEffect(() => {
//     return () => {
//       console.log("state", state);
//     };
//   }, []);
//
//   useEffect(() => {
//     if (!firstLoad.current) {
//       setFormError("");
//     }
//   }, [formData]);
//
//   useEffect(() => {
//     firstLoad.current = false;
//   }, []);
//
//   const handleInputChange = (value: number, field: string) => {
//     setFormData((form) => ({ ...form, [field]: value }));
//   };
//
//   const toDropdownOption = (selection: Map<number, string>, icon: any) => {
//     let data: DropdownInput[] = [];
//     for (const [key, value] of selection) {
//       data.push({
//         value: key,
//         text: value,
//         icon: icon,
//       });
//     }
//     return data;
//   };
//
//   if (formError) {
//     console.log(formError);
//   }
//
//   return (
//     <Modal
//       isOpen={true}
//       className="tr-overflow-auto p-10"
//       navigate_path={"/dashboard"}
//     >
//       <Title>Create A Payment Plan</Title>
//       <Text>
//         Select the accounts or transactions you'd like to pay-down and select
//         your payment preferences.
//       </Text>
//       <Block marginTop="mt-6">
//         <AccordionList>
//           {accountAndTransactions.slimAccounts.map((i: SlimTransaction) => (
//             <Accordion key={i.accountId}>
//               <AccordionHeader>{i.name}</AccordionHeader>
//               <AccordionBody>
//                 <PaymentPlanTransactions
//                   accountId={i.accountId}
//                   updateState={updateState}
//                   transactions={
//                     accountAndTransactions.transactionDict[i.accountId]
//                   }
//                 />
//               </AccordionBody>
//             </Accordion>
//           ))}
//         </AccordionList>
//       </Block>
//       <Form
//         method="post"
//         onSubmit={(e) =>
//           !confirm("Are you sure?") ? e.preventDefault() : true
//         }
//       >
//         <Title marginTop="mt-4">Payment Preferences</Title>
//         <ColGrid
//           numColsMd={4}
//           numColsLg={4}
//           gapX="gap-x-4"
//           gapY="gap-y-4"
//           marginTop="mt-3"
//         >
//           <Card maxWidth="max-w-xs">
//             <input type="hidden" value={formData.timeline} name="timeline" />
//             <PreferenceDropdownItem
//               label="Payment Timeline (Months)"
//               options={toDropdownOption(TimelineMonths, CalendarIcon)}
//               onChange={(e) => handleInputChange(e, "timeline")}
//               error={actionData?.errors?.timeline}
//               value={formData.timeline}
//             />
//           </Card>
//           <Card maxWidth="max-w-xs">
//             <input type="hidden" value={formData.frequency} name="frequency" />
//             <PreferenceDropdownItem
//               label="Payment Frequency"
//               options={toDropdownOption(PaymentFrequency, CalendarDaysIcon)}
//               onChange={(e) => handleInputChange(e, "frequency")}
//               error={actionData?.errors?.frequency}
//               value={formData.frequency}
//             />
//           </Card>
//           <Card maxWidth="max-w-xs">
//             <input type="hidden" value={formData.planType} name="planType" />
//             <PreferenceDropdownItem
//               label="Payment Plan Type"
//               options={toDropdownOption(PlanType, BanknotesIcon)}
//               onChange={(e) => handleInputChange(e, "planType")}
//               error={actionData?.errors?.planType}
//               value={formData.planType}
//             />
//           </Card>
//           <Card maxWidth="max-w-xs">
//             <Text textAlignment={"text-center"}>Total Amount</Text>
//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <Metric>$100</Metric>
//             </div>
//           </Card>
//         </ColGrid>
//         <br />
//         <div className="flex flex-col items-center md:flex-row pt-14">
//           <div className="flex-1" />
//           <button
//             className="rounded-xl bg-blue-300 font-semibold text-blue-600 w-56 h-12 transition duration-300 ease-in-out hover:bg-blue-400 hover:-translate-y-1"
//             name="_action"
//             value="submit_preference"
//           >
//             Send
//           </button>
//         </div>
//       </Form>
//     </Modal>
//   );
// }

export {};
