import { PAGE } from "@/constants/page";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { HiShoppingCart } from "react-icons/hi";
import { Flex, Heading, Button, Icon } from "@chakra-ui/react";

import { Login, Register } from "./components";

const Header: React.FC = () => {
  const { prefetch } = useRouter();

  useEffect(() => {
    prefetch(PAGE.LOGIN);
    prefetch(PAGE.REGISTER);
  }, []);

  return (
    <Flex
      align="center"
      as="header"
      p="4"
      borderBottomWidth="1px"
      borderColor="gray.50/20"
      justifyContent="space-between"
    >
      <Heading size="md">Cube</Heading>
      <Flex gap="4">
        <Register />
        <Login />
        <Button size="md" p="4" variant="ghost">
          <Icon size="lg" color="white">
            <HiShoppingCart />
          </Icon>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
