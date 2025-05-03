import { Step } from "../../types";

export interface ActionProps {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  currentStep: number;
  stepItems: Step[];
}
