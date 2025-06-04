import React from "react";
import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { FormFulfillmentProps } from "./types";
import { Grid, Switch } from "./components";

const FormFulfillment: React.FC<FormFulfillmentProps> = ({ currentStep }) => {
  const shouldRender = currentStep == 1;

  const form = useForm();

  return shouldRender ? (
    <Flex flexDirection="column" gap="8">
      <Switch control={form.control} formState={form.formState} />

      <Grid {...form} />
    </Flex>
  ) : null;
};

export default FormFulfillment;
