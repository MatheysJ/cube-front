import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => (
  <Flex bg="background" p="4" justifyContent="center">
    <Text>Cube - em desenvolvimento - {new Date().getFullYear()}</Text>
  </Flex>
);

export default Footer;
