import React from "react";
import { chakra } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { Action, Fields } from "./components";
import { STEP_ITEMS } from "../../constants";
import { FormProps } from "./types";

const Form: React.FC<FormProps> = ({ steps }) => {
  const formProps = useForm();

  return (
    <chakra.form
      display="flex"
      flexDirection="column"
      h="100%"
      w="100%"
      flex={1}
    >
      <Fields currentStep={steps.value} {...formProps} />
      <Action
        goToNextStep={steps.goToNextStep}
        goToPrevStep={steps.goToPrevStep}
        currentStep={steps.value}
        stepItems={STEP_ITEMS}
        {...formProps}
      />
    </chakra.form>
  );
};

export default Form;
