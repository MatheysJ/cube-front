import { renderHook } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { PAGE } from "@/constants/page";
import { usePrefetch } from "@/hooks";
import { getMockOfRouter } from "@/test/utils/router";

vi.mock("next/navigation", () => ({ useRouter: vi.fn() }));

describe("usePrefetch", () => {
  const router = getMockOfRouter();

  beforeEach(() => {
    router.prefetch.mockClear();
    vi.mocked(useRouter).mockReturnValue(router);
  });

  it("should prefetch a single page", () => {
    renderHook(() => usePrefetch(PAGE.LOGIN));

    expect(router.prefetch).toHaveBeenCalledTimes(1);
    expect(router.prefetch).toHaveBeenCalledWith(PAGE.LOGIN);
  });

  it("should prefetch every page of a list", () => {
    renderHook(() => usePrefetch([PAGE.HOME, PAGE.REGISTER]));

    expect(router.prefetch.mock.calls).toEqual([[PAGE.HOME], [PAGE.REGISTER]]);
  });

  it("should not prefetch again when re-rendered with the same pages", () => {
    const { rerender } = renderHook(() =>
      usePrefetch([PAGE.HOME, PAGE.REGISTER])
    );

    rerender();

    expect(router.prefetch).toHaveBeenCalledTimes(2);
  });
});
