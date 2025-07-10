import { UserData } from "@/services/customer/info/types";

export interface UserContextReturn {
  user?: UserData | undefined;
  isLoggedIn?: boolean;
  isLoading?: boolean;
}
