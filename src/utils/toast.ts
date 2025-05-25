import { toaster } from "@/components/ui/toaster";

const toastUtils = {
  handleLoginFailure: (errorMessage?: string) =>
    toaster.create({
      type: "error",
      description:
        errorMessage ?? "Falha ao realizar login. Tente novamente mais tarde.",
    }),
};

export default toastUtils;
