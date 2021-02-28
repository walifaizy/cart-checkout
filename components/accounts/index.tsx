import React, { Component, useState, useContext } from 'react';
import Router, { withRouter } from 'next/router';
import { Input, Button } from '../common';
import validator from '../../utils/validator';
import styled from 'styled-components';
import { CartContext } from '../../contexts/cartContext';
import { pushToRoute } from '../../utils/pushToRoute';

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

export type TAddressInfo = {
    name: string;
    address: string;
    email: string;
    phone: string;
};

type TAddressInfoErrors = {
    name?: string;
    address?: string;
    email?: string;
    phone?: string;
};

const Accounts = () => {
    const { addressInfo, setAddressInfo } = useContext(CartContext);
    const [values, setValues] = useState(addressInfo);
    const [errors, setErrors] = useState<TAddressInfoErrors>({});

    const onInputChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: null });
    };

    const validate = () => {
        let isvalid = true;
        const newErrors = { ...errors };

        //const { values } = this.state;

        if (validator.isValidInput(values['email'], 'email')) {
            isvalid = false;
            newErrors['email'] = 'Email required';
        }
        if (validator.isValidInput(values['address'], 'alphaNum')) {
            isvalid = false;
            newErrors['address'] = 'address required';
        }

        if (validator.isValidInput(values['name'], 'text')) {
            isvalid = false;
            newErrors['name'] = 'address required';
        }

        if (validator.validUAEPhoneNumber(values.phone)) {
            isvalid = false;

            newErrors['phone'] = 'Invalid UAE number';
        }

        if (validator.isValidInput(values['phone'], 'onlyNumber')) {
            isvalid = false;
            newErrors['phone'] = 'Only numbers allowed';
        }

        setErrors(newErrors);
        return isvalid;
    };

    const pushToPayment = () => {
        if (!validate()) return;
        setAddressInfo(values);
        pushToRoute('payment');
    };
    return (
        <Site>
            <Title>User Details</Title>
            <Ctr>
                <InputFormCtr>
                    <InputFlexer>
                        <InputCtr>
                            <div className="label">{'name'}</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <Input
                                    placeholder={'name'}
                                    name="name"
                                    onChange={onInputChange}
                                    value={values.name}
                                    error={errors.name}
                                />
                            </div>
                        </InputCtr>
                        <InputCtr>
                            <div className="label">{'address'}</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <Input
                                    placeholder={'address'}
                                    name="address"
                                    onChange={onInputChange}
                                    value={values.address}
                                    error={errors.address}
                                />
                            </div>
                        </InputCtr>
                    </InputFlexer>
                    <div className="spacebetween"></div>
                    <InputFlexer>
                        <InputCtr>
                            <div className="label">{'email'}</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <Input
                                    placeholder={'email'}
                                    name="email"
                                    onChange={onInputChange}
                                    value={values.email}
                                    error={errors.email}
                                />
                            </div>
                        </InputCtr>
                        <InputCtr>
                            <div className="label">{'phone'}</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <Input
                                    placeholder={'phone'}
                                    name="phone"
                                    onChange={onInputChange}
                                    value={values.phone}
                                    error={errors.phone}
                                />
                            </div>
                        </InputCtr>
                    </InputFlexer>
                </InputFormCtr>
                <BtnCtr>
                    <Button color={`#3866df`} solid onClick={pushToPayment}>
                        <BtnText>Submit</BtnText>
                    </Button>
                </BtnCtr>
            </Ctr>{' '}
        </Site>
    );
};

export default Accounts;
