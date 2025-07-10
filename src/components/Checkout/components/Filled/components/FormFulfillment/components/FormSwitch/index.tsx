import React from "react";
import { Field, Switch } from "@chakra-ui/react";
import { HiCheck, HiX } from "react-icons/hi";

import { FormSwitchProps } from "./types";
import { Controller } from "react-hook-form";

const FormSwitch: React.FC<FormSwitchProps> = ({
  control,
  formState,
  trigger,
}) => {
  return (
    <Controller
      name="isPickUp"
      control={control}
      render={({ field }) => (
        <Field.Root>
          <Switch.Root
            size="lg"
            name={field.name}
            checked={field.value}
            onCheckedChange={({ checked }) => {
              field.onChange(checked);
              trigger();
            }}
          >
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb>
                <Switch.ThumbIndicator fallback={<HiX color="black" />}>
                  <HiCheck />
                </Switch.ThumbIndicator>
              </Switch.Thumb>
            </Switch.Control>
            <Switch.Label>Irei buscar o pedido no local</Switch.Label>
          </Switch.Root>
          <Field.ErrorText>
            {formState.errors.active?.message as string}
          </Field.ErrorText>
        </Field.Root>
      )}
    />
  );
};

export default FormSwitch;
