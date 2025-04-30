import React from "react";
import { Box } from "@chakra-ui/react";

import { CustomAlgoliaHits, CustomAlgoliaPagination } from "../Custom";
import { ProductCardHits } from "../Product";
import { CatalogListProps } from "./types";

const CatalogList: React.FC<CatalogListProps> = () => {
  return (
    <Box py="4" mx="auto" maxW="4/6">
      <CustomAlgoliaHits hitComponent={ProductCardHits} />
      <Box display="flex" justifyContent="center">
        <CustomAlgoliaPagination />
      </Box>
    </Box>
  );
};

export default CatalogList;
