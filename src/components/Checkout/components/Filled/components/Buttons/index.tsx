import React from "react";
import { useCart } from "react-use-cart";
import { useRouter } from "next/navigation";
import { Button, Flex } from "@chakra-ui/react";
import { subimitOrder } from "@/services/order";
import { useMutation } from "@tanstack/react-query";
import { OrderServiceProps } from "@/services/order/submit/types";

import { ButtonsProps } from "./types";
import toastUtils from "@/utils/toast";

const Buttons: React.FC<ButtonsProps> = ({ steps, form }) => {
  const { value, goToNextStep, goToPrevStep } = steps;
  const fields = Object.keys(form.getValues());
  const { push } = useRouter();
  const { items } = useCart();

  const { mutateAsync, isPending } = useMutation<
    void,
    unknown,
    OrderServiceProps
  >({
    mutationFn: subimitOrder,
  });

  const onSuccess = (data: any) => push(data.invoiceUrl);
  const onError = () => toastUtils.handleOrderFailure();

  const handleNext = async () => {
    const body = {
      ...form.getValues(),
      items: items as OrderServiceProps["items"],
    };
    if (value == 1) {
      await form.trigger(fields);
      /* console.log("fields: ", fields);
      console.log(
        "fields validation: ",
        fields.forEach((field) => {
          console.log("field:", form.getValues(field));
          console.log("field is valid", form.getFieldState(field).invalid);
        })
      ); */
      if (!fields.some((field) => form.getFieldState(field).invalid)) return;
    }
    if (value == 2) {
      await mutateAsync(body as OrderServiceProps, { onSuccess, onError });
    }

    goToNextStep();
  };

  return (
    <Flex mt="auto" gap="4" alignSelf="flex-end">
      <Button variant="outline" disabled={value < 1} onClick={goToPrevStep}>
        Voltar
      </Button>
      <Button onClick={handleNext} loading={isPending}>
        Avançar
      </Button>
    </Flex>
  );
};

export default Buttons;
