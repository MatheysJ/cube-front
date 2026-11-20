import { CardHitsProps } from "./types";

import { ProductCard } from "../../..";

const CardHits: React.FC<CardHitsProps> = ({ hit }) => <ProductCard {...hit} />;

export default CardHits;
