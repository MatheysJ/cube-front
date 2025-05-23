import { Flex } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";

import { RootProps } from "./types";

const Root: React.FC<RootProps> = ({ children }) => (
  <Flex
    flex={1}
    p="8"
    justifyContent="center"
    alignItems="center"
    m="auto"
    zIndex={1}
  >
    <Flex
      flexDirection="column"
      p={8}
      borderRadius="md"
      shadow="md"
      bg="gray.900"
    >
      <chakra.form>{children}</chakra.form>
    </Flex>
  </Flex>
);

export default Root;
