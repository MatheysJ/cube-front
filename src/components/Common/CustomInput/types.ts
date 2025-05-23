import { UseFormRegisterReturn } from "react-hook-form";

export interface CustomInputProps extends UseFormRegisterReturn {
  label: string;
  type?: "default" | "password";
  invalid: boolean;
  errorMessage: string | undefined;
}
