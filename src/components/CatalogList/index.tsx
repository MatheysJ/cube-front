import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { CustomAlgoliaHits, CustomAlgoliaPagination } from "../Custom";
import { ProductCardHits } from "../Product";

const CatalogList: React.FC = () => (
  <Flex flexDirection="column" justifyContent="space-between" py="4">
    <CustomAlgoliaHits hitComponent={ProductCardHits} />
    {/* <Box display="flex" justifyContent="center">
      <CustomAlgoliaPagination />
    </Box> */}
  </Flex>
);

export default CatalogList;
