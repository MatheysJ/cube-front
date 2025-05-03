import React from "react";
import { RegisterProps } from "./types";
import {
  Action,
  Form,
  Links,
  Root,
  Section,
  Stepper,
  ThirdParty,
} from "./components";
import { Text, useSteps } from "@chakra-ui/react";
import { STEP_ITEMS } from "./constants";

const Register: React.FC<RegisterProps> = () => {
  const steps = useSteps({ count: STEP_ITEMS.length });

  return (
    <Root>
      <Section zIndex={1} mr="4" w={480} gap="10">
        <Text color="colorPalette.contrast" fontSize="3xl">
          Crie sua conta
        </Text>

        <Stepper steps={steps} items={STEP_ITEMS} flexDirection="column" />
      </Section>
      <Section bg="gray.900">
        <Form currentStep={steps.value} />
        <ThirdParty />
        <Action
          goToNextStep={steps.goToNextStep}
          goToPrevStep={steps.goToPrevStep}
          currentStep={steps.value}
          stepItems={STEP_ITEMS}
        />
      </Section>
    </Root>
  );
};

export default Register;
