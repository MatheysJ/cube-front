export const PATTERN = {
  PASSWORD: {
    value: /^(?=.*[a-z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,20}$/,
    message: "Deve conter números, símbolos, letras maiúsculas e minúsculas",
  },
  REPEAT_PASSWORD: {
    message: "As senhas não batem",
  },
  CPF: {
    value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    message: "Formato de CPF inválido",
  },
  MAIL: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Formato do e-mail inválido",
  },
  BIRTH: {
    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    message: "Formato inválido (DD/MM/AAAA)",
  },
  PHONE: {
    value: /^\d{2}-\d{9}$/,
    message: "Formato inválido (99-999999999)",
  },
  POSTAL_CODE: {
    value: /^\d{5}-\d{3}$/,
    message: "Formato de CEP inválido",
  },
};
