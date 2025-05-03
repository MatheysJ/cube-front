import { Button, Flex } from "@chakra-ui/react";
import React from "react";

import { ActionProps } from "./types";

const Action: React.FC<ActionProps> = () => {
  return (
    <Flex width="100%" gap="4" flexDirection="column" mt="8">
      <Button color="brand" width="100%">
        Entrar
      </Button>
      <Button variant="outline" borderRadius="xs">
        Crie uma conta
      </Button>
    </Flex>
  );
};

export default Action;
