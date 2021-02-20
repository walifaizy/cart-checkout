import React from 'react';
import CartScreen from '../components/cart/index';
import styled from 'styled-components';

const Flexer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
`;

class CartPage extends React.PureComponent {
    render() {
        return (
            <Flexer>
                <CartScreen />
            </Flexer>
        );
    }
}

export default CartPage;
