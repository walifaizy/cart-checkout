import React, { useState } from 'react';
import cartData, { TCartData } from '../data';
import { TAddressInfo } from '../components/accounts';
import { TUserInfo } from '../components/login';

type TPaymentInfo = {
    number: string;
    cvc: string;
    name: string;
    expiry: string;
};

type TCartContext = {
    cartInfo: TCartData;
    userInfo: TUserInfo;
    paymentInfo: TPaymentInfo;
    addressInfo: TAddressInfo;
    setCartInfo: (value: TCartData) => void;
    setUserInfo: (value: TUserInfo) => void;
    setPaymentInfo: (value: TPaymentInfo) => void;
    setAddressInfo: (value: TAddressInfo) => void;
};

const initialContextValue: TCartContext = {
    cartInfo: cartData,
    userInfo: { email: '', password: '' },
    paymentInfo: { number: '', cvc: '', name: '', expiry: '' },
    addressInfo: { name: '', address: '', email: '', phone: '' },
    setCartInfo: (value: TCartData) => undefined,
    setUserInfo: (value: TUserInfo) => undefined,
    setPaymentInfo: (value: TPaymentInfo) => undefined,
    setAddressInfo: (value: TAddressInfo) => undefined,
};

export const CartContext = React.createContext(initialContextValue);

export const CartContextProvider = props => {
    const [cartInfo, setCartInfo] = useState(initialContextValue.cartInfo);
    const [userInfo, setUserInfo] = useState(initialContextValue.userInfo);
    const [paymentInfo, setPaymentInfo] = useState(initialContextValue.paymentInfo);
    const [addressInfo, setAddressInfo] = useState(initialContextValue.addressInfo);
    return (
        <CartContext.Provider
            value={{
                cartInfo,
                setCartInfo,
                userInfo,
                setUserInfo,
                paymentInfo,
                setPaymentInfo,
                addressInfo,
                setAddressInfo,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
