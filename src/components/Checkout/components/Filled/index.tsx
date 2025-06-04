import React from "react";
import { useSteps } from "@chakra-ui/react";
import { PageContent } from "@/components/Common";

import {
  CheckoutButtons,
  CheckoutFormFulfillment,
  CheckoutItems,
  CheckoutSteps,
} from "./components";
import { CHECKOUT_STEPS } from "../../constants";

const Filled: React.FC = () => {
  const steps = useSteps({ count: CHECKOUT_STEPS.length });

  return (
    <PageContent h="100%">
      <CheckoutSteps steps={steps} />
      <CheckoutItems currentStep={steps.value} />
      <CheckoutFormFulfillment currentStep={steps.value} />
      <CheckoutButtons steps={steps} />
    </PageContent>
  );
};

export default Filled;
