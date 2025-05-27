import { CartProduct } from "@/types/products";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const CartItem: React.FC<CartProduct> = ({ name }) => {
  return (
    <Flex border="1px solid red">
      <Text>{name}</Text>
    </Flex>
  );
};

export default CartItem;
