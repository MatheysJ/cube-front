import { getOrders } from "@/services";
import { QUERY } from "@/constants/query";
import { useQuery } from "@tanstack/react-query";

export const useUserOrders = () =>
  useQuery({
    queryKey: [QUERY.ORDERS],
    queryFn: getOrders,
  });
