import React from "react";
import { Flex } from "@chakra-ui/react";

import { FormFulfillmentProps } from "./types";
import { Grid, Switch } from "./components";

const FormFulfillment: React.FC<FormFulfillmentProps> = ({
  currentStep,
  form,
}) => {
  const shouldRender = currentStep == 1;

  return shouldRender ? (
    <Flex flexDirection="column" gap="8">
      <Switch {...form} />

      <Grid {...form} />
    </Flex>
  ) : null;
};

export default FormFulfillment;
