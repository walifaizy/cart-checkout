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

class Login extends Component<void, State> {
    state: State = {
        values: {},
        errors: {},
    };

    onInputChange = e => {
        const values = { ...this.state.values };
        const errors = { ...this.state.errors };
        errors[e.target.name] = null;
        // values[e.target.name] = e.target.value;
        values[e.target.name] = e.target.value;
        this.setState({
            values,
            errors,
        });
    };

    validate = () => {
        let isvalid = true;
        const errors = { ...this.state.errors };

        const { values } = this.state;

        if (validator.isValidInput(values['email'], 'email')) {
            isvalid = false;
            errors['email'] = 'Email required';
        }
        if (validator.isValidInput(values['password'], 'text')) {
            isvalid = false;
            errors['password'] = 'Pasword required';
        }

        this.setState(prevState => ({ ...prevState, errors }));
        return isvalid;
    };

    pushToCart = () => {
        if (!this.validate()) return;
    };

    render() {
        const { values, errors } = this.state;
        console.log(this.state, 'STATE');
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
                                        onChange={this.onInputChange}
                                        value={values['email']}
                                        error={errors['email']}
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
                                        onChange={this.onInputChange}
                                        value={values['password']}
                                        error={errors['password']}
                                    />
                                </div>
                            </InputCtr>
                        </InputFlexer>
                    </InputFormCtr>
                    <BtnCtr>
                        <Button color={`#3866df`} solid onClick={this.pushToCart}>
                            <BtnText>Submit</BtnText>
                        </Button>
                    </BtnCtr>
                </LoginBox>
            </Wrapper>
        );
    }
}

export default Login;
