import React, { useContext } from 'react';
import ConfirmScreen from '../components/confirm/index';
import styled from 'styled-components';
import { CartContext } from '../contexts/cartContext';

const Flexer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    width: 100%;
`;

const ConfirmPage = props => {
    const { cartInfo } = useContext(CartContext);
    return (
        <Flexer>
            <ConfirmScreen cartInfo={cartInfo} />
        </Flexer>
    );
};

export default ConfirmPage;
