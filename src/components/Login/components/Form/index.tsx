import React from "react";
import { FormProps } from "./types";
import CustomInput from "./components/CustomInput";
import { Flex } from "@chakra-ui/react";

const Form: React.FC<FormProps> = () => {
  return (
    <Flex flexDirection="column" w={360} gap="4">
      <CustomInput label="E-Mail" errorText=" inválido" />
      <CustomInput label="Senha" errorText=" inválido" />
    </Flex>
  );
};

export default Form;
