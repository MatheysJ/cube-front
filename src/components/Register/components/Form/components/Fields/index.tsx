import React from "react";
import { Flex } from "@chakra-ui/react";
import { PATTERN } from "@/constants/pattern";
import { ChangeHandler } from "react-hook-form";
import { FIELD } from "@/components/Register/constants";
import { formatCPF, formatDate, formatPhone } from "@/utils/format";

import { CustomInput, InputPhase } from "./components";
import { FieldsProps } from "./types";

const Fields: React.FC<FieldsProps> = ({
  currentStep,
  register,
  formState: { errors },
  setValue,
}) => {
  const handleCPFChange: ChangeHandler = async (event) => {
    setValue(FIELD.CPF, formatCPF(event.target.value), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleBirthDateChange: ChangeHandler = async (event) => {
    setValue(FIELD.BIRTH, formatDate(event.target.value), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handlePhoneChange: ChangeHandler = async (event) => {
    setValue(FIELD.PHONE, formatPhone(event.target.value), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <Flex flexDirection="column" w={360} height="100%">
      <InputPhase step={currentStep} phase={0}>
        <CustomInput
          invalid={!!errors.email}
          {...register(FIELD.MAIL, { required: true, pattern: PATTERN.MAIL })}
          label="E-Mail"
          errorMessage={errors.email?.message as string}
        />
        <CustomInput
          invalid={!!errors.password}
          {...register(FIELD.PASSWORD, {
            required: true,
            pattern: PATTERN.PASSWORD,
          })}
          label="Senha"
          errorMessage={errors.password?.message as string}
        />
        <CustomInput
          invalid={!!errors.confirmPassword}
          {...register(FIELD.CONFIRM_PASSWORD, {
            required: true,
            validate: (value, { password }) => value == password,
          })}
          label="Repetir senha"
          errorMessage={PATTERN.REPEAT_PASSWORD.message}
        />
      </InputPhase>

      <InputPhase step={currentStep} phase={1}>
        <CustomInput
          invalid={!!errors.name}
          {...register(FIELD.NAME, { required: true })}
          label="Nome completo"
          errorMessage={errors.name?.message as string}
        />
        <CustomInput
          invalid={!!errors.cpf}
          {...register(FIELD.CPF, { required: true, pattern: PATTERN.CPF })}
          label="CPF"
          onChange={handleCPFChange}
          errorMessage={errors.cpf?.message as string}
          maxLength={14}
        />
        <CustomInput
          invalid={!!errors.birthDate}
          {...register(FIELD.BIRTH, { required: true, pattern: PATTERN.BIRTH })}
          label="Data de Nascimento"
          onChange={handleBirthDateChange}
          errorMessage={errors.birthDate?.message as string}
        />
      </InputPhase>
      <InputPhase step={currentStep} phase={2}>
        <CustomInput
          invalid={!!errors.phoneNumber}
          {...register(FIELD.PHONE, {
            required: true,
            pattern: PATTERN.PHONE,
          })}
          label="Número de celular"
          onChange={handlePhoneChange}
          errorMessage={errors.phoneNumber?.message as string}
        />
      </InputPhase>
    </Flex>
  );
};

export default Fields;
