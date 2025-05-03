import React from "react";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";

import { ThirdPartyProps } from "./types";
import * as Styled from "./styles";

const ThirdParty: React.FC<ThirdPartyProps> = () => {
  return (
    <Flex flexDirection="column" gap="3" mt="8" alignItems="center">
      {/* <Text color="gray.400">ou entre através das platafomas</Text> */}

      <Flex width="100%" alignItems="center">
        <Styled.Line />
        <Button variant="ghost" rounded="full">
          <Icon size="lg" color="gray.300">
            <HiMiniQuestionMarkCircle />
          </Icon>
        </Button>
        <Styled.Line />
        <Button variant="ghost" rounded="full">
          <Icon size="lg" color="gray.300">
            <HiMiniQuestionMarkCircle />
          </Icon>
        </Button>
        <Styled.Line />
        <Button variant="ghost" rounded="full">
          <Icon size="lg" color="gray.300">
            <HiMiniQuestionMarkCircle />
          </Icon>
        </Button>
        <Styled.Line />
      </Flex>
    </Flex>
  );
};

export default ThirdParty;
