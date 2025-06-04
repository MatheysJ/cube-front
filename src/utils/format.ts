import { FIELD } from "@/constants/field";

export const formatCPF = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

export const formatDate = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4}).*/, "$1");
};

export const formatPhone = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1 $2")
    .replace(/(\d{2})(\d)/, "$1-$2")
    .replace(/(-\d{9}).*/, "$1");
};

export const formatPostalCode = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3}).*/, "$1");
};

interface IFormatByField {
  [key: string]: (value: string) => string;
}

export const formatByField: IFormatByField = {
  [FIELD.POSTAL_CODE]: formatPostalCode,
  [FIELD.CPF]: formatCPF,
  [FIELD.BIRTH]: formatDate,
  [FIELD.PHONE]: formatPhone,
};
