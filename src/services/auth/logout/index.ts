import { DEFAULT_HEADERS } from "@/constants/service";

import { LogoutService } from "./types";

export const logout: LogoutService = async () => {
  const url = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_AUTH_SERVICE}/logout`;
  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: { ...DEFAULT_HEADERS },
  });

  if (!response.ok) {
    const error = await response.json();

    throw error;
  }

  return response?.status !== 204 ? response?.json() : response;
};
