import { createContext, useContext } from "react";
import { UserContextReturn } from "./types";

export const UserContext = createContext<UserContextReturn>({});

const useUserContext = (): UserContextReturn => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be called within a UserContext");
  }

  return context;
};

export default useUserContext;
