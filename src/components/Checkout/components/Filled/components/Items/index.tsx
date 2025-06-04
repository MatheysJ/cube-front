import React from "react";
import { useCart } from "react-use-cart";
import { Flex, FormatNumber, Image, Text } from "@chakra-ui/react";

import { CheckoutItemsProps } from "./types";

const CheckoutItems: React.FC<CheckoutItemsProps> = ({ currentStep }) => {
  const { items } = useCart();
  const shouldRender = currentStep == 0;

  return shouldRender
    ? items.map(({ name, image, price, quantity }) => (
        <Flex
          mb="4"
          mt="4"
          w="100%"
          borderRadius="lg"
          overflow="hidden"
          gap="4"
          shadow="sm"
        >
          <Image src={image} w={32} h={32} />
          <Flex flexDirection="column" p="4" justifyContent="space-between">
            <Flex flexDirection="column">
              <Text>{name}</Text>
              <Text>
                <FormatNumber value={price} style="currency" currency="BRL" />
              </Text>
            </Flex>
            <Text>
              {quantity} {quantity == 1 ? "unidade" : "unidades"}
            </Text>
          </Flex>
        </Flex>
      ))
    : null;
};

export default CheckoutItems;
