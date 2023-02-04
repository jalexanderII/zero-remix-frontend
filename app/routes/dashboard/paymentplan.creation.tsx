import { Modal } from "~/components/modal";
import {
  Card,
  ColGrid,
  Block,
  Metric,
  Text,
  Dropdown,
  DropdownItem,
  Title,
  AccordionList,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@tremor/react";
import {
  BanknotesIcon,
  CalendarDaysIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "@remix-run/react";

export default function PaymentPlanCreation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = () => {
    setIsOpen(false);
    navigate("summary");
  };
  return (
    <Modal
      isOpen={isOpen}
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
      <Title marginTop="mt-4">Payment Preferences</Title>
      <ColGrid
        numColsMd={4}
        numColsLg={4}
        gapX="gap-x-4"
        gapY="gap-y-4"
        marginTop="mt-3"
      >
        <Card maxWidth="max-w-xs">
          <Text>Payment Timeline (Months)</Text>
          <Dropdown marginTop="mt-2" placeholder="Unknown">
            <DropdownItem
              key={4}
              value={0}
              text={"Payment Timeline"}
              icon={CalendarIcon}
            />
          </Dropdown>
        </Card>
        <Card maxWidth="max-w-xs">
          <Text>Payment Frequency</Text>
          <Dropdown marginTop="mt-2" placeholder="Unknown">
            <DropdownItem
              key={4}
              value={0}
              text={"Payment Frequency"}
              icon={CalendarDaysIcon}
            />
          </Dropdown>
        </Card>
        <Card maxWidth="max-w-xs">
          <Text>Payment Plan Type</Text>
          <Dropdown marginTop="mt-2" placeholder="Unknown">
            <DropdownItem
              key={4}
              value={0}
              text={"Payment Plan"}
              icon={BanknotesIcon}
            />
          </Dropdown>
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
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </Modal>
  );
}
