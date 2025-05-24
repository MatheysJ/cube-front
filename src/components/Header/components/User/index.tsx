import React from "react";
import { useUserContext } from "@/contexts";
import { Flex, Text } from "@chakra-ui/react";

const User: React.FC = () => {
  const { user } = useUserContext();

  return user ? (
    <Flex alignItems="center">
      <Text>Bem vindo, {user.name}</Text>
    </Flex>
  ) : null;
};

export default User;
