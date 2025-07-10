import { Breadcrumb, Flex } from "@chakra-ui/react";
import React from "react";
import { OrderByIdBreadcrumbProps } from "./types";

const OrderByIdBreadcrumb: React.FC<OrderByIdBreadcrumbProps> = ({ id }) => {
  return (
    <Flex flexDir="column" gap="4">
      <Breadcrumb.Root size="lg">
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Início</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/orders">Pedidos</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>#{id}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </Flex>
  );
};

export default OrderByIdBreadcrumb;
