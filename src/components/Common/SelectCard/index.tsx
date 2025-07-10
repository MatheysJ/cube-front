import React from "react";
import { SelectCardProps } from "./types";
import { Flex, Text, Icon as ChakraIcon } from "@chakra-ui/react";

const SelectCard: React.FC<SelectCardProps> = ({ text, Icon, disabled }) => (
  <Flex
    w="48"
    h="48"
    as="button"
    borderRadius="lg"
    _hover={{ shadow: "md" }}
    alignItems="center"
    cursor={disabled ? "disabled" : "pointer"}
    transition="shadow 2.0s ease-in-out"
    p="2"
    flexDir="column"
    border="1px solid background"
  >
    <ChakraIcon>
      <Icon size={128} />
    </ChakraIcon>
    <Text
      mt="auto"
      color="colorPalette.contrast"
      fontSize="lg"
      fontFamily="heading"
    >
      {text}
    </Text>
  </Flex>
);

export default SelectCard;
