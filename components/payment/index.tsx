import React, { useState, useContext } from 'react';
import Card from 'react-credit-cards';
import { Input, Button } from '../common';
import Config from '../../config';

import styled from 'styled-components';

import 'react-credit-cards/es/styles-compiled.css';

import { formatCreditCardNumber, formatCVC, formatExpirationDate } from '../../utils/cardValidator';
import { CartContext } from '../../contexts/cartContext';
import { device } from '../../styles/globalStyles';
import { pushToRoute } from '../../utils/pushToRoute';

const Site = styled.div`
    padding: 0 25px;
    margin: 20px auto;
    width: 100%;
    box-sizing: border-box;
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
    display: flex;
    .back {
        font-size: 12px;
        color: #3866df;
        cursor: pointer;
    }
`;

const CartWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(198, 204, 221, 0.5);
    @media ${device.tablet} {
        flex-direction: row;
    }
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

const Payment = () => {
    const { cartInfo } = useContext(CartContext);
    const { addressInfo } = useContext(CartContext);
    const { userInfo } = useContext(CartContext);
    const [values, setValues] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        issuer: '',
        focused: '',
    });
    const { number, name, cvc, issuer, focused, expiry } = values;
    const [loading, setLoading] = useState(false);

    const onInputChange = e => {
        if (e.target.name === 'number') {
            e.target.value = formatCreditCardNumber(e.target.value);
        } else if (e.target.name === 'expiry') {
            e.target.value = formatExpirationDate(e.target.value);
        } else if (e.target.name === 'cvc') {
            e.target.value = formatCVC(e.target.value, null, number);
        }
        setValues({ ...values, [e.target.name]: e.target.value });
        //setErrors({ ...errors, [e.target.name]: null });
    };

    const orderDetails = {
        orderId: `AE${Date.now()}`,
        paymentInfo: values,
        cartInfo,
        addressdetails: addressInfo,
        userName: userInfo.email,
    };

    const onSubmit = () => {
        const url = `${Config.baseURL}`;
        setLoading(true);
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ orderDetails: orderDetails }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(data => {
                setLoading(false);
                pushToRoute('confirm');
            })
            .catch(error => {
                console.log(error, 'error');
                setLoading(false);
            });
    };

    const pushBack = () => {
        pushToRoute('accounts');
    };

    return (
        <Site>
            <Title>
                <div onClick={pushBack} className="back">
                    {`< back`} &nbsp;
                </div>
                Payment Details
            </Title>
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
                                        onChange={onInputChange}
                                        value={number}
                                    />
                                </div>
                            </InputCtr>
                            <InputCtr>
                                <div className="label">{'name on card'}</div>
                                <div className="spacer"></div>
                                <div className="eachInput">
                                    <Input placeholder="name" name="name" onChange={onInputChange} value={name} />
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
                                        placeholder="MM/YY"
                                        type="tel"
                                        name="expiry"
                                        onChange={onInputChange}
                                        value={expiry}
                                        pattern="\d\d/\d\d"
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
                                        onChange={onInputChange}
                                        value={cvc}
                                        pattern="\d{3,4}"
                                        type="tel"
                                    />
                                </div>
                            </InputCtr>
                        </Col>
                    </InputFormCtr>
                    <BtnCtr>
                        <Button
                            color={`#3866df`}
                            solid
                            onClick={onSubmit}
                            disabled={!values.name || !values.number || !values.expiry || !values.cvc}
                        >
                            <BtnText>{loading ? 'loading...' : 'Submit'}</BtnText>
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
                            //focused={focused}
                            //callback={handleCallback}
                        />
                    </SummaryCtr>
                </SummaryWrapper>
            </CartWrapper>
        </Site>
    );
};

export default Payment;
