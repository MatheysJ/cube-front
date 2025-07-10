import { getOrders } from "@/services";
import { QUERY } from "@/constants/query";
import { useQuery } from "@tanstack/react-query";

export const useUserOrders = () => {
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: [QUERY.ORDERS],
    queryFn: getOrders,
  });

  return {
    data,
    isLoading,
    error,
    isSuccess,
  };
};
