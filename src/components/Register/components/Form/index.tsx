import React from "react";
import { useForm } from "react-hook-form";

import { Action, Fields, ThirdParty } from "./components";
import { STEP_ITEMS } from "../../constants";
import { FormProps } from "./types";

const Form: React.FC<FormProps> = ({ steps }) => {
  const formProps = useForm();
  const onSubmit = formProps.handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <Fields currentStep={steps.value} {...formProps} />
      <ThirdParty />
      <Action
        goToNextStep={steps.goToNextStep}
        goToPrevStep={steps.goToPrevStep}
        currentStep={steps.value}
        stepItems={STEP_ITEMS}
      />
    </form>
  );
};

export default Form;
