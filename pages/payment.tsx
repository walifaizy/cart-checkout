import React from 'react';
import PaymentScreen from '../components/payment/index';
import styled from 'styled-components';

const Flexer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    width: 100%;
`;

const PaymentPage = props => {
    return (
        <Flexer>
            <PaymentScreen />
        </Flexer>
    );
};

export default PaymentPage;
