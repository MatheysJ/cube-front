import React from "react";
import { useCart } from "react-use-cart";
import { useRouter } from "next/navigation";
import { Button, Flex } from "@chakra-ui/react";
import { submitOrder } from "@/services/order";
import { useMutation } from "@tanstack/react-query";
import {
  OrderServiceProps,
  OrderServiceResponse,
} from "@/services/order/submit/types";
import toastUtils from "@/utils/toast";

import { ButtonsProps } from "./types";
import { FULFILLMENT_ERROR, getFulfillmentError } from "./utils";

const FULFILLMENT_STEP = 1;
const PAYMENT_STEP = 2;

const Buttons: React.FC<ButtonsProps> = ({ steps, form }) => {
  const { value, goToNextStep, goToPrevStep } = steps;
  const fields = Object.keys(form.getValues());
  const { push } = useRouter();
  const { items } = useCart();

  const { mutateAsync, isPending } = useMutation<
    OrderServiceResponse,
    unknown,
    OrderServiceProps
  >({
    mutationFn: submitOrder,
  });

  const onSuccess = (data: OrderServiceResponse) => push(data.invoiceUrl);
  const onError = () => toastUtils.handleOrderFailure();

  const handleNext = async () => {
    if (value === FULFILLMENT_STEP) {
      await form.trigger(fields);

      const error = getFulfillmentError(form.getValues());

      if (error === FULFILLMENT_ERROR.ADDRESS) {
        toastUtils.handleFillAddressInfo();
        return;
      }

      if (error === FULFILLMENT_ERROR.ADDRESSEE) {
        toastUtils.handleFillAddresseeInfo();
        return;
      }
    }

    if (value === PAYMENT_STEP) {
      const body = {
        ...form.getValues(),
        items: items as OrderServiceProps["items"],
      } as OrderServiceProps;

      await mutateAsync(body, { onSuccess, onError });
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
