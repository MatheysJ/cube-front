import { FlexProps, InputProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface CustomInputProps extends UseFormRegisterReturn {
  label: string;
  type?: "default" | "password";
  invalid: boolean;
  errorMessage: string | undefined;
  variant?: InputProps["variant"];
  width?: FlexProps["width"];
  w?: FlexProps["w"];
}
