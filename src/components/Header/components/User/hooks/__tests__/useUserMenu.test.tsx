import { act, renderHook } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { PAGE } from "@/constants/page";
import { QUERY } from "@/constants/query";
import { logout } from "@/services";
import { getMockOfErrorResponse } from "@/test/factory";
import { createQueryClient, createQueryWrapper } from "@/test/utils/query";
import { getMockOfRouter } from "@/test/utils/router";
import toastUtils from "@/utils/toast";

import { useUserMenu } from "../useUserMenu";

vi.mock("next/navigation", () => ({ useRouter: vi.fn() }));
vi.mock("@/services", () => ({ logout: vi.fn() }));
vi.mock("@/utils/toast", () => ({
  default: { handleLogoutFailure: vi.fn() },
}));

describe("useUserMenu", () => {
  const router = getMockOfRouter();

  beforeEach(() => {
    router.push.mockClear();
    vi.mocked(useRouter).mockReturnValue(router);
    vi.mocked(logout).mockResolvedValue(undefined);
  });

  it("should refetch the user after logging out", async () => {
    const queryClient = createQueryClient();
    const refetchQueries = vi.spyOn(queryClient, "refetchQueries");
    const { result } = renderHook(() => useUserMenu(), {
      wrapper: createQueryWrapper(queryClient),
    });

    await act(() => result.current.handleLogout());

    expect(logout).toHaveBeenCalled();
    expect(refetchQueries).toHaveBeenCalledWith({
      queryKey: [QUERY.USER],
      exact: false,
    });
  });

  it("should warn the user when the logout fails", async () => {
    vi.mocked(logout).mockRejectedValue(getMockOfErrorResponse());
    vi.spyOn(console, "error").mockImplementation(() => {});
    const { result } = renderHook(() => useUserMenu(), {
      wrapper: createQueryWrapper(),
    });

    await act(() => result.current.handleLogout());

    expect(toastUtils.handleLogoutFailure).toHaveBeenCalled();
  });

  it("should go to the orders page", () => {
    const { result } = renderHook(() => useUserMenu(), {
      wrapper: createQueryWrapper(),
    });

    result.current.handleRedirectToOrders();

    expect(router.push).toHaveBeenCalledWith(PAGE.ORDERS);
  });
});
