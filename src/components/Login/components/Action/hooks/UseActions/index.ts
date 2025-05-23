import { login } from "@/services";
import { usePrefetch } from "@/hooks";
import { PAGE } from "@/constants/page";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { LoginBody } from "@/services/auth/login/types";

import { ActionProps } from "../../types";

export const useActions = ({ getValues }: ActionProps) => {
  const { push } = useRouter();
  usePrefetch([PAGE.LOGIN, PAGE.HOME]);

  const { mutateAsync, isPending } = useMutation<void, unknown, LoginBody>({
    mutationFn: login,
  });

  const handleRegister = () => {
    push(PAGE.LOGIN);
  };

  const onSuccess = () => {
    push(PAGE.HOME);
  };

  const onError = () => {
    console.warn("TODO: Implementar feedback de erro");
  };

  const handleLogin = async () => {
    const body = getValues();

    try {
      return await mutateAsync(body, { onSuccess, onError });
    } catch (e) {
      console.error("Error logging in", e);
    }
  };

  return {
    handleLogin,
    handleRegister,
    isPending,
  };
};
