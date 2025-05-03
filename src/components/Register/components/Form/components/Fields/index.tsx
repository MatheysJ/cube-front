import React from "react";
import { Flex } from "@chakra-ui/react";

import { CustomInput, InputPhase } from "./components";
import { FieldsProps } from "./types";

const Fields: React.FC<FieldsProps> = ({
  currentStep,
  register,
  formState: { errors },
}) => (
  <Flex flexDirection="column" w={360}>
    <InputPhase step={currentStep} phase={0}>
      <CustomInput
        invalid={!!errors.email}
        {...register("email", { required: "Plese enter the value" })}
        label="E-Mail"
        errorMessage={errors.email?.message as string}
      />
      <CustomInput
        invalid={!!errors.password}
        {...register("password", { required: "Plese enter the value" })}
        label="Senha"
        errorMessage={errors.password?.message as string}
      />
      <CustomInput
        invalid={!!errors.confirmPassword}
        {...register("confirmPassword", {
          required: "Plese enter the value",
        })}
        label="Repetir senha"
        errorMessage={errors.confirmPassword?.message as string}
      />
    </InputPhase>

    <InputPhase step={currentStep} phase={1}>
      <CustomInput
        invalid={!!errors.cpf}
        {...register("cpf", { required: "Plese enter the value" })}
        label="CPF"
        errorMessage={errors.cpf?.message as string}
      />
      <CustomInput
        invalid={!!errors.number}
        {...register("number", { required: "Plese enter the value" })}
        label="Número de telefone"
        errorMessage={errors.number?.message as string}
      />
      <CustomInput
        invalid={!!errors.birthData}
        {...register("birthData", { required: "Plese enter the value" })}
        label="Data de Nascimento"
        errorMessage={errors.birthData?.message as string}
      />
    </InputPhase>
  </Flex>
);

export default Fields;
