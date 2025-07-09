import { EmptyState, VStack } from "@chakra-ui/react";
import { HiCube } from "react-icons/hi2";
import React from "react";

const EmptyOrders: React.FC = () => {
  return (
    <EmptyState.Root
      alignSelf="center"
      justifySelf="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flex={1}
    >
      <EmptyState.Content>
        <EmptyState.Indicator>
          <HiCube />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>
            Você ainda não tem nenhum pedido conosco
          </EmptyState.Title>
          <EmptyState.Description>
            Navegue pelo site e faça pedidos para vê-los aqui
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

export default EmptyOrders;
