import { Order } from "@/types/orders";

export type GetOrderByIdService = (id: string) => Promise<Order>;
