import React from "react";
import { Badge, Flex, FormatNumber, Link, Text } from "@chakra-ui/react";

import SimpleProductCard from "../SimpleProductCard";
import { UserOrderProps } from "./types";
import { STATUS_COLOR, STATUS_TEXT } from "./constants";

const UserOrder: React.FC<UserOrderProps> = ({
  id,
  items,
  invoiceUrl,
  price,
  status,
}) => (
  <Flex
    key={id}
    flexDirection="column"
    gap="4"
    p="4"
    shadow="md"
    borderRadius="md"
  >
    <Flex justifyContent="space-between">
      <Text fontSize="md" fontWeight="bold">
        #{id}
      </Text>

      <Badge
        colorPalette={STATUS_COLOR[status] || STATUS_COLOR.UNKNOWN}
        fontSize="md"
        fontWeight="bold"
      >
        {STATUS_TEXT[status] || STATUS_TEXT.UNKNOWN}
      </Badge>
    </Flex>
    <Flex flexDir="column">
      {(items || []).map((item) => (
        <SimpleProductCard key={item.id} {...item} />
      ))}
    </Flex>
    <Flex justifyContent="space-between">
      <Flex gap="1">
        <Text fontSize="md" fontWeight="bold">
          Total:
        </Text>
        <FormatNumber value={price} style="currency" currency="BRL" />
      </Flex>
      {invoiceUrl ? (
        <Link
          href={invoiceUrl}
          color="colorPalette.contrast"
          variant="underline"
        >
          Ir para pagamento
        </Link>
      ) : null}
    </Flex>
  </Flex>
);

export default UserOrder;
