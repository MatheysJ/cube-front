import { Flex, Steps, useSteps } from "@chakra-ui/react";
import React from "react";
import { StepperProps } from "./types";

const Stepper: React.FC<StepperProps> = ({
  steps,
  items,
  inverted,
  ...flexProps
}) => {
  return (
    <Flex {...flexProps}>
      <Steps.RootProvider variant="subtle" orientation="vertical" value={steps}>
        <Steps.List gap="10">
          {items.map((step, index) => (
            <Steps.Item
              index={index}
              key={index}
              title={step.title}
              alignItems="center"
              lgDown={{ display: steps.value == index ? "flex" : "none" }}
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
    </Flex>
  );
};

export default Stepper;
