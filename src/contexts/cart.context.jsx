import { createContext, useReducer, useState } from "react";

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

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  cartItems: [],
  cartItemsNumber: 0,
  cartTotalPrice: 0,
};

export const CartProvider = () => {
  const [openCart, setOpenCart] = useState(false);

  const [{ cartItems, cartItemsNumber, cartTotalPrice }, dispatchCart] = useReducer(
    cartReducer,
    INITIAL_STATE,
  );

  const updateCartItemReducer = (newCartItems) => {
    const newCartItemsNumber = newCartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    const newCartTotalPrice = newCartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);

    const payload = {
      cartItems: newCartItems,
      cartItemsNumber: newCartItemsNumber,
      cartTotalPrice: newCartTotalPrice,
    };

    dispatchCart({ type: "SET_CART_ITEMS", payload });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = updateCartItems(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const decrementCartItem = (cartItemToRemove) => {
    const newCartItems = decrementItem(cartItems, cartItemToRemove);
    updateCartItemReducer(newCartItems);
  };

  const removeProduct = (productToRemove) => {
    const newCartItems = removeProductItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const value = {
    openCart,
    setOpenCart,
    cartItems,
    addItemToCart,
    cartItemsNumber,
    decrementCartItem,
    removeProduct,
    cartTotalPrice,
  };

  return value;
};
