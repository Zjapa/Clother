import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = () => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };

  return value;
};
