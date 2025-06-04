import { useEffect } from "react";
import { PAGE } from "@/constants/page";
import { useCart } from "react-use-cart";
import { useUserContext } from "@/contexts";
import { useRouter } from "next/navigation";

export const useCheckout = () => {
  const { totalUniqueItems } = useCart();
  const { isLoggedIn } = useUserContext();
  const { push } = useRouter();

  const thereIsNoItemInCart = totalUniqueItems <= 0;

  useEffect(() => {
    if (!isLoggedIn) push(PAGE.LOGIN);
  }, []);

  return {
    thereIsNoItemInCart,
  };
};
