import { QUERY } from "@/constants/query";
import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "@/services/order/getOrderById";

export const useOrderDetails = (id: string) => {
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: [QUERY.ORDERS],
    queryFn: () => getOrderById(id),
  });

  return {
    data,
    isLoading,
    error,
    isSuccess,
  };
};
