import React from "react";
import { Flex, Text, useSteps } from "@chakra-ui/react";

import { Enter, Form, Root, Section, Stepper } from "./components";
import { STEP_ITEMS } from "./constants";
import { RegisterProps } from "./types";

const Register: React.FC<RegisterProps> = () => {
  const steps = useSteps({ count: STEP_ITEMS.length });

  return (
    <Root>
      <Section zIndex={1} mr="4" w={480} justifyContent="space-between">
        <Flex flexDirection="column" gap="10">
          <Text color="colorPalette.contrast" fontSize="3xl">
            Crie sua conta
          </Text>

          <Stepper steps={steps} items={STEP_ITEMS} flexDirection="column" />
        </Flex>

        <Enter hideBelow="lg" />
      </Section>
      <Section bg="gray.900" flex={1}>
        <Form steps={steps} />
      </Section>
    </Root>
  );
};

export default Register;
