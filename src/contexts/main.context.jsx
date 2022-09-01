import { createContext } from 'react';
import { ProductProvider } from './prod.context';
import { UserProvider } from './user.context';
import { CartProvider } from './cart.context';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
    const mainValue = {
        UserContext: UserProvider(),
        ProductContext: ProductProvider(),
        CartContext: CartProvider(),
    };

    return <MainContext.Provider value={mainValue}>{children}</MainContext.Provider>;
};
