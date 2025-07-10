import { DEFAULT_HEADERS } from "@/constants/service";

import { GetOrderByIdService } from "./types";

export const getOrderById: GetOrderByIdService = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_ORDER_SERVICE}/${id}`;
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
