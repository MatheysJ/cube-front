import {
  Icon,
  Flex,
  Portal,
  Button,
  Drawer,
  CloseButton,
} from "@chakra-ui/react";
import React from "react";
import { usePrefetch } from "@/hooks";
import { PAGE } from "@/constants/page";
import { useCart } from "react-use-cart";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi2";

import { CartEmpty, CartFilled } from "./components";
import { CartProps } from "./types";

const Cart: React.FC<CartProps> = ({ hideCart }) => {
  const { push } = useRouter();
  usePrefetch(PAGE.CHECKOUT);

  const { totalUniqueItems, emptyCart } = useCart();

  const thereIsNoItemInCart = totalUniqueItems <= 0;

  return !hideCart ? (
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
                {thereIsNoItemInCart ? <CartEmpty /> : <CartFilled />}
              </Flex>
            </Drawer.Body>

            <Drawer.Footer justifyContent="space-between">
              <Button
                variant="outline"
                disabled={thereIsNoItemInCart}
                onClick={() => push(PAGE.CHECKOUT)}
              >
                Fazer pedido
              </Button>
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
  ) : null;
};

export default Cart;
