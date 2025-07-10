export interface OrderServiceProps {
  address: OrderServiceAddress;
  items: OrderServiceItem[];
  billingType: BILLING_TYPE;
}

interface OrderServiceAddress {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  name: string;
  preferred: string;
  addressee: AddressAddressee;
}

interface AddressAddressee {
  fullName: string;
}

interface OrderServiceItem {
  id: string;
}

export enum BILLING_TYPE {
  PIX = "PIX",
  BOLETO = "BOLETO",
}

export type OrderService = (body: OrderServiceProps) => Promise<void>;
