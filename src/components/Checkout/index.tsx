import React from "react";

import { useCheckout } from "./hooks/useCheckout";
import { Empty, Filled } from "./components";

const Checkout: React.FC = () => {
  const { thereIsNoItemInCart } = useCheckout();

  return thereIsNoItemInCart ? <Empty /> : <Filled />;
};

export default Checkout;
