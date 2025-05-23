import { UseFormReturn } from "react-hook-form";

export interface FieldsProps extends UseFormReturn {
  currentStep: number;
}
