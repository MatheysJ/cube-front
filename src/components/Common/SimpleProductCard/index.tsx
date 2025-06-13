import React from "react";
import { Flex, FormatNumber, Image, Text } from "@chakra-ui/react";

import { SimpleProductCardProps } from "./types";

const SimpleProductCard: React.FC<SimpleProductCardProps> = ({
  id,
  image,
  name,
  price,
  quantity,
}) => (
  <Flex
    mb="4"
    mt="4"
    w="100%"
    borderRadius="lg"
    overflow="hidden"
    gap="4"
    shadow="sm"
    key={id}
  >
    <Image src={image} w={32} h={32} />
    <Flex flexDirection="column" p="4" justifyContent="space-between">
      <Flex flexDirection="column">
        <Text>{name}</Text>
        <Text>
          <FormatNumber value={price} style="currency" currency="BRL" />
        </Text>
      </Flex>
      <Text>
        {quantity} {quantity == 1 ? "unidade" : "unidades"}
      </Text>
    </Flex>
  </Flex>
);

export default SimpleProductCard;
