import { Step } from "@/components/Register/types";
import { UseFormReturn, UseFormTrigger } from "react-hook-form";

export interface ActionProps extends UseFormReturn {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  currentStep: number;
  stepItems: Step[];
}
