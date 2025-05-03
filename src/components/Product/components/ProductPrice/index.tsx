import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { formatToBrl } from "@/utils/currency";

import { ProductPriceProps } from "./types";

export const ProductPrice: React.FC<ProductPriceProps> = ({
  sale,
  standard,
}) => {
  const hasSale = !!sale;

  return (
    <Box display="flex" gap="4">
      <Text
        as={!!hasSale ? "s" : undefined}
        textStyle="2xl"
        fontWeight="medium"
        letterSpacing="tight"
        mt="2"
      >
        {formatToBrl(standard)}
      </Text>
      {!!hasSale ? (
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {formatToBrl(sale)}
        </Text>
      ) : null}
    </Box>
  );
};

export default ProductPrice;
