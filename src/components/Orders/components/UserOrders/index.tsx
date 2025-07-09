import React from "react";
import { Flex } from "@chakra-ui/react";
import { UserOrder } from "@/components/Common";

import { useUserOrders } from "./hooks/useUserOrders";
import { EmptyOrders } from "./components";

const UserOrders: React.FC = () => {
  const { data, isLoading, isSuccess } = useUserOrders();

  return isSuccess && !isLoading ? (
    <Flex flexDirection="column" gap="8" flex={1}>
      {data?.length && data?.length > 0 ? (
        data?.map((order) => <UserOrder {...order} />)
      ) : (
        <EmptyOrders />
      )}
    </Flex>
  ) : null;
};

export default UserOrders;
