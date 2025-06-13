import { useEffect } from "react";
import { PAGE } from "@/constants/page";
import { useCart } from "react-use-cart";
import { useUserContext } from "@/contexts";
import { useRouter } from "next/navigation";

export const useCheckout = () => {
  const { isLoggedIn, isLoading } = useUserContext();
  const { totalUniqueItems } = useCart();
  const { push } = useRouter();

  const thereIsNoItemInCart = totalUniqueItems <= 0;

  useEffect(() => {
    if (!isLoggedIn && !isLoading) push(PAGE.LOGIN);
  }, [isLoggedIn]);

  return {
    thereIsNoItemInCart,
  };
};
