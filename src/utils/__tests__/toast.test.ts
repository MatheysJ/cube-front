import { beforeEach, describe, expect, it, vi } from "vitest";

import { toaster } from "@/components/ui/toaster";
import toastUtils from "@/utils/toast";

vi.mock("@/components/ui/toaster", () => ({
  toaster: { create: vi.fn() },
}));

describe("toastUtils", () => {
  beforeEach(() => {
    vi.mocked(toaster.create).mockClear();
  });

  it("should show the API message when the login fails", () => {
    toastUtils.handleLoginFailure("Invalid credentials");

    expect(toaster.create).toHaveBeenCalledWith({
      type: "error",
      description: "Invalid credentials",
      closable: true,
    });
  });

  it("should fall back to a default message when the login fails without one", () => {
    toastUtils.handleLoginFailure();

    expect(toaster.create).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "error",
        description: "Falha ao realizar login. Tente novamente mais tarde.",
      })
    );
  });

  it("should show a success toast when a product is added to the cart", () => {
    toastUtils.handleAddToCart();

    expect(toaster.create).toHaveBeenCalledWith({
      type: "success",
      description: "Produto adicionado ao carrinho",
      closable: true,
    });
  });

  it.each([
    ["handleOrderFailure", "Falha ao finalizar pedido. Tente novamente mais tarde."],
    ["handleLogoutFailure", "Falha ao deslogar. Tente novamente mais tarde."],
    ["handleFillAddressInfo", "Preencha as informações de endereço para continuar"],
    ["handleFillAddresseeInfo", "Informe quem deverá retirar o pedido para continuar"],
  ] as const)("should show an error toast on %s", (handler, description) => {
    toastUtils[handler]();

    expect(toaster.create).toHaveBeenCalledWith({
      type: "error",
      description,
      closable: true,
    });
  });
});
