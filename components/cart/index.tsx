import React, { useContext } from 'react';
import Router from 'next/router';
import { Button } from '../common';
import { TUserData, TRepo } from '../../_types';
import styled from 'styled-components';
import { device } from '../../styles/globalStyles';
import CartItem from '../common/items';
import { CartContext } from '../../contexts/cartContext';

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
    .crtCount {
        font-size: 14px;
        line-height: 28px;
        color: rgb(126, 133, 155);
        margin-left: 5px;
    }
`;

const EmptyState = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    .ctr {
        font-size: 2.2rem;
    }
`;

const Cart = () => {
    const { cartInfo } = useContext(CartContext);
    const count = cartInfo && cartInfo.cartCount;
    const list =
        cartInfo &&
        cartInfo.items &&
        cartInfo.items.map((item, index) => {
            return <CartItem item={item} key={index} cartCount={count} />;
        });

    const pushToAccount = () => {
        Router.push({
            pathname: '/accounts',
        });
    };

    if (!(cartInfo && cartInfo.items && cartInfo.items.length)) {
        return (
            <EmptyState>
                <div className="ctr">Cart Is Empty</div>
            </EmptyState>
        );
    }

    return (
        <Site>
            {' '}
            <CartWrapper>
                <ItemWrapper>
                    {' '}
                    <CartCount>
                        Cart <span className="crtCount">({count} items)</span>
                    </CartCount>
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
                        <Button color={`#3866df`} solid onClick={pushToAccount}>
                            <BtnText>Checkout</BtnText>
                        </Button>
                    </SummaryCtr>
                </SummaryWrapper>
            </CartWrapper>
        </Site>
    );
};

export default Cart;
