import { logout } from "@/services";
import toastUtils from "@/utils/toast";
import { QUERY } from "@/constants/query";
import { ErrorResponse } from "@/types/rest";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { usePrefetch } from "@/hooks";
import { PAGE } from "@/constants/page";

export const useUserMenu = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const { mutateAsync, isPending } = useMutation<void, ErrorResponse, null>({
    mutationFn: logout,
  });
  usePrefetch(PAGE.ORDERS);

  const onError = () => {
    toastUtils.handleLogoutFailure();
  };

  const onSuccess = async () => {
    queryClient.refetchQueries({ queryKey: [QUERY.USER], exact: false });
  };

  const handleLogout = async () => {
    try {
      return await mutateAsync(null, { onSuccess, onError });
    } catch (e) {
      console.error("Error logging in", e);
    }
  };

  const handleRedirectToOrders = () => push(PAGE.ORDERS);

  return { handleLogout, handleRedirectToOrders, isLoading: isPending };
};
