import { MAX_RETRIES } from "@/constants/error";

export const retryPolicy = (failureCount: number, error: unknown): boolean => {
  if (failureCount > MAX_RETRIES) {
    return false;
  }

  const status = (error as { status?: number } | null)?.status;

  if (typeof status !== "number") {
    return false;
  }

  return status < 399 || status > 499;
};
