import {
  CalendarIcon,
  ClipboardDocumentIcon,
  CreditCardIcon,
} from "@heroicons/react/20/solid";
import type { FC } from "react";
import { memo } from "react";

type Props = {
  icon: any;
  title: string;
  description: string;
};

const Step: FC<Props> = memo(({ icon, title, description }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="w-12 h-12 bg-purple-400 rounded-full p-2">{icon}</div>
      <div className="ml-4">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="text-md leading-8 text-gray-600">{description}</p>
      </div>
    </div>
  );
});

Step.displayName = "Step";
const HowToGetStarted = (): JSX.Element => {
  return (
    <div className="py-12 flex flex-col justify-center sm:py-24">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 mb-10">
            How to Get Started
          </h1>
          <div className="space-y-8">
            <Step
              description="Connect a credit account securely using Plaid."
              icon={<CreditCardIcon className="h-8 w-8 text-white" />}
              title="1. Connect a credit card."
            />
            <Step
              description="Select a plan creation option that suits your financial goals and needs."
              icon={<ClipboardDocumentIcon className="h-8 w-8 text-white" />}
              title="2. Create a payment plan."
            />
            <Step
              description="Relax and focus on what matters most while we help you stay on top of your finances."
              icon={<CalendarIcon className="h-8 w-8 text-white" />}
              title="3. Sit back and we'll let you know when your payment is due!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToGetStarted;
