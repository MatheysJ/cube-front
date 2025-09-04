import React from "react";
import { MdPix } from "react-icons/md";
import { Controller } from "react-hook-form";
import { HiCreditCard } from "react-icons/hi2";
import { HiDocumentText } from "react-icons/hi2";
import { Fieldset, Flex } from "@chakra-ui/react";
import { HStack, Icon, RadioCard } from "@chakra-ui/react";

import { PaymentFormProps } from "./types";

const PaymentForm: React.FC<PaymentFormProps> = ({ currentStep, form }) => {
  const shouldRender = currentStep == 2;

  const items = [
    { value: "PIX", title: "PIX", icon: <MdPix size={64} />, disabled: false },
    {
      value: "BOLETO",
      title: "Boleto",
      icon: <HiDocumentText size={64} />,
      disabled: true,
    },
    {
      value: "card",
      title: "Card",
      icon: <HiCreditCard size={64} />,
      disabled: true,
    },
  ];

  return shouldRender ? (
    <Flex gap="4" w="100%" mt="4">
      <Controller
        name="billingType"
        control={form.control}
        render={({ field }) => (
          <RadioCard.Root
            orientation="vertical"
            align="center"
            w="100%"
            onValueChange={({ value }) => {
              console.log("field change: ", value);
              field.onChange(value);
            }}
          >
            <RadioCard.Label visibility="hidden" fontSize="2xl" mb="4">
              Selecione uma forma de pagamento
            </RadioCard.Label>
            <HStack gap="8">
              {items.map((item) => (
                <RadioCard.Item
                  key={item.value}
                  value={item.value}
                  w="48"
                  h="48"
                  justifyContent="center"
                  alignItems="center"
                  cursor={item.disabled ? "disabled" : "pointer"}
                  disabled={item.disabled}
                >
                  <RadioCard.ItemHiddenInput onBlur={field.onBlur} />
                  <RadioCard.ItemControl
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Flex
                      alignSelf="center"
                      flexDir="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="4"
                    >
                      <Icon fontSize="2xl" color="fg.muted">
                        {item.icon}
                      </Icon>
                      <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                    </Flex>
                  </RadioCard.ItemControl>
                </RadioCard.Item>
              ))}
            </HStack>
          </RadioCard.Root>
        )}
      />
      {form.formState.errors.value && (
        <Fieldset.ErrorText>
          {form.formState.errors.value?.message as string}
        </Fieldset.ErrorText>
      )}
    </Flex>
  ) : null;
};

export default PaymentForm;
