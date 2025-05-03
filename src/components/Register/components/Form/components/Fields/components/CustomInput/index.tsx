import React from "react";
import { CustomInputProps } from "./types";
import { Field, Input } from "@chakra-ui/react";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  invalid,
  errorMessage,
}) => {
  return (
    <Field.Root required invalid={invalid}>
      <Field.Label>{label}</Field.Label>
      {type == "password" ? (
        <Input variant="flushed" />
      ) : (
        <Input variant="flushed" />
      )}
      <Field.ErrorText>{errorMessage}</Field.ErrorText>
    </Field.Root>
  );
};

export default CustomInput;
