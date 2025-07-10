export interface Product {
  name: string;

  description: string;

  summary: string;

  image: string;

  price: ProductPrice;

  objectID: string;

  __position: number;
}

export interface ProductPrice {
  sale: number;

  standard: number;
}

export interface CartProduct extends Omit<Product, "price"> {
  price: number;

  id: string;

  quantity: number;
}
