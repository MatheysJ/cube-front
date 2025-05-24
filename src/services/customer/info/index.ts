import { DEFAULT_HEADERS } from "@/constants/service";

import { GetUserInfoService } from "./types";

export const getUserInfo: GetUserInfoService = async () => {
  const url = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CUSTOMER_SERVICE}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { ...DEFAULT_HEADERS },
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};
