import { login } from "@/services";
import { usePrefetch } from "@/hooks";
import toastUtils from "@/utils/toast";
import { PAGE } from "@/constants/page";
import { useRouter } from "next/navigation";
import { LoginBody } from "@/services/auth/login/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ActionProps } from "../../types";
import { QUERY } from "@/constants/query";
import { ErrorResponse } from "@/types/rest";

export const useActions = ({ getValues }: ActionProps) => {
  const { push } = useRouter();
  usePrefetch([PAGE.LOGIN, PAGE.HOME]);

  const queryClient = useQueryClient();
  const { mutateAsync, isPending, error } = useMutation<
    void,
    ErrorResponse,
    LoginBody
  >({
    mutationFn: login,
  });

  const handleRegister = () => {
    push(PAGE.LOGIN);
  };

  const onSuccess = async () => {
    queryClient.refetchQueries({ queryKey: [QUERY.USER], exact: false });
    push(PAGE.HOME);
  };

  const onError = (error: ErrorResponse) => {
    toastUtils.handleLoginFailure(error?.message);
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
    error,
  };
};
