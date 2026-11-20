import React from "react";
import { Flex } from "@chakra-ui/react";

import { CustomAlgoliaHits } from "../Custom";
import { ProductCardHits } from "../Product";

const CatalogList: React.FC = () => (
  <Flex flexDirection="column" justifyContent="space-between" py="4">
    <CustomAlgoliaHits hitComponent={ProductCardHits} />
  </Flex>
);

export default CatalogList;
