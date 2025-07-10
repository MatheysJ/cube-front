import { DEFAULT_HEADERS } from "@/constants/service";

import { GetOrdersService } from "./types";

export const getOrders: GetOrdersService = async () => {
  const url = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_ORDER_SERVICE}`;
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      ...DEFAULT_HEADERS,
    },
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
};
