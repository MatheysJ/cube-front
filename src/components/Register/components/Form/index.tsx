import React from "react";
import { FormProps } from "./types";
import { Flex } from "@chakra-ui/react";
import { CustomInput, InputPhase } from "./components";
import { useForm } from "react-hook-form";

const Form: React.FC<FormProps> = ({ currentStep }) => {
  const {} = useForm();

  return (
    <form>
      <Flex flexDirection="column" w={360}>
        <InputPhase step={currentStep} phase={0}>
          <CustomInput label="E-Mail" />
          <CustomInput label="Senha" />
          <CustomInput label="Repetir senha" />
        </InputPhase>
        <InputPhase step={currentStep} phase={1}>
          <CustomInput label="CPF" />
          <CustomInput label="Número de telefone" />
          <CustomInput label="Data de Nascimento" />
        </InputPhase>
      </Flex>
    </form>
  );
};

export default Form;
