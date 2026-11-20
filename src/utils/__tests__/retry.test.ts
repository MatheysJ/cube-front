import { describe, expect, it } from "vitest";

import { MAX_RETRIES } from "@/constants/error";
import { retryPolicy } from "@/utils/retry";

describe("retryPolicy", () => {
  it("should retry server errors", () => {
    expect(retryPolicy(0, { status: 500 })).toBe(true);
    expect(retryPolicy(1, { status: 503 })).toBe(true);
  });

  it("should not retry client errors", () => {
    expect(retryPolicy(0, { status: 400 })).toBe(false);
    expect(retryPolicy(0, { status: 401 })).toBe(false);
    expect(retryPolicy(0, { status: 404 })).toBe(false);
    expect(retryPolicy(0, { status: 499 })).toBe(false);
  });

  it("should stop after the maximum number of retries", () => {
    expect(retryPolicy(MAX_RETRIES, { status: 500 })).toBe(true);
    expect(retryPolicy(MAX_RETRIES + 1, { status: 500 })).toBe(false);
  });

  it("should not retry errors without a status", () => {
    expect(retryPolicy(0, new Error("network"))).toBe(false);
    expect(retryPolicy(0, null)).toBe(false);
    expect(retryPolicy(0, { status: "500" })).toBe(false);
  });
});
