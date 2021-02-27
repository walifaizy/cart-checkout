import React, { Component, useState } from 'react';
import { Input, Button } from '../common';
import { TUserData, TRepo } from '../../_types';
import validator from '../../utils/validator';
import styled from 'styled-components';
import Router, { withRouter } from 'next/router';

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

export type TUserInfo = {
    email: string;
    password: string;
};

type TUserInfoErrors = {
    email?: string;
    password?: string;
};

const Login = () => {
    const [values, setValues] = useState<TUserInfo>({ email: '', password: '' });
    const [errors, setErrors] = useState<TUserInfoErrors>({});

    const onInputChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: null });
    };

    const validate = () => {
        let isvalid = true;
        const newErrors = { ...errors };

        // const { values } = this.state;

        if (validator.isValidInput(values['email'], 'email')) {
            isvalid = false;
            newErrors['email'] = 'Email required';
        }
        if (!values['password']) {
            isvalid = false;
            newErrors['password'] = 'Pasword required';
        }

        // this.setState(prevState => ({ ...prevState, errors }));
        setErrors(newErrors);
        return isvalid;
    };

    const pushToCart = () => {
        if (!validate()) return;
        Router.push({
            pathname: '/cart',
        });
    };
    return (
        <Wrapper>
            <Title>Sign in to your account</Title>
            <LoginBox>
                {' '}
                <InputFormCtr>
                    <InputFlexer>
                        <InputCtr>
                            <div className="label">Email</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <Input
                                    placeholder={'Enter Email'}
                                    name="email"
                                    onChange={onInputChange}
                                    value={values.email}
                                    error={errors.email}
                                />
                            </div>
                        </InputCtr>
                        <InputCtr>
                            <div className="label">Password</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <Input
                                    placeholder={'Enter Password'}
                                    name="password"
                                    onChange={onInputChange}
                                    value={values.password}
                                    error={errors.password}
                                    type="password"
                                />
                            </div>
                        </InputCtr>
                    </InputFlexer>
                </InputFormCtr>
                <BtnCtr>
                    <Button color={`#3866df`} solid onClick={pushToCart}>
                        <BtnText>Submit</BtnText>
                    </Button>
                </BtnCtr>
            </LoginBox>
        </Wrapper>
    );
};

export default Login;
