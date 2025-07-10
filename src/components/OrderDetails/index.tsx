import React from "react";

import { useOrderDetails } from "./hooks/useOrderDetails";
import { OrderByIdBreadcrumb } from "./components";
import { PageContent, UserOrder } from "../Common";
import { OrderDetailsProps } from "./types";

const OrderDetails: React.FC<OrderDetailsProps> = ({ id }) => {
  const { data } = useOrderDetails(id);

  return (
    <PageContent gap="8">
      <OrderByIdBreadcrumb id={id} />
      {data && id ? <UserOrder {...data} /> : null}
    </PageContent>
  );
};

export default OrderDetails;
