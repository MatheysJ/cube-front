import { Breadcrumb, Flex } from "@chakra-ui/react";
import React from "react";

const OrdersBreadcrumb: React.FC = () => {
  return (
    <Flex flexDir="column" gap="4">
      <Breadcrumb.Root size="lg">
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Início</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>Pedidos</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </Flex>
  );
};

export default OrdersBreadcrumb;
