import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Flex, Heading, Button, Icon } from "@chakra-ui/react";

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
      <Button size="md" p="4">
        Cadastrar-se
      </Button>
      <Button variant="outline" size="md" p="4">
        Entrar
      </Button>
      <Button size="md" p="4" variant="ghost">
        <Icon size="lg" color="white">
          <HiShoppingCart />
        </Icon>
      </Button>
    </Flex>
  </Flex>
);

export default Header;
