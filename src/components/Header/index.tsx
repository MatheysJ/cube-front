import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

import { Cart, Login, Register } from "./components";

const Header: React.FC = () => (
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
      <Cart />
    </Flex>
  </Flex>
);

export default Header;
