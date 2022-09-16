import { createContext, useEffect, useReducer } from "react";

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
    case "OPEN_CART":
      return {
        ...state,
        openCart: !state.openCart,
      };

    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, payload),
      };

    case "DECREMENT_CART_ITEM":
      return {
        ...state,
        cartItems: decrementItem(state.cartItems, payload),
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cartItems: removeProductItem(state.cartItems, payload),
      };
    case "SET_TOTAL_PRICE":
      return {
        ...state,
        cartTotalPrice: payload,
      };

    case "SET_ITEMS_NUMBER":
      return {
        ...state,
        cartItemsNumber: payload,
      };
    default:
      throw new Error("Type not found");
  }
};

const INITIAL_STATE = {
  openCart: false,
  cartItems: [],
  cartItemsNumber: 0,
  cartTotalPrice: 0,
};

export const CartProvider = () => {
  const [{ openCart, cartItems, cartItemsNumber, cartTotalPrice }, dispatchCart] = useReducer(
    cartReducer,
    INITIAL_STATE,
  );

  const addItemToCart = (productToAdd) => {
    dispatchCart({ type: "ADD_ITEM_TO_CART", payload: productToAdd });
  };

  const decrementCartItem = (cartItemToRemove) => {
    dispatchCart({ type: "DECREMENT_CART_ITEM", payload: cartItemToRemove });
  };

  const removeProduct = (productToRemove) => {
    dispatchCart({ type: "REMOVE_PRODUCT", payload: productToRemove });
  };

  const setOpenCart = () => {
    dispatchCart({ type: "OPEN_CART" });
  };

  useEffect(() => {
    const newCartItemsNumber = cartItems.reduce((acc, item) => {
      return acc + item.quantity; 
    }, 0);

    const newCartTotal = cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);

    dispatchCart({ type: "SET_TOTAL_PRICE", payload: newCartTotal });
    dispatchCart({ type: "SET_ITEMS_NUMBER", payload: newCartItemsNumber });
  }, [cartItems]);

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
