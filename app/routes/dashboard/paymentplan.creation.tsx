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
import React, { useEffect, useRef, useState } from "react";
import { Form, useActionData } from "@remix-run/react";
import { PaymentFrequency, PlanType, TimelineMonths } from "~/utils/constants";
import type { DropdownInput } from "~/utils/types.server";
import { PreferenceDropdownItem } from "~/components/select-box";
import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { createPreference } from "~/services/accounts.server";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  let timeline = form.get("timeline");
  let frequency = form.get("frequency");
  let planType = form.get("planType");
  const action = form.get("_action");

  switch (action) {
    case "submit_preference":
      if (
        typeof timeline !== "string" ||
        typeof frequency !== "string" ||
        typeof planType !== "string"
      ) {
        return json({ error: `Invalid Form Data Wrong Type` }, { status: 400 });
      }

      const errors = {
        timeline: timeline ? null : 0,
        frequency: frequency ? null : 0,
        planType: planType ? null : 0,
      };

      if (Object.values(errors).some(Boolean))
        return json(
          { errors, fields: { timeline, frequency, planType } },
          { status: 400 }
        );

      await createPreference({ timeline, frequency, planType });

      return redirect("/dashboard/paymentplan/creation/summary");

    default:
      return json({ error: `Invalid Form Data` }, { status: 400 });
  }
}

export default function PaymentPlanCreation() {
  const actionData = useActionData();
  const [formError, setFormError] = useState(actionData?.error || "");
  const firstLoad = useRef(true);

  const [formData, setFormData] = useState({
    timeline: actionData?.fields?.timeline || "",
    frequency: actionData?.fields?.frequency || "",
    planType: actionData?.fields?.planType || "",
  });

  useEffect(() => {
    if (!firstLoad.current) {
      setFormError("");
    }
  }, [formData]);

  useEffect(() => {
    firstLoad.current = false;
  }, []);

  const handleInputChange = (value: number, field: string) => {
    setFormData((form) => ({ ...form, [field]: value }));
  };

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
      <div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2">
        {formError}
      </div>
      <Form
        method="post"
        onSubmit={(e) =>
          !confirm("Are you sure?") ? e.preventDefault() : true
        }
      >
        <Title marginTop="mt-4">Payment Preferences</Title>
        <ColGrid
          numColsMd={4}
          numColsLg={4}
          gapX="gap-x-4"
          gapY="gap-y-4"
          marginTop="mt-3"
        >
          <Card maxWidth="max-w-xs">
            <input type="hidden" value={formData.timeline} name="timeline" />
            <PreferenceDropdownItem
              label="Payment Timeline (Months)"
              options={toDropdownOption(TimelineMonths, CalendarIcon)}
              onChange={(e) => handleInputChange(e, "timeline")}
              error={actionData?.errors?.timeline}
              value={formData.timeline}
            />
          </Card>
          <Card maxWidth="max-w-xs">
            <input type="hidden" value={formData.frequency} name="frequency" />
            <PreferenceDropdownItem
              label="Payment Frequency"
              options={toDropdownOption(PaymentFrequency, CalendarDaysIcon)}
              onChange={(e) => handleInputChange(e, "frequency")}
              error={actionData?.errors?.frequency}
              value={formData.frequency}
            />
          </Card>
          <Card maxWidth="max-w-xs">
            <input type="hidden" value={formData.planType} name="planType" />
            <PreferenceDropdownItem
              label="Payment Plan Type"
              options={toDropdownOption(PlanType, BanknotesIcon)}
              onChange={(e) => handleInputChange(e, "planType")}
              error={actionData?.errors?.planType}
              value={formData.planType}
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
