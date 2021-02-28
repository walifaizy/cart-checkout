import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import { Button, AlertBox } from '../common';
import { device } from '../../styles/globalStyles';
import styled from 'styled-components';
import Items from '../common/items';
import { CartContext } from '../../contexts/cartContext';
import { pushRoute } from '../../utils/pushroute';

const CartWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media ${device.tablet} {
        flex-direction: row;
    }
`;

const ItemWrapper = styled.div`
    flex: 0 0 65%;
    @media ${device.tablet} {
        margin: 0px auto;
    }
    min-width: 0px;
`;

const SummaryWrapper = styled.div`
    flex: 1 1 0%;
    min-width: 0px;

    @media ${device.tablet} {
        margin-left: 30px;
    }
`;

const SummaryCtr = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(198, 204, 221, 0.5);
    padding: 20px;
    margin-top: 30px;
    .title {
        font-size: 23px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .total {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(198, 204, 221, 0.5);
        padding: 0 0 15px 0;
        .amount {
            color: rgb(55, 174, 2);
            font-weight: 600;
        }
    }
`;

const Site = styled.div`
    padding: 0 25px;
    margin: 20px auto;
    width: 100%;
    box-sizing: border-box;
`;

const BtnText = styled.div``;

const CartCount = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 25px;
    color: rgb(51, 51, 51);
    margin: 0 0 10px 0;
`;

const Confirm = props => {
    const { cartInfo, setCartInfo } = useContext(CartContext);
    //const { cartInfo } = props;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const list =
        cartInfo &&
        cartInfo.items &&
        cartInfo.items.map((item, index) => {
            return <Items item={item} key={index} />;
        });

    const pushToCart = () => {
        setCartInfo({});
        pushRoute('cart');
    };

    if (!(cartInfo && cartInfo.items && cartInfo.items.length)) {
        return null;
    }

    return (
        <>
            <Site>
                {' '}
                <CartWrapper>
                    <ItemWrapper>
                        {' '}
                        <CartCount>Your Order</CartCount>
                        {list}
                    </ItemWrapper>
                    <SummaryWrapper>
                        <SummaryCtr>
                            <div className="title">Order Summary</div>
                            <div className="total">
                                <span>Total</span>
                                <span className="amount">AED {cartInfo && cartInfo.invoice.total}</span>
                            </div>
                            <br />
                        </SummaryCtr>
                    </SummaryWrapper>
                </CartWrapper>
            </Site>
            <AlertBox
                title="Your shopping cart is empty"
                isOpen={isOpen}
                onCloseAlert={() => setIsOpen(false)}
                onConfirm={() => pushToCart()}
                confirmBtnLabel="Continue Shopping"
            ></AlertBox>
        </>
    );
};

export default Confirm;
