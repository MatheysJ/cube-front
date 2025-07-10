import { CHECKOUT_STEPS } from "@/components/Checkout/constants";
import { Flex, Steps, useSteps } from "@chakra-ui/react";
import React from "react";
import { CheckoutFormProps } from "./types";

const CheckoutSteps: React.FC<CheckoutFormProps> = ({ steps }) => {
  return (
    <Steps.RootProvider variant="subtle" value={steps} mb="12">
      <Steps.List gap="10">
        {CHECKOUT_STEPS.map((step, index) => (
          <Steps.Item
            index={index}
            key={index}
            title={step.title}
            alignItems="center"
          >
            <Steps.Indicator />
            <Steps.Title color="colorPalette.contrast" fontSize="lg">
              {step.title}
            </Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
    </Steps.RootProvider>
  );
};

export default CheckoutSteps;
