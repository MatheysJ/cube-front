import { DEFAULT_HEADERS } from "@/constants/service";

import { OrderService } from "./types";

export const subimitOrder: OrderService = async (body) => {
  const url = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_ORDER_SERVICE}`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      ...DEFAULT_HEADERS,
    },
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};
