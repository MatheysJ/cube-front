import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

import { Cart, Login, Register, User } from "./components";

const Header: React.FC = () => (
  <Flex
    align="center"
    as="header"
    p="4"
    borderBottomWidth="1px"
    borderColor="gray.50/20"
    justifyContent="center"
  >
    <Flex justifyContent="space-between" alignItems="center" w="breakpoint-xl">
      <Heading size="md">Cube</Heading>
      <Flex gap="4" height="100%">
        <User />
        <Register />
        <Login />
        <Cart />
      </Flex>
    </Flex>
  </Flex>
);

export default Header;
