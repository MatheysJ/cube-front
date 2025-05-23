import { Step } from "./types";

export const STEP_ITEMS: Step[] = [
  { title: "Informações para login" },
  {
    title: "Informações pessoais",
  },
  {
    title: "Informações para contato",
  },
];

export enum FIELD {
  CPF = "cpfCnpj",
  NAME = "name",
  PHONE = "phone",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirmPassword",
  MAIL = "mail",
  BIRTH = "birthDate",
}
