import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TitleProps } from "./types";

const Title: React.FC<TitleProps> = () => {
  return (
    <Flex justifyContent="center" width="100%" mb="4">
      <Text textStyle="xl">Acessar</Text>
    </Flex>
  );
};

export default Title;
