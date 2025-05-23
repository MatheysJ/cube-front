import { FIELD } from "@/constants/field";

export interface RegisterService {
  (body: RegisterBody): Promise<void>;
}

export interface RegisterBody {
  [FIELD.NAME]: string;
  [FIELD.MAIL]: string;
  [FIELD.PHONE]: string;
  [FIELD.PASSWORD]: string;
  [FIELD.CPF]: string;
}
