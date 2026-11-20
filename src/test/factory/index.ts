import { STATUS } from "@/components/Common/UserOrder/constants";
import { FIELD } from "@/constants/field";
import { ERROR_CODE } from "@/constants/error";
import { BILLING_TYPE, OrderServiceProps } from "@/services/order/submit/types";
import { LoginBody } from "@/services/auth/login/types";
import { RegisterBody } from "@/services/auth/register/types";
import { UserData } from "@/services/customer/info/types";
import { Order } from "@/types/orders";
import { Product } from "@/types/products";
import { ErrorResponse } from "@/types/rest";

export const HOST_MOCK = "https://api.cube.test";
export const AUTH_SERVICE_MOCK = "/v1/auth";
export const CUSTOMER_SERVICE_MOCK = "/v1/customer";
export const ORDER_SERVICE_MOCK = "/v1/order";

export const getMockOfProduct = (overrides: Partial<Product> = {}): Product => ({
  name: "Cubo 3x3",
  description: "Cubo mágico 3x3 profissional",
  summary: "Cubo 3x3",
  image: "https://cdn.cube.test/3x3.png",
  price: { standard: 100, sale: 80 },
  objectID: "prod-1",
  __position: 1,
  ...overrides,
});

export const getMockOfLoginBody = (): LoginBody => ({
  [FIELD.MAIL]: "cliente@cube.test",
  [FIELD.PASSWORD]: "senha123!",
});

export const getMockOfRegisterBody = (): RegisterBody => ({
  [FIELD.NAME]: "Cliente Cube",
  [FIELD.MAIL]: "cliente@cube.test",
  [FIELD.PHONE]: "11-987654321",
  [FIELD.PASSWORD]: "senha123!",
  [FIELD.CPF]: "123.456.789-09",
  [FIELD.BIRTH]: "01/02/2000",
});

export const getMockOfUserData = (): UserData => ({
  [FIELD.NAME]: "Cliente Cube",
  [FIELD.MAIL]: "cliente@cube.test",
  [FIELD.PHONE]: "11-987654321",
});

export const getMockOfOrder = (): Order => ({
  id: "order-1",
  items: [{ id: "prod-1", price: 80, quantity: 2 }],
  invoiceUrl: "https://asaas.test/i/pay_789",
  price: 160,
  status: STATUS.PENDING,
});

export const getMockOfOrderBody = (): OrderServiceProps => ({
  address: {
    street: "Avenida Paulista",
    number: "1000",
    complement: "Apto 1",
    neighborhood: "Bela Vista",
    city: "São Paulo",
    state: "SP",
    postalCode: "01310-100",
    country: "Brasil",
    name: "Casa",
    preferred: "true",
    addressee: { fullName: "Cliente Cube" },
  },
  items: [{ id: "prod-1" }, { id: "prod-1" }],
  billingType: BILLING_TYPE.PIX,
});

export const getMockOfErrorResponse = (): ErrorResponse => ({
  code: ERROR_CODE.INVALID_CREDENTIALS,
  message: "Invalid credentials",
  status: 401,
});
