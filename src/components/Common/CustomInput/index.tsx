import React from "react";
import { CustomInputProps } from "./types";
import { Box, Field, Input } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  invalid,
  errorMessage,
  ...formProps
}) => (
  <Field.Root required invalid={invalid}>
    <Field.Label>{label}</Field.Label>
    {type == "password" ? (
      <PasswordInput variant="flushed" {...formProps} />
    ) : (
      <Input variant="flushed" {...formProps} />
    )}

    {errorMessage ? (
      <Field.ErrorText>{errorMessage}</Field.ErrorText>
    ) : (
      <Box height="16px" />
    )}
  </Field.Root>
);

export default CustomInput;
