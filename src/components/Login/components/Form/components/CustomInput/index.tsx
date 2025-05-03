import { Field, Input } from "@chakra-ui/react";
import { CustomInputProps } from "./types";
import React from "react";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  errorText,
  helperText,
}) => (
  <Field.Root>
    <Field.Label>
      {label}
      <Field.RequiredIndicator />
    </Field.Label>
    <Input variant="flushed" />
    <Field.HelperText>{helperText}</Field.HelperText>
    <Field.ErrorText>{errorText}</Field.ErrorText>
  </Field.Root>
);

export default CustomInput;
