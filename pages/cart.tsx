import React, { useContext, useEffect } from 'react';
import CartScreen from '../components/cart/index';
import styled from 'styled-components';
import { CartContext } from '../contexts/cartContext';

const Flexer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    width: 100%;
`;

const CartPage = props => {
    const { cartInfo } = useContext(CartContext);

    return (
        <Flexer>
            <CartScreen cartInfo={cartInfo} />
        </Flexer>
    );
};

export default CartPage;
