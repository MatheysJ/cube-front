import React from "react";
import { Flex } from "@chakra-ui/react";

import { ThirdPartyProps } from "./types";

const ThirdParty: React.FC<ThirdPartyProps> = () => (
  <Flex flexDirection="column" gap="3" mb="4" mt="4" alignItems="center">
    <Flex width="100%" alignItems="center"></Flex>
  </Flex>
);

export default ThirdParty;
