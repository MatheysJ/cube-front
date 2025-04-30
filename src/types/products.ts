export interface Product {
  name: string;

  description: string;

  summary: string;

  image: string;

  price: ProductPrice;
}

export interface ProductPrice {
  sale: number;

  standard: number;
}
