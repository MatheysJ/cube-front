import React from "react";
import { useCart } from "react-use-cart";
import { SimpleProductCard } from "@/components/Common";

import { CheckoutItemsProps } from "./types";

const CheckoutItems: React.FC<CheckoutItemsProps> = ({ currentStep }) => {
  const { items } = useCart();
  const shouldRender = currentStep == 0;

  return shouldRender
    ? items.map((item) => <SimpleProductCard {...item} />)
    : null;
};

export default CheckoutItems;
