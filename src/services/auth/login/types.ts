import { FIELD } from "@/constants/field";

export interface LoginService {
  (body: LoginBody): Promise<void>;
}

export interface LoginBody {
  [FIELD.MAIL]: string;
  [FIELD.PASSWORD]: string;
}
