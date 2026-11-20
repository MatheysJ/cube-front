import { FlexProps, UseStepsReturn } from "@chakra-ui/react";
import { Step } from "../../types";

export interface StepperProps extends FlexProps {
  items: Step[];
  steps: UseStepsReturn;
}
