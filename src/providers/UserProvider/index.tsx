import { useMemo } from "react";
import { getUserInfo } from "@/services";
import { QUERY } from "@/constants/query";
import { useQuery } from "@tanstack/react-query";
import { UserContext } from "@/contexts/UserContext";
import { UserData } from "@/services/customer/info/types";

import { UserProviderProps } from "./types";

const UserProvider = ({ children }: UserProviderProps) => {
  const { data, isSuccess, isLoading } = useQuery<UserData>({
    queryKey: [QUERY.USER],
    queryFn: getUserInfo,
    initialData: undefined,
  });
  const user = data;
  const isLoggedIn = isSuccess;

  const value = useMemo(() => ({ user, isLoggedIn, isLoading }), [data]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
