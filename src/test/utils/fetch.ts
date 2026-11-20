import { vi } from "vitest";

import {
  AUTH_SERVICE_MOCK,
  CUSTOMER_SERVICE_MOCK,
  HOST_MOCK,
  ORDER_SERVICE_MOCK,
} from "@/test/factory";

export const stubServiceEnv = () => {
  vi.stubEnv("NEXT_PUBLIC_HOST", HOST_MOCK);
  vi.stubEnv("NEXT_PUBLIC_AUTH_SERVICE", AUTH_SERVICE_MOCK);
  vi.stubEnv("NEXT_PUBLIC_CUSTOMER_SERVICE", CUSTOMER_SERVICE_MOCK);
  vi.stubEnv("NEXT_PUBLIC_ORDER_SERVICE", ORDER_SERVICE_MOCK);
};

export const mockFetch = (body: unknown, status = 200) => {
  const text = typeof body === "string" ? body : JSON.stringify(body);
  const fetchMock = vi.fn().mockResolvedValue(new Response(text, { status }));

  vi.stubGlobal("fetch", fetchMock);

  return fetchMock;
};

export const getFetchCall = (fetchMock: ReturnType<typeof vi.fn>) => {
  const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];

  return { url, init };
};
