import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { EmptyState, VStack } from "@chakra-ui/react";

const CartEmpty: React.FC = () => (
  <EmptyState.Root alignSelf="center" justifySelf="center">
    <EmptyState.Content>
      <EmptyState.Indicator>
        <HiShoppingCart />
      </EmptyState.Indicator>
      <VStack textAlign="center">
        <EmptyState.Title>Seu carrinho está vazio</EmptyState.Title>
        <EmptyState.Description>
          Navegue pelo site e adicione itens no carrinho para vê-los aqui
        </EmptyState.Description>
      </VStack>
    </EmptyState.Content>
  </EmptyState.Root>
);

export default CartEmpty;
