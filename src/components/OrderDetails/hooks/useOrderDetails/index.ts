import { QUERY } from "@/constants/query";
import { getOrderById } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useOrderDetails = (id: string) =>
  useQuery({
    queryKey: [QUERY.ORDERS, id],
    queryFn: () => getOrderById(id),
  });
