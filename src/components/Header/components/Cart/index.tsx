import React from "react";
import { usePrefetch } from "@/hooks";
import { PAGE } from "@/constants/page";
import { useRouter } from "next/navigation";
import { useCart } from "react-use-cart";
import { HiOutlineTrash } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi2";
import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Icon,
  Text,
  Flex,
  EmptyState,
  VStack,
} from "@chakra-ui/react";
import { CartItem } from "./components";
import { CartProduct } from "@/types/products";

const Cart: React.FC = () => {
  /* const { push } = useRouter();
  usePrefetch(PAGE.CHECKOUT); */

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  /* TODO: Refatorar em componentes menores */

  return (
    <Drawer.Root placement="end">
      <Drawer.Trigger asChild>
        <Button size="md" p="4" variant="ghost">
          <Icon size="lg" color="white">
            <HiShoppingCart />
          </Icon>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner padding="4">
          <Drawer.Content
            rounded="md"
            height="100%"
            alignSelf="flex-end"
            mt="16"
            w={360}
            maxW="unset"
          >
            <Drawer.Header>
              <Drawer.Title>Seu carrinho</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body flexDirection="column" h="100%">
              <Flex
                flexDirection="column"
                height="100%"
                justifyContent="center"
              >
                {totalUniqueItems <= 0 ? (
                  <EmptyState.Root alignSelf="center" justifySelf="center">
                    <EmptyState.Content>
                      <EmptyState.Indicator>
                        <HiShoppingCart />
                      </EmptyState.Indicator>
                      <VStack textAlign="center">
                        <EmptyState.Title>
                          Seu carrinho está vazio
                        </EmptyState.Title>
                        <EmptyState.Description>
                          Navegue pelo site e adicione itens no carrinho para
                          vê-los aqui
                        </EmptyState.Description>
                      </VStack>
                    </EmptyState.Content>
                  </EmptyState.Root>
                ) : (
                  <>
                    <Flex flexDirection="column">
                      {items.map((item) => (
                        <CartItem {...(item as CartProduct)} />
                      ))}
                    </Flex>

                    <Text>
                      Você tem {totalUniqueItems}{" "}
                      {totalUniqueItems == 1 ? "item" : "itens"} no carrinho.
                    </Text>
                  </>
                )}
              </Flex>
            </Drawer.Body>
            <Drawer.Footer justifyContent="space-between">
              <Button variant="outline">Fazer pedido</Button>
              <Button variant="ghost" colorPalette="red" onClick={emptyCart}>
                Esvaziar
                <HiOutlineTrash />
              </Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default Cart;
