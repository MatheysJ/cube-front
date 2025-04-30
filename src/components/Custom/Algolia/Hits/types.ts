import { Product } from "@/types/products";
import { HitsProps } from "react-instantsearch";

export interface CustomAlgoliaHitsProps {
  hitComponent: HitsProps<Product>["hitComponent"];
}
