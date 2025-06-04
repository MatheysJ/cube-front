import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { Button, EmptyState, Icon, VStack } from "@chakra-ui/react";
import { usePrefetch } from "@/hooks";
import { PAGE } from "@/constants/page";
import { useRouter } from "next/navigation";

const EmptyCheckout = () => {
  usePrefetch(PAGE.HOME);
  const { push } = useRouter();

  return (
    <EmptyState.Root flex={1} alignContent="center">
      <EmptyState.Content>
        <EmptyState.Indicator>
          <Icon color="white" size="2xl">
            <HiShoppingCart />
          </Icon>
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Seu carrinho está vazio</EmptyState.Title>
          <EmptyState.Description>
            Navegue pelo site e adicione itens no carrinho para vê-los aqui
          </EmptyState.Description>
        </VStack>
        <Button
          variant="outline"
          colorPalette="gray"
          onClick={() => push(PAGE.HOME)}
        >
          Voltar para o início
        </Button>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

export default EmptyCheckout;
