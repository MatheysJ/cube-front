import React from "react";
import { Flex } from "@chakra-ui/react";
import { UserOrder } from "@/components/Common";

import { useUserOrders } from "./hooks/useUserOrders";

const UserOrders: React.FC = () => {
  const { data, isLoading, isSuccess } = useUserOrders();

  return isSuccess && !isLoading ? (
    <Flex flexDirection="column" gap="8">
      {data?.map((order) => <UserOrder {...order} />)}
    </Flex>
  ) : null;
};

export default UserOrders;
