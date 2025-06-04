import React from "react";
import { Flex } from "@chakra-ui/react";

import { PageContentProps } from "./types";

const PageContent: React.FC<PageContentProps> = ({
  children,
  ...flexProps
}) => (
  <Flex
    flex={1}
    flexDirection="column"
    w="breakpoint-xl"
    alignSelf="center"
    paddingBlock="4"
    {...flexProps}
  >
    {children}
  </Flex>
);

export default PageContent;
