import React, { Component } from 'react';
import { Input, Button } from '../common';
import { TUserData, TRepo } from '../../_types';
import validator from '../../utils/validator';
import styled from 'styled-components';
import cartData from '../../data/index';
import CartItem from './cartItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;

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

const Site = styled.div`
    padding: 0 25px;
    margin: 20px auto;
`;

const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 10px;
`;

const InputFormCtr = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
`;

const BtnCtr = styled.div`
    padding: 10px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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

type State = {
    user: TUserData | null;
    isLoading: boolean;
    repos: TRepo[];
    isReposLoading: boolean;
    error: string;
};

class Cart extends Component<void, State> {
    render() {
        const list =
            cartData &&
            cartData.items &&
            cartData.items.map((item, index) => {
                return <CartItem item={item} key={index} cartCount={cartData && cartData.cartCount} />;
            });
        return (
            <Site>
                {' '}
                <CartWrapper>
                    <ItemWrapper>
                        {' '}
                        <CartCount>
                            Cart <span className="crtCount">({cartData && cartData.cartCount} items)</span>
                        </CartCount>
                        {list}
                    </ItemWrapper>
                    <SummaryWrapper>Summary</SummaryWrapper>
                </CartWrapper>
            </Site>
        );
    }
}

export default Cart;
