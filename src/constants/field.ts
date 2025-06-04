import { PATTERN } from "./pattern";

export enum FIELD {
  CPF = "cpfCnpj",
  NAME = "name",
  PHONE = "phone",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirmPassword",
  MAIL = "mail",
  BIRTH = "birthDate",
  POSTAL_CODE = "postalCode",
  STREET = "street",
  HOUSE_NUMBER = "number",
  COMPLEMENT = "complement",
  NEIGHBORHOOD = "neighborhood",
  CITY = "city",
  STATE = "state",
  COUNTRY = "country",
  ADDRESSEE = "addressee",
}

interface Pattern {
  value: RegExp;
  message: string;
}

interface FieldValidationRule {
  required: boolean;
  pattern?: Pattern;
  type?: "default" | "password";
  label: string;
}

type FieldKey = keyof typeof FIELD;

export const DATA_BY_FIELD: Record<
  (typeof FIELD)[FieldKey],
  FieldValidationRule
> = {
  [FIELD.CPF]: {
    required: true,
    pattern: PATTERN.CPF,
    label: "CPF",
  },
  [FIELD.NAME]: {
    required: true,
    label: "Nome completo",
  },
  [FIELD.PHONE]: {
    required: true,
    pattern: PATTERN.PHONE,
    label: "Número de celular",
  },
  [FIELD.PASSWORD]: {
    required: true,
    type: "password",
    label: "Senha",
  },
  [FIELD.CONFIRM_PASSWORD]: {
    required: true,
    type: "password",
    label: "Repetir senha",
  },
  [FIELD.MAIL]: {
    required: true,
    pattern: PATTERN.MAIL,
    label: "E-Mail",
  },
  [FIELD.BIRTH]: {
    required: true,
    pattern: PATTERN.BIRTH,
    label: "Data de Nascimento",
  },
  [FIELD.POSTAL_CODE]: {
    required: true,
    pattern: PATTERN.POSTAL_CODE,
    label: "CEP",
  },
  [FIELD.STREET]: {
    required: true,
    label: "Rua",
  },
  [FIELD.HOUSE_NUMBER]: {
    required: true,
    label: "Número",
  },
  [FIELD.COMPLEMENT]: {
    required: true,
    label: "Complemento",
  },
  [FIELD.NEIGHBORHOOD]: {
    required: true,
    label: "Bairro",
  },
  [FIELD.CITY]: {
    required: true,
    label: "Cidade",
  },
  [FIELD.STATE]: {
    required: true,
    label: "Estado",
  },
  [FIELD.COUNTRY]: {
    required: true,
    label: "País",
  },
  [FIELD.ADDRESSEE]: {
    required: true,
    label: "Quem vai receber ou retirar?",
  },
};
