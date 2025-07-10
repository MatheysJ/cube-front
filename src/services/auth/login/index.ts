import { DEFAULT_HEADERS } from "@/constants/service";

import { LoginService } from "./types";

export const login: LoginService = async (body) => {
  const url = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_AUTH_SERVICE}/login`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    credentials: "include",
    headers: { ...DEFAULT_HEADERS },
  });

  if (!response.ok) {
    const error = await response.json();

    throw error;
  }

  return response.json();
};
