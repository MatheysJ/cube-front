import { STATUS } from "@/components/Common/UserOrder/constants";
import { Item } from "react-use-cart";

export interface Order {
  id: string;
  items: Item[];
  invoiceUrl: string;
  price: number;
  status: STATUS;
}
