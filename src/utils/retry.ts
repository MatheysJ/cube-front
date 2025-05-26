import { MAX_RETRIES } from "@/constants/error";

export const retryPolicy = (failureCount: number, error: any): boolean => {
  if (failureCount > MAX_RETRIES) {
    return false;
  }

  return error?.status < 399 || error?.status > 499;
};
