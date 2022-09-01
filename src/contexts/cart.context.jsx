import { createContext, useState } from "react";

export const CartContext = createContext();

const updateCartItems = (cartItems, productToAdd) => {
  const productExist = cartItems.find((item) => item.id === productToAdd.id);

  if (productExist) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = () => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(updateCartItems(cartItems, productToAdd));
  };

  const value = {
    openCart,
    setOpenCart,
    cartItems,
    setCartItems,
    addItemToCart,
  };

  return value;
};
