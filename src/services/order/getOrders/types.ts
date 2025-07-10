import { Order } from "@/types/orders";

export type GetOrdersService = () => Promise<Order[]>;
