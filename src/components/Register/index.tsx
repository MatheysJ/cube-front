import React from "react";
import { PAGE } from "@/constants/page";
import { Flex, Link, Text, useSteps } from "@chakra-ui/react";

import { Form, Root, Section, Stepper } from "./components";
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

        <Text color="black" fontSize="2xl" fontWeight="bold">
          Já possui uma conta?{" "}
          <Link
            variant="underline"
            color="inherit"
            textDecorationColor="colorPalette.solid"
            href={PAGE.LOGIN}
          >
            Entre
          </Link>
        </Text>
      </Section>
      <Section bg="gray.900">
        <Form steps={steps} />
      </Section>
    </Root>
  );
};

export default Register;
