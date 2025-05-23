import { useMemo } from "react";
import { UserContext } from "@/contexts/UserContext";

import { UserProviderProps } from "./types";

const UserProvider = ({ children }: UserProviderProps) => {
  const value = useMemo(() => ({}), []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
