import React from "react";
import { chakra } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { Action, Fields, ThirdParty } from "./components";
import { STEP_ITEMS } from "../../constants";
import { FormProps } from "./types";

const Form: React.FC<FormProps> = ({ steps }) => {
  const formProps = useForm();

  return (
    <chakra.form display="flex" flexDirection="column" height="100%">
      <Fields currentStep={steps.value} {...formProps} />
      <ThirdParty />
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
