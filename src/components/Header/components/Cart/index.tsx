import { PAGE } from "@/constants/page";
import { usePrefetch } from "@/hooks";
import { Button, Icon } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { HiShoppingCart } from "react-icons/hi2";

const Cart: React.FC = () => {
  const { push } = useRouter();
  usePrefetch(PAGE.CART);

  return (
    <Button onClick={() => push(PAGE.CART)} size="md" p="4" variant="ghost">
      <Icon size="lg" color="white">
        <HiShoppingCart />
      </Icon>
    </Button>
  );
};

export default Cart;
