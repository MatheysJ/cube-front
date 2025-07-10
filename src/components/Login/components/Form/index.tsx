import React from "react";
import { Flex } from "@chakra-ui/react";
import { FIELD } from "@/constants/field";
import CustomInput from "@/components/Common/CustomInput";

import { FormProps } from "./types";

const Form: React.FC<FormProps> = ({ register, formState: { errors } }) => (
  <Flex flexDirection="column" w={360} gap="4">
    <CustomInput
      label="E-Mail"
      invalid={!!errors[FIELD.MAIL]}
      {...register(FIELD.MAIL, { required: true })}
      errorMessage={errors[FIELD.MAIL]?.message as string}
    />
    <CustomInput
      label="Senha"
      type="password"
      invalid={!!errors[FIELD.PASSWORD]}
      {...register(FIELD.PASSWORD, { required: true })}
      errorMessage={errors[FIELD.PASSWORD]?.message as string}
    />
  </Flex>
);

export default Form;
