import React from "react";

import { OrdersBreadcrumb, UserOrders } from "./components";
import { PageContent } from "../Common";

const Orders: React.FC = () => {
  return (
    <PageContent gap="8">
      <OrdersBreadcrumb />
      <UserOrders />
    </PageContent>
  );
};

export default Orders;
