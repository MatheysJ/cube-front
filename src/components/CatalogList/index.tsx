import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { CustomAlgoliaHits, CustomAlgoliaPagination } from "../Custom";
import { ProductCardHits } from "../Product";
import { CatalogListProps } from "./types";

const CatalogList: React.FC<CatalogListProps> = () => (
  <Flex flexDirection="column" justifyContent="space-between" py="4">
    <CustomAlgoliaHits hitComponent={ProductCardHits} />
    {/* <Box display="flex" justifyContent="center">
      <CustomAlgoliaPagination />
    </Box> */}
  </Flex>
);

export default CatalogList;
