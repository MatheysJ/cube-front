import { retryPolicy } from "./retry";

export const QUERY_CLIENT_PROPS = {
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: retryPolicy,
    },
  },
};
