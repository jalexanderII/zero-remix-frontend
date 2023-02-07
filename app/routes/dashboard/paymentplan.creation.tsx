import { Modal } from "~/components/modal";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Block,
  Card,
  ColGrid,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  BanknotesIcon,
  CalendarDaysIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
// import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Form } from "@remix-run/react";
import { PaymentFrequency, PlanType, TimelineMonths } from "~/utils/constants";
import type { DropdownInput } from "~/utils/types.server";
import { PreferenceDropdownItem } from "~/components/select-box";
// import type { ActionArgs } from "@remix-run/node";
// import { json, redirect } from "@remix-run/node";
// import { createPreference } from "~/services/accounts.server";

// export async function action({ request }: ActionArgs) {
//   const formData = await request.formData();
//
//   const timeline = formData.get("timeline");
//   const frequency = formData.get("frequency");
//   const planType = formData.get("planType");
//
//   const errors = {
//     timeline: timeline ? null : 0,
//     frequency: frequency ? null : 0,
//     planType: planType ? null : 0,
//   };
//   const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
//   if (hasErrors) {
//     return json(errors);
//   }
//
//   const resp = await createPreference({ timeline, frequency, planType });
//   console.log(resp);
//
//   await new Promise((res) => setTimeout(res, 1000));
//
//   return redirect("/dashboard/paymentplan/summary");
// }

export default function PaymentPlanCreation() {
  // const navigate = useNavigate();
  // const navigation = useNavigation();
  // const isCreating = Boolean(navigation.state === "submitting");

  // console.log("isCreating", isCreating);

  // const errors = useActionData<typeof action>();

  // console.log("actionDataErrors", errors);

  // const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    pref: {
      timeline: 0,
      frequency: 0,
      planType: 0,
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setFormData((data) => ({
      ...data,
      pref: {
        ...data.pref,
        [field]: e.target.value,
      },
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  //
  // const handleSubmit = () => {
  //   setIsOpen(false);
  //   navigate("summary");
  // };

  const toDropdownOption = (selection: Map<number, string>, icon: any) => {
    let data: DropdownInput[] = [];
    for (const [key, value] of selection) {
      data.push({
        value: key,
        text: value,
        icon: icon,
      });
    }
    return data;
  };

  return (
    <Modal
      isOpen={true}
      className="tr-overflow-auto p-10"
      navigate_path={"/dashboard"}
    >
      <Title>Create A Payment Plan</Title>
      <Text>
        Select the accounts or transactions you'd like to pay-down and select
        your payment preferences.
      </Text>
      <Block marginTop="mt-6">
        <AccordionList>
          <Accordion>
            <AccordionHeader>Accordion 1</AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tempor lorem non est congue blandit. Praesent non lorem sodales,
              suscipit est sed, hendrerit dolor.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Accordion 2</AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tempor lorem non est congue blandit. Praesent non lorem sodales,
              suscipit est sed, hendrerit dolor.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Accordion 3</AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tempor lorem non est congue blandit. Praesent non lorem sodales,
              suscipit est sed, hendrerit dolor.
            </AccordionBody>
          </Accordion>
        </AccordionList>
      </Block>
      <Form action="/dashboard?index" method="post">
        <Title marginTop="mt-4">Payment Preferences</Title>
        <ColGrid
          numColsMd={4}
          numColsLg={4}
          gapX="gap-x-4"
          gapY="gap-y-4"
          marginTop="mt-3"
        >
          <Card maxWidth="max-w-xs">
            <input
              type="hidden"
              value={formData.pref.timeline}
              name="preference"
            />
            <PreferenceDropdownItem
              label="Payment Timeline (Months)"
              options={toDropdownOption(TimelineMonths, CalendarIcon)}
              onChange={(e) => handleChange(e, "timeline")}
            />
          </Card>
          <Card maxWidth="max-w-xs">
            <input
              type="hidden"
              value={formData.pref.frequency}
              name="preference"
            />
            <PreferenceDropdownItem
              label="Payment Frequency"
              options={toDropdownOption(PaymentFrequency, CalendarDaysIcon)}
              onChange={(e) => handleChange(e, "frequency")}
            />
          </Card>
          <Card maxWidth="max-w-xs">
            <input
              type="hidden"
              value={formData.pref.planType}
              name="preference"
            />
            <PreferenceDropdownItem
              label="Payment Plan Type"
              options={toDropdownOption(PlanType, BanknotesIcon)}
              onChange={(e) => handleChange(e, "planType")}
            />
          </Card>
          <Card maxWidth="max-w-xs">
            <Text textAlignment={"text-center"}>Total Amount</Text>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Metric>$1234</Metric>
            </div>
          </Card>
        </ColGrid>
        <br />
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex-1" />
          <button
            type="submit"
            className="rounded-xl bg-blue-300 font-semibold text-blue-600 w-80 h-12 transition duration-300 ease-in-out hover:bg-blue-400 hover:-translate-y-1"
            name="_action"
            value="submit_preference"
          >
            Send
          </button>
        </div>
      </Form>
    </Modal>
  );
}
