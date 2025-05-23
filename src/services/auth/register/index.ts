import { DEFAULT_HEADERS } from "@/constants/service";

import { RegisterService } from "./types";

export const register: RegisterService = async (body) => {
  const url = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_AUTH_SERVICE}/register`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      ...DEFAULT_HEADERS,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
};
