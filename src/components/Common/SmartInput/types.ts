import { FIELD } from "@/constants/field";
import { FlexProps, InputProps } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";

export interface SmartInputProps extends UseFormReturn {
  id: FIELD;
  w?: FlexProps["w"];
  width?: FlexProps["width"];
  variant?: InputProps["variant"];
}
