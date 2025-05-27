import React from "react";
import { useCart } from "react-use-cart";
import { Box, Flex, FormatNumber, Table, Text } from "@chakra-ui/react";
import { CartProduct } from "@/types/products";

import { CartItem } from "./components";

const CartFilled: React.FC = () => {
  const { totalUniqueItems, items, cartTotal } = useCart();

  return (
    <Flex height="100%" flexDirection="column" justifyContent="space-between">
      <Flex flexDirection="column">
        {items.map((item) => (
          <CartItem {...(item as CartProduct)} />
        ))}
      </Flex>

      <Flex flexDirection="column" mb="4">
        <Flex justifyContent="space-between">
          <Text>Total: </Text>
          <Text>
            <FormatNumber value={cartTotal} currency="BRL" style="currency" />
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartFilled;
