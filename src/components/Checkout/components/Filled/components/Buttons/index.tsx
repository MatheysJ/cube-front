import React from "react";
import { useCart } from "react-use-cart";
import { useRouter } from "next/navigation";
import { Button, Flex } from "@chakra-ui/react";
import { subimitOrder } from "@/services/order";
import { useMutation } from "@tanstack/react-query";
import { OrderServiceProps } from "@/services/order/submit/types";

import { ButtonsProps } from "./types";
import toastUtils from "@/utils/toast";
import { FIELD } from "@/constants/field";

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

    const isAddresseeFilled = form.getValues("address.addressee.fullName") !== "";

    if (value == 1) {
      await form.trigger(fields);
      console.log("fields: ", fields);
      
      if (!form.getValues("isPickUp")) {
        console.log("isPickUp false");
        
        console.log(form.getFieldState("address"))
        console.log(form.getValues("address"))

        const addressFieldsAreFilled = Object.values(form.getValues("address")).every((field => field !== ""))

        console.log("addressFieldsAreFilled: ", addressFieldsAreFilled)

        if (!addressFieldsAreFilled || !isAddresseeFilled) {          
          toastUtils.handleFillAddressInfo(); 
          return;
        }
      } else {
        if (!isAddresseeFilled) {
          toastUtils.handleFillAddresseeInfo(); 
          return;
        }
      }
      
      //if (!fields.some((field) => form.getFieldState(field).invalid)) return;
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
