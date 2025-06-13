import React from "react";

import { OrdersBreadcrumb, UserOrders } from "./components";
import { PageContent } from "../Common";
import { OrdersProps } from "./types";

const Orders: React.FC<OrdersProps> = () => {
  return (
    <PageContent gap="8">
      <OrdersBreadcrumb />
      <UserOrders />
    </PageContent>
  );
};

export default Orders;
