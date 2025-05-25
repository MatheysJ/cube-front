import { ERROR_CODE } from "@/constants/error";

export interface ErrorResponse {
  code: ERROR_CODE;
  message: string;
}
