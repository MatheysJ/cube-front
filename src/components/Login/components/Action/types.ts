import { LoginBody } from "@/services/auth/login/types";

export interface ActionProps {
  getValues: () => LoginBody;
}
