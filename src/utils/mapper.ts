import { CartProduct, Product } from "@/types/products";

export const productToCartProduct = (
  product: Product
): Omit<CartProduct, "quantity"> => ({
  ...product,
  price: product.price?.sale ?? product.price?.standard,
  id: product.objectID,
});
