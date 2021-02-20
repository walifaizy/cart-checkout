import React, { Component } from 'react';
import { Input, Button } from '../common';
import { TUserData, TRepo } from '../../_types';
import validator from '../../utils/validator';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;

const LoginBox = styled.div`
    background: #fff;
    padding: 25px;
    box-sizing: border-box;
    width: 50%;
    margin: 10px 0;
    border: 1px solid #e2e5f1;
    box-shadow: 0 2px 35px 0 rgb(0 0 0 / 5%);
    border-radius: 5px;
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

const InputCtr = styled.div`
    padding: 10px 0;
    width: 100%;
    .eachInput {
        width: 100%;
        .flexBtn {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
        }
    }
    .spacer {
        height: 8px;
    }
    .label {
        flex: 1;
        font-weight: 500;
        line-height: 1.5;
        font-size: 0.9rem;
        color: rgb(136, 136, 136);
    }

    &.desktopLocationCtr {
        display: none;
    }
`;

const InputFlexer = styled.div`
    width: 100%;
`;

const BtnCtr = styled.div`
    padding: 10px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const BtnText = styled.div``;

type State = {
    user: TUserData | null;
    isLoading: boolean;
    repos: TRepo[];
    isReposLoading: boolean;
    error: string;
};

class Cart extends Component<void, State> {
    state: State = {
        values: {},
        errors: {},
    };

    render() {
        return <Wrapper>CART</Wrapper>;
    }
}

export default Cart;
