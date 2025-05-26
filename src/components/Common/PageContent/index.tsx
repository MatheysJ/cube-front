import React from "react";
import { Flex } from "@chakra-ui/react";

import { PageContentProps } from "./types";

const PageContent: React.FC<PageContentProps> = ({ children }) => (
  <Flex
    flexDirection="column"
    w="breakpoint-xl"
    alignSelf="center"
    paddingBlock="4"
  >
    {children}
  </Flex>
);

export default PageContent;
