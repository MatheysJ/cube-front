import { toaster } from "@/components/ui/toaster";

const showToast = (type: "error" | "success", description: string) =>
  toaster.create({ type, description, closable: true });

const toastUtils = {
  handleLoginFailure: (errorMessage?: string) =>
    showToast(
      "error",
      errorMessage ?? "Falha ao realizar login. Tente novamente mais tarde."
    ),
  handleOrderFailure: () =>
    showToast(
      "error",
      "Falha ao finalizar pedido. Tente novamente mais tarde."
    ),
  handleLogoutFailure: (errorMessage?: string) =>
    showToast(
      "error",
      errorMessage ?? "Falha ao deslogar. Tente novamente mais tarde."
    ),
  handleAddToCart: () => showToast("success", "Produto adicionado ao carrinho"),
  handleFillAddressInfo: () =>
    showToast("error", "Preencha as informações de endereço para continuar"),
  handleFillAddresseeInfo: () =>
    showToast("error", "Informe quem deverá retirar o pedido para continuar"),
};

export default toastUtils;
