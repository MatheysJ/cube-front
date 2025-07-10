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
    w={{ "2xl": "breakpoint-xl", base: "100%" }}
    px={{ "2xl": "unset", base: "4" }}
    alignSelf="center"
    paddingBlock="4"
    {...flexProps}
  >
    {children}
  </Flex>
);

export default PageContent;
