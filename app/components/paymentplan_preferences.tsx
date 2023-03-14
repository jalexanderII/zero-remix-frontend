import { Card } from "@tremor/react";
import {
  BanknotesIcon,
  CalendarDaysIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef } from "react";
import { PaymentFrequency, PlanType, TimelineMonths } from "~/utils/constants";
import type { DropdownInput } from "~/utils/types.server";
import { PreferenceDropdownItem } from "~/components/select-box";
import { usePaymentPlanCreationForm } from "~/utils/store";

export default function PaymentPlanPreferences() {
  const {
    timeline,
    frequency,
    planType,
    updateTimeline,
    updateFrequency,
    updatePlanType,
  } = usePaymentPlanCreationForm((state) => state);

  const firstLoad = useRef(true);

  useEffect(() => {
    firstLoad.current = false;
  }, []);

  const handleInputChange = (value: number, field: string) => {
    switch (field) {
      case "timeline":
        updateTimeline(value);
        break;
      case "frequency":
        updateFrequency(value);
        break;
      case "planType":
        updatePlanType(value);
        break;
    }
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
    <>
      <Card maxWidth="max-w-xs">
        <PreferenceDropdownItem
          label="Payment Timeline (Months)"
          options={toDropdownOption(TimelineMonths, CalendarIcon)}
          onChange={(e) => handleInputChange(e, "timeline")}
          value={timeline}
        />
      </Card>
      <Card maxWidth="max-w-xs">
        <PreferenceDropdownItem
          label="Payment Frequency"
          options={toDropdownOption(PaymentFrequency, CalendarDaysIcon)}
          onChange={(e) => handleInputChange(e, "frequency")}
          value={frequency}
        />
      </Card>
      <Card maxWidth="max-w-xs">
        <PreferenceDropdownItem
          label="Payment Plan Type"
          options={toDropdownOption(PlanType, BanknotesIcon)}
          onChange={(e) => handleInputChange(e, "planType")}
          value={planType}
        />
      </Card>
    </>
  );
}
