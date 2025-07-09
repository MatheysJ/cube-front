import { Flex } from "@chakra-ui/react";
import { WaveBackground } from "@/components/Common";

import { RootProps } from "./types";

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <Flex
      flex={1}
      p={{ base: "8", smDown: "unset" }}
      justifyContent="center"
      alignItems="center"
      m={{ base: "auto", smDown: "unset" }}
    >
      <Flex
        borderRadius={{ base: "md", smDown: "unset" }}
        shadow="md"
        bg="white"
        overflow="hidden"
        position="relative"
        minH={{ base: 520, lgDown: 654, smDown: "100vh" }}
        flexDir={{ base: "unset", lgDown: "column" }}
      >
        <WaveBackground />
        {children}
      </Flex>
    </Flex>
  );
};

export default Root;
