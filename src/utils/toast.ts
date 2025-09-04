import { toaster } from "@/components/ui/toaster";

const toastUtils = {
  handleLoginFailure: (errorMessage?: string) =>
    toaster.create({
      type: "error",
      description:
        errorMessage ?? "Falha ao realizar login. Tente novamente mais tarde.",
      closable: true
      }),
  handleOrderFailure: () =>
    toaster.create({
      type: "error",
      description: "Falha ao finalizar pedido. Tente novamente mais tarde.",
      closable: true
    }),
  handleLogoutFailure: (errorMessage?: string) =>
    toaster.create({
      type: "error",
      description:
        errorMessage ?? "Falha ao deslogar. Tente novamente mais tarde.",
      closable: true
      }),
  handleAddToCart: () => 
    toaster.create({
      type: "success",
      description: "Produto adicionado ao carrinho",
      closable: true
    }),
  handleFillAddressInfo: () => 
    toaster.create({
      type: "error",
      description: "Preencha as informações de endereço para continuar",
      closable: true
    }),
    handleFillAddresseeInfo: () => 
    toaster.create({
      type: "error",
      description: "Informe quem deverá retirar o pedido para continuar",
      closable: true
    })
};

export default toastUtils;
