import React from 'react';
import LoginScreen from '../components/login/index';
import styled from 'styled-components';

const Flexer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
`;

const LoginPage = props => (
    <Flexer>
        <LoginScreen />
    </Flexer>
);

export default LoginPage;
