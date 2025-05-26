import { logout } from "@/services";
import toastUtils from "@/utils/toast";
import { QUERY } from "@/constants/query";
import { ErrorResponse } from "@/types/rest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUserMenu = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<void, ErrorResponse, null>({
    mutationFn: logout,
  });

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

  return { handleLogout, isLoading: isPending };
};
