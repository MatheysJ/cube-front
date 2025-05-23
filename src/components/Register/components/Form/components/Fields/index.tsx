import React from "react";
import { Flex } from "@chakra-ui/react";
import { FIELD } from "@/constants/field";
import { PATTERN } from "@/constants/pattern";
import { ChangeHandler } from "react-hook-form";
import CustomInput from "@/components/Common/CustomInput";
import { formatCPF, formatDate, formatPhone } from "@/utils/format";

import { InputPhase } from "./components";
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
          invalid={!!errors[FIELD.MAIL]}
          {...register(FIELD.MAIL, { required: true, pattern: PATTERN.MAIL })}
          label="E-Mail"
          errorMessage={errors[FIELD.MAIL]?.message as string}
        />
        <CustomInput
          invalid={!!errors[FIELD.PASSWORD]}
          {...register(FIELD.PASSWORD, {
            required: true,
            pattern: PATTERN.PASSWORD,
          })}
          label="Senha"
          errorMessage={errors.password?.message as string}
        />
        <CustomInput
          invalid={!!errors[FIELD.CONFIRM_PASSWORD]}
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
          invalid={!!errors[FIELD.NAME]}
          {...register(FIELD.NAME, { required: true })}
          label="Nome completo"
          errorMessage={errors[FIELD.NAME]?.message as string}
        />
        <CustomInput
          invalid={!!errors[FIELD.CPF]}
          {...register(FIELD.CPF, { required: true, pattern: PATTERN.CPF })}
          label="CPF"
          onChange={handleCPFChange}
          errorMessage={errors[FIELD.CPF]?.message as string}
          maxLength={14}
        />
        <CustomInput
          invalid={!!errors[FIELD.BIRTH]}
          {...register(FIELD.BIRTH, { required: true, pattern: PATTERN.BIRTH })}
          label="Data de Nascimento"
          onChange={handleBirthDateChange}
          errorMessage={errors[FIELD.BIRTH]?.message as string}
        />
      </InputPhase>
      <InputPhase step={currentStep} phase={2}>
        <CustomInput
          invalid={!!errors[FIELD.PHONE]}
          {...register(FIELD.PHONE, {
            required: true,
            pattern: PATTERN.PHONE,
          })}
          label="Número de celular"
          onChange={handlePhoneChange}
          errorMessage={errors[FIELD.PHONE]?.message as string}
        />
      </InputPhase>
    </Flex>
  );
};

export default Fields;
