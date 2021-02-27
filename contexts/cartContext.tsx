import React, { useState } from 'react';
import cartData from '../data';

export const CartContext = React.createContext('light');

export const CartContextProvider = props => {
    const [cartInfo, setCartInfo] = useState(cartData);
    return (
        <CartContext.Provider value={{ cartInfo, setCartInfo }} setValue={setCartInfo}>
            {props.children}
        </CartContext.Provider>
    );
};
