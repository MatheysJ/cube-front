import { FIELD } from "@/components/Register/constants";

export interface RegisterService {
  (body: RegisterServiceBody): Promise<void>;
}

export interface RegisterServiceBody {
  [FIELD.NAME]: string;
  [FIELD.MAIL]: string;
  [FIELD.PHONE]: string;
  [FIELD.PASSWORD]: string;
  [FIELD.CPF]: string;
}
