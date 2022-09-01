import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = () => {
    const [openCart, setOpenCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const value = {
        openCart,
        setOpenCart,
        cartItems,
        setCartItems
    }

    return value;
};
