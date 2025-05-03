import React from "react";
import { CustomInputProps } from "./types";
import { Field, Input } from "@chakra-ui/react";

const CustomInput: React.FC<CustomInputProps> = ({ label, type }) => {
  return (
    <Field.Root required>
      <Field.Label>{label}</Field.Label>
      {type == "password" ? (
        <Input variant="flushed" />
      ) : (
        <Input variant="flushed" />
      )}
    </Field.Root>
  );
};

export default CustomInput;
