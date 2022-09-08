import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const updateCartItems = (cartItems, productToAdd) => {
  const productExist = cartItems.find((item) => item.id === productToAdd.id);

  if (productExist) {
    return cartItems.map((item) =>
      item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item,
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementItem = (cartItems, cartItemToRemove) => {
  const productExist = cartItems.find((item) => item.id === cartItemToRemove.id);

  if (productExist.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item,
  );
};

const removeProductItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const CartProvider = () => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(updateCartItems(cartItems, productToAdd));
  };

  const decrementCartItem = (cartItemToRemove) => {
    setCartItems(decrementItem(cartItems, cartItemToRemove));
  };

  const removeProduct = (productToRemove) => {
    setCartItems(removeProductItem(cartItems, productToRemove));
  };

  useEffect(() => {
    const newCartItemsNumber = cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    const newCartTotal = cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);

    setCartTotalPrice(newCartTotal);
    setCartItemsNumber(newCartItemsNumber);
  }, [cartItems]);

  const value = {
    openCart,
    setOpenCart,
    cartItems,
    setCartItems,
    addItemToCart,
    cartItemsNumber,
    decrementCartItem,
    removeProduct,
    cartTotalPrice,
  };

  return value;
};
