import { act, renderHook } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { STEP_ITEMS } from "@/components/Register/constants";
import { FIELD } from "@/constants/field";
import { PAGE } from "@/constants/page";
import { register } from "@/services";
import { getMockOfRegisterBody } from "@/test/factory";
import { createQueryWrapper } from "@/test/utils/query";
import { getMockOfRouter } from "@/test/utils/router";

import { ActionProps } from "../../types";
import { useActions } from "../useActions";

vi.mock("next/navigation", () => ({ useRouter: vi.fn() }));
vi.mock("@/services", () => ({ register: vi.fn() }));

const LAST_STEP = STEP_ITEMS.length - 1;

const getMockOfActionProps = (
  overrides: Partial<ActionProps> = {}
): ActionProps =>
  ({
    currentStep: 0,
    stepItems: STEP_ITEMS,
    getValues: vi.fn(() => getMockOfRegisterBody()),
    getFieldState: vi.fn(() => ({ invalid: false })),
    trigger: vi.fn(async () => true),
    goToNextStep: vi.fn(),
    goToPrevStep: vi.fn(),
    ...overrides,
  }) as unknown as ActionProps;

const renderUseActions = (props: ActionProps) =>
  renderHook(() => useActions(props), { wrapper: createQueryWrapper() });

describe("Register useActions", () => {
  const router = getMockOfRouter();

  beforeEach(() => {
    router.push.mockClear();
    vi.mocked(useRouter).mockReturnValue(router);
    vi.mocked(register).mockResolvedValue(undefined);
  });

  it("should label the button according to the step", () => {
    const first = renderUseActions(getMockOfActionProps());
    const last = renderUseActions(
      getMockOfActionProps({ currentStep: LAST_STEP })
    );

    expect(first.result.current.nextText).toBe("Próximo");
    expect(last.result.current.nextText).toBe("Finalizar");
  });

  it("should validate the login fields before going to the next step", async () => {
    const props = getMockOfActionProps();
    const { result } = renderUseActions(props);

    await act(() => result.current.handleNext());

    expect(props.trigger).toHaveBeenCalledWith([
      FIELD.MAIL,
      FIELD.PASSWORD,
      FIELD.CONFIRM_PASSWORD,
    ]);
    expect(props.goToNextStep).toHaveBeenCalled();
  });

  it("should stay on the step when a field is invalid", async () => {
    const props = getMockOfActionProps({
      getFieldState: vi.fn(() => ({ invalid: true })) as never,
    });
    const { result } = renderUseActions(props);

    await act(() => result.current.handleNext());

    expect(props.goToNextStep).not.toHaveBeenCalled();
  });

  it("should send the account without masks on the last step", async () => {
    const props = getMockOfActionProps({ currentStep: LAST_STEP });
    const { result } = renderUseActions(props);

    await act(() => result.current.handleNext());

    expect(vi.mocked(register).mock.calls[0][0]).toEqual({
      ...getMockOfRegisterBody(),
      [FIELD.PHONE]: "11987654321",
      [FIELD.CPF]: "12345678909",
    });
    expect(router.push).toHaveBeenCalledWith(PAGE.LOGIN);
  });

  it("should not leave the page when the account creation fails", async () => {
    vi.mocked(register).mockRejectedValue(new Error("Mail already in use"));
    vi.spyOn(console, "error").mockImplementation(() => {});
    const props = getMockOfActionProps({ currentStep: LAST_STEP });
    const { result } = renderUseActions(props);

    await act(() => result.current.handleNext());

    expect(router.push).not.toHaveBeenCalledWith(PAGE.LOGIN);
    expect(props.goToNextStep).not.toHaveBeenCalled();
  });

  it("should go back to the previous step", () => {
    const props = getMockOfActionProps({ currentStep: 1 });
    const { result } = renderUseActions(props);

    result.current.handleBack();

    expect(props.goToPrevStep).toHaveBeenCalled();
  });
});
