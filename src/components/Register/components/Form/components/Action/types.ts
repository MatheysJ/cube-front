import { Step } from "@/components/Register/types";

export interface ActionProps {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  currentStep: number;
  stepItems: Step[];
}
