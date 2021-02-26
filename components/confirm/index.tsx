import React from 'react';
import Router from 'next/router';
import { Button } from '../common';
import { TUserData, TRepo } from '../../_types';
import styled from 'styled-components';
import cartData from '../../data/index';
import Items from '../common/items';

const CartWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ItemWrapper = styled.div`
    flex: 0 0 65%;
    margin: 0px auto;
    min-width: 0px;
`;

const SummaryWrapper = styled.div`
    flex: 1 1 0%;
    min-width: 0px;
    margin-left: 30px;
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
    const list =
        cartData &&
        cartData.items &&
        cartData.items.map((item, index) => {
            return <Items item={item} key={index} cartCount={cartData && cartData.cartCount} />;
        });

    const pushToAccount = () => {
        Router.push({
            pathname: '/accounts',
        });
    };

    return (
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
                            <span className="amount">AED {cartData && cartData.invoice.total}</span>
                        </div>
                        <br />
                    </SummaryCtr>
                </SummaryWrapper>
            </CartWrapper>
        </Site>
    );
};

export default Confirm;
