import { FIELD } from "@/constants/field";

export interface GetUserInfoService {
  (): Promise<UserData>;
}

export interface UserData {
  [FIELD.NAME]: string;
  [FIELD.MAIL]: string;
  [FIELD.PHONE]: string;
}
