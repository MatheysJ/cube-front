import React from "react";
import { useCart } from "react-use-cart";
import { Highlight } from "react-instantsearch";
import { productToCartProduct } from "@/utils/mapper";
import { Button, Card, Image } from "@chakra-ui/react";

import { ProductCardProps } from "./types";
import ProductPrice from "../ProductPrice";

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { description, image, name, price } = props;
  const { addItem } = useCart();
  const cartProduct = productToCartProduct(props);
  const handleAddToCart = () => addItem(cartProduct);

  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={image} alt={name} height="xs" minW="sm" />
      <Card.Body gap="2" p="6">
        <Card.Title>
          <Highlight<ProductCardProps> attribute="name" hit={props} />
        </Card.Title>
        <Card.Description>{description}</Card.Description>

        <ProductPrice {...price} />
      </Card.Body>

      <Card.Footer gap="2" p="6" pt="0">
        <Button variant="solid" p="2">
          Comprar
        </Button>
        <Button variant="outline" p="2" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;
