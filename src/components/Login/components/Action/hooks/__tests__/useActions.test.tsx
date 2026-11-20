import { act, renderHook } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { PAGE } from "@/constants/page";
import { QUERY } from "@/constants/query";
import { login } from "@/services";
import {
  getMockOfErrorResponse,
  getMockOfLoginBody,
} from "@/test/factory";
import { createQueryClient, createQueryWrapper } from "@/test/utils/query";
import { getMockOfRouter } from "@/test/utils/router";
import toastUtils from "@/utils/toast";

import { useActions } from "../useActions";

vi.mock("next/navigation", () => ({ useRouter: vi.fn() }));
vi.mock("@/services", () => ({ login: vi.fn() }));
vi.mock("@/utils/toast", () => ({
  default: { handleLoginFailure: vi.fn() },
}));

describe("Login useActions", () => {
  const router = getMockOfRouter();
  const body = getMockOfLoginBody();

  const renderUseActions = (queryClient = createQueryClient()) =>
    renderHook(() => useActions({ getValues: () => body }), {
      wrapper: createQueryWrapper(queryClient),
    });

  beforeEach(() => {
    router.push.mockClear();
    vi.mocked(useRouter).mockReturnValue(router);
    vi.mocked(login).mockResolvedValue(undefined);
  });

  it("should log in with the form values and go to the home page", async () => {
    const queryClient = createQueryClient();
    const refetchQueries = vi.spyOn(queryClient, "refetchQueries");
    const { result } = renderUseActions(queryClient);

    await act(() => result.current.handleLogin());

    expect(vi.mocked(login).mock.calls[0][0]).toEqual(body);
    expect(refetchQueries).toHaveBeenCalledWith({
      queryKey: [QUERY.USER],
      exact: false,
    });
    expect(router.push).toHaveBeenCalledWith(PAGE.HOME);
  });

  it("should show the API error message when the login fails", async () => {
    const error = getMockOfErrorResponse();
    vi.mocked(login).mockRejectedValue(error);
    vi.spyOn(console, "error").mockImplementation(() => {});
    const { result } = renderUseActions();

    await act(() => result.current.handleLogin());

    expect(toastUtils.handleLoginFailure).toHaveBeenCalledWith(error.message);
    expect(router.push).not.toHaveBeenCalledWith(PAGE.HOME);
  });

  it("should go to the register page", () => {
    const { result } = renderUseActions();

    result.current.handleRegister();

    expect(router.push).toHaveBeenCalledWith(PAGE.REGISTER);
  });
});
