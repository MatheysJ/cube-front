import { describe, expect, it } from "vitest";

import { getMockOfProduct } from "@/test/factory";
import { productToCartProduct } from "@/utils/mapper";

describe("productToCartProduct", () => {
  it("should use the sale price when the product is on sale", () => {
    const cartProduct = productToCartProduct(getMockOfProduct());

    expect(cartProduct.price).toBe(80);
  });

  it("should use the standard price when there is no sale", () => {
    const product = getMockOfProduct({
      price: { standard: 100 } as ReturnType<typeof getMockOfProduct>["price"],
    });

    expect(productToCartProduct(product).price).toBe(100);
  });

  it("should use the Algolia objectID as the cart id", () => {
    const cartProduct = productToCartProduct(getMockOfProduct({ objectID: "abc" }));

    expect(cartProduct.id).toBe("abc");
  });

  it("should keep the product details", () => {
    const product = getMockOfProduct();
    const cartProduct = productToCartProduct(product);

    expect(cartProduct.name).toBe(product.name);
    expect(cartProduct.image).toBe(product.image);
    expect(cartProduct.summary).toBe(product.summary);
    expect(cartProduct).not.toHaveProperty("quantity");
  });
});
