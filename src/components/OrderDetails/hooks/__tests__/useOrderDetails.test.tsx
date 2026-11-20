import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { QUERY } from "@/constants/query";
import { getOrderById } from "@/services";
import { getMockOfOrder } from "@/test/factory";
import { createQueryClient, createQueryWrapper } from "@/test/utils/query";

import { useOrderDetails } from "../useOrderDetails";

vi.mock("@/services", () => ({ getOrderById: vi.fn() }));

describe("useOrderDetails", () => {
  const order = getMockOfOrder();

  beforeEach(() => {
    vi.mocked(getOrderById).mockResolvedValue(order);
  });

  it("should fetch the order by its id", async () => {
    const { result } = renderHook(() => useOrderDetails(order.id), {
      wrapper: createQueryWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(getOrderById).toHaveBeenCalledWith(order.id);
    expect(result.current.data).toEqual(order);
  });

  it("should not reuse the cached list of orders", async () => {
    const queryClient = createQueryClient();
    queryClient.setQueryData([QUERY.ORDERS], [order, getMockOfOrder()]);

    const { result } = renderHook(() => useOrderDetails(order.id), {
      wrapper: createQueryWrapper(queryClient),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(order);
  });
});
