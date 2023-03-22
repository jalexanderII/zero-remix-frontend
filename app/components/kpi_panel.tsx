import { Card, Grid, Icon, Metric, Text } from "@tremor/react";
import {
  ChartBarIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { toUSD } from "~/utils/helpers";
import type { KPI, KPIResponse } from "~/utils/types.server";
import React from "react";

interface KpiInfo {
  title: string;
  metric: string;
  icon: any;
}

interface KpiCards {
  debit: KpiInfo;
  credit: KpiInfo;
  plans: KpiInfo;
}

interface props {
  kpis: KPIResponse;
}

const toCategories = (props: KPI): KpiCards => {
  const d: KpiInfo = {
    title: "Debit",
    metric: toUSD(props.debit, 0),
    icon: CurrencyDollarIcon,
  };
  const c: KpiInfo = {
    title: "Credit",
    metric: toUSD(props.credit, 0),
    icon: CreditCardIcon,
  };
  const p: KpiInfo = {
    title: "PaymentPlans",
    metric: toUSD(props.payment_plans, 0),
    icon: ChartBarIcon,
  };
  return { credit: c, debit: d, plans: p };
};

export const KpiPanel: React.FC<props> = ({ kpis }) => {
  const categories = Object.values(toCategories(kpis.data));
  return (
    <Grid numColsSm={2} numColsLg={3} className="gap-x-6 gap-y-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <div className="text-center">
            <Icon icon={item.icon} variant="light" size="sm" />
            <Metric className="text-center mt-2">{item.metric}</Metric>
            <Text className="text-center">{item.title}</Text>
          </div>
        </Card>
      ))}
    </Grid>
  );
};
