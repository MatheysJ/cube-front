import React from "react";
import { formatByField } from "@/utils/format";
import { ChangeHandler } from "react-hook-form";
import { DATA_BY_FIELD } from "@/constants/field";

import { SmartInputProps } from "./types";
import CustomInput from "../CustomInput";

const SmartInput: React.FC<SmartInputProps> = ({
  register,
  formState: { errors },
  id,
  setValue,
  w,
  width,
  variant,
  disabled,
}) => {
  const fieldData = DATA_BY_FIELD[id];
  const handleChange: ChangeHandler = async (event) => {
    const formatHandler = formatByField[id];
    if (!formatHandler) return;

    setValue(id, formatHandler(event.target.value), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <CustomInput
      invalid={!!errors[id]}
      {...register(id, {
        required: disabled && fieldData.required,
        pattern: fieldData.pattern,
      })}
      type={fieldData.type}
      onChange={handleChange}
      label={fieldData.label}
      errorMessage={errors[id]?.message as string}
      w={w}
      width={width}
      variant={variant}
      disabled={disabled}
    />
  );
};

export default SmartInput;
