import React from "react";
import { CustomInputProps } from "./types";
import { Box, Field, Input } from "@chakra-ui/react";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  invalid,
  errorMessage,
  ...formProps
}) => {
  return (
    <Field.Root required invalid={invalid}>
      <Field.Label>{label}</Field.Label>
      <Input variant="flushed" {...formProps} />
      {errorMessage ? (
        <Field.ErrorText>{errorMessage}</Field.ErrorText>
      ) : (
        <Box height="16px" />
      )}
    </Field.Root>
  );
};

export default CustomInput;
