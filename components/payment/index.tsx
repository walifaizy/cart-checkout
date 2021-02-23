import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import Card from 'react-credit-cards';
import { Input, Button } from '../common';
import validator from '../../utils/validator';
import styled from 'styled-components';

import 'react-credit-cards/es/styles-compiled.css';

import { formatCreditCardNumber, formatCVC, formatExpirationDate, formatFormData } from '../../utils/cardValidator';

const Site = styled.div`
    padding: 0 25px;
    margin: 20px auto;
    width: 100%;
    box-sizing: border-box;
`;

const Ctr = styled.div`
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 2px 35px 0 rgb(0 0 0 / 5%);
    border-radius: 4px;
    width: 100%;
    margin-bottom: 20px;
`;

const InputFormCtr = styled.div`
    display: flex;
    padding: 20px;
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
`;

const InputFlexer = styled.div`
    width: 100%;
`;
const Col = styled.div`
    width: 100%;
    display: flex;
    .widthSpacer {
        width: 10px;
    }
`;

const BtnCtr = styled.div`
    padding: 0 20px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const BtnText = styled.div``;

const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 25px;
    color: rgb(51, 51, 51);
    margin: 0 0 15px 0;
`;

const CartWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(198, 204, 221, 0.5);
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

class Payment extends Component {
    state = {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        issuer: '',
        focused: '',
    };

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer });
        }
    };

    handleInputFocus = e => {
        this.setState({ focus: e.target.name });
    };

    handleInputChange = ({ target }) => {
        if (target.name === 'number') {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === 'expiry') {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === 'cvc') {
            target.value = formatCVC(target.value, null, this.state.number);
        }

        this.setState({ [target.name]: target.value });
    };

    pushToPayment = () => {
        if (!this.validate()) return;
        Router.push({
            pathname: '/cart',
        });
    };

    render() {
        const { number, name, expiry, cvc, focused } = this.state;
        return (
            <Site>
                <Title>Payment Details</Title>
                <CartWrapper>
                    <ItemWrapper>
                        {' '}
                        <InputFormCtr>
                            <InputFlexer>
                                <InputCtr>
                                    <div className="label">{'credit card number'}</div>
                                    <div className="spacer"></div>
                                    <div className="eachInput">
                                        <Input
                                            placeholder="**** **** **** ****"
                                            name="number"
                                            pattern="[\d| ]{16,22}"
                                            required
                                            onChange={this.handleInputChange}
                                            value={number}
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                </InputCtr>
                                <InputCtr>
                                    <div className="label">{'name on card'}</div>
                                    <div className="spacer"></div>
                                    <div className="eachInput">
                                        <Input
                                            placeholder="name"
                                            name="name"
                                            required
                                            onChange={this.handleInputChange}
                                            value={name}
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                </InputCtr>
                            </InputFlexer>
                            <div className="spacebetween"></div>
                            <Col>
                                <InputCtr>
                                    <div className="label">{'Expiry'}</div>
                                    <div className="spacer"></div>
                                    <div className="eachInput">
                                        <Input
                                            placeholder="Expiry"
                                            type="tel"
                                            name="expiry"
                                            required
                                            onChange={this.handleInputChange}
                                            value={expiry}
                                            pattern="\d\d/\d\d"
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                </InputCtr>
                                <div className="widthSpacer"></div>
                                <InputCtr>
                                    <div className="label">{'cvc'}</div>
                                    <div className="spacer"></div>
                                    <div className="eachInput">
                                        <Input
                                            placeholder="CVC"
                                            name="cvc"
                                            required
                                            onChange={this.handleInputChange}
                                            value={cvc}
                                            pattern="\d{3,4}"
                                            type="tel"
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                </InputCtr>
                            </Col>
                        </InputFormCtr>
                        <BtnCtr>
                            <Button color={`#3866df`} solid onClick={this.pushToPayment}>
                                <BtnText>Submit</BtnText>
                            </Button>
                        </BtnCtr>
                    </ItemWrapper>
                    <SummaryWrapper>
                        <SummaryCtr>
                            <Card
                                number={number}
                                name={name}
                                expiry={expiry}
                                cvc={cvc}
                                focused={focused}
                                callback={this.handleCallback}
                            />
                        </SummaryCtr>
                    </SummaryWrapper>
                </CartWrapper>
            </Site>
        );
    }
}

export default Payment;
