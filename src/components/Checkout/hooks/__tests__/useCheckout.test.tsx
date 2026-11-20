import { renderHook } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { useCart } from "react-use-cart";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { PAGE } from "@/constants/page";
import { useUserContext } from "@/contexts";
import { getMockOfUserData } from "@/test/factory";
import { getMockOfRouter } from "@/test/utils/router";

import { useCheckout } from "../useCheckout";

vi.mock("next/navigation", () => ({ useRouter: vi.fn() }));
vi.mock("react-use-cart", () => ({ useCart: vi.fn() }));
vi.mock("@/contexts", () => ({ useUserContext: vi.fn() }));

const mockCart = (totalUniqueItems: number) =>
  vi.mocked(useCart).mockReturnValue({ totalUniqueItems } as ReturnType<
    typeof useCart
  >);

describe("useCheckout", () => {
  const router = getMockOfRouter();

  beforeEach(() => {
    router.push.mockClear();
    vi.mocked(useRouter).mockReturnValue(router);
    vi.mocked(useUserContext).mockReturnValue({
      user: getMockOfUserData(),
      isLoggedIn: true,
      isLoading: false,
    });
    mockCart(1);
  });

  it("should tell when the cart is empty", () => {
    mockCart(0);

    const { result } = renderHook(() => useCheckout());

    expect(result.current.thereIsNoItemInCart).toBe(true);
  });

  it("should tell when the cart has items", () => {
    const { result } = renderHook(() => useCheckout());

    expect(result.current.thereIsNoItemInCart).toBe(false);
  });

  it("should not redirect a logged in user", () => {
    renderHook(() => useCheckout());

    expect(router.push).not.toHaveBeenCalled();
  });

  it("should redirect to the login page when the user is not logged in", () => {
    vi.mocked(useUserContext).mockReturnValue({
      isLoggedIn: false,
      isLoading: false,
    });

    renderHook(() => useCheckout());

    expect(router.push).toHaveBeenCalledWith(PAGE.LOGIN);
  });

  it("should wait for the user to load before redirecting", () => {
    vi.mocked(useUserContext).mockReturnValue({
      isLoggedIn: false,
      isLoading: true,
    });

    const { rerender } = renderHook(() => useCheckout());

    expect(router.push).not.toHaveBeenCalled();

    vi.mocked(useUserContext).mockReturnValue({
      isLoggedIn: false,
      isLoading: false,
    });
    rerender();

    expect(router.push).toHaveBeenCalledWith(PAGE.LOGIN);
  });
});
