import { SIZE } from "@/constants/size";
import { CardHitsProps } from "./types";

import { ProductCard } from "../../..";

const CardHits: React.FC<CardHitsProps> = ({ hit }) => (
  <ProductCard {...hit} key={hit.name} size={SIZE.MD} />
);

export default CardHits;
