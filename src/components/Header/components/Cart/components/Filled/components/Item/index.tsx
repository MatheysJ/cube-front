import { useCart } from "react-use-cart";
import { CartProduct } from "@/types/products";
import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";
import { CloseButton, Flex, IconButton, Text } from "@chakra-ui/react";

import React from "react";

const CartItem: React.FC<CartProduct> = ({ name, quantity, id }) => {
  const { updateItemQuantity, removeItem } = useCart();

  /* TODO: Melhorar acessibilidade */

  return (
    <Flex
      borderBottom="1px solid"
      borderColor="gray.500"
      gap="4"
      p="2"
      pb="0.5"
      width="100%"
      alignItems="center"
    >
      <Flex alignItems="center" gap="2">
        <IconButton
          size="xs"
          variant="ghost"
          rounded="full"
          aria-label={`Diminuir quantidade do produto "${name}" em 1`}
          onClick={() => updateItemQuantity(id, quantity - 1)}
        >
          <HiMiniMinus />
        </IconButton>
        <Text color="gray.300">{quantity}</Text>
        <IconButton
          size="xs"
          variant="ghost"
          rounded="full"
          aria-label={`Aumentar quantidade do produto "${name}" em 1`}
          onClick={() => updateItemQuantity(id, quantity + 1)}
        >
          <HiMiniPlus />
        </IconButton>
      </Flex>
      <Text textStyle="md" color="gray.200" truncate>
        {name}
      </Text>
      <CloseButton
        size="xs"
        variant="ghost"
        rounded="full"
        alignSelf="flex-end"
        ml="auto"
        colorPalette="red"
        aria-label={`Remover "${name}" do carrinho`}
        onClick={() => removeItem(id)}
      />
    </Flex>
  );
};

export default CartItem;
