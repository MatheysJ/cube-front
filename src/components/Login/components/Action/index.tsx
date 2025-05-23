import React from "react";
import { Button, Flex } from "@chakra-ui/react";

import { useActions } from "./hooks/UseActions";
import { ActionProps } from "./types";

const Action: React.FC<ActionProps> = (props) => {
  const { handleLogin, handleRegister, isPending } = useActions(props);

  return (
    <Flex width="100%" gap="4" flexDirection="column" mt="8">
      <Button
        color="brand"
        width="100%"
        loading={isPending}
        onClick={handleLogin}
      >
        Entrar
      </Button>
      <Button variant="outline" borderRadius="xs" onClick={handleRegister}>
        Crie uma conta
      </Button>
    </Flex>
  );
};

export default Action;
