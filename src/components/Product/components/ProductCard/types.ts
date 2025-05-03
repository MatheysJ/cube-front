import { SIZE } from "@/constants/size";
import { Product } from "@/types/products";

export interface ProductCardProps extends Product {
  size: SIZE;
}
