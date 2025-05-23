import { Flex } from "@chakra-ui/react";
import { WaveBackground } from "@/components/Common";

import { RootProps } from "./types";

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <Flex flex={1} p="8" justifyContent="center" alignItems="center" m="auto">
      <Flex
        borderRadius="md"
        shadow="md"
        bg="white"
        overflow="hidden"
        position="relative"
        minH={520}
      >
        <WaveBackground />
        {children}
      </Flex>
    </Flex>
  );
};

export default Root;
