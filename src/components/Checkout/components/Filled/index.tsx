import React from "react";
import { useForm } from "react-hook-form";
import { useSteps } from "@chakra-ui/react";
import { PageContent } from "@/components/Common";

import {
  CheckoutSteps,
  CheckoutItems,
  CheckoutButtons,
  CheckoutFormFulfillment,
  CheckoutPaymentForm,
} from "./components";
import { CHECKOUT_STEPS } from "../../constants";

const Filled: React.FC = () => {
  const steps = useSteps({ count: CHECKOUT_STEPS.length });
  const form = useForm();

  return (
    <PageContent h="100%">
      <CheckoutSteps steps={steps} />
      <CheckoutItems currentStep={steps.value} />
      <CheckoutFormFulfillment currentStep={steps.value} form={form} />
      <CheckoutPaymentForm currentStep={steps.value} form={form} />

      <CheckoutButtons steps={steps} form={form} />
    </PageContent>
  );
};

export default Filled;
