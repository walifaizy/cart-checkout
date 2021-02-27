import React from 'react';
import AccountsScreen from '../components/accounts/index';
import styled from 'styled-components';

const Flexer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    width: 100%;
`;

const AccountsPage = props => {
    return (
        <Flexer>
            <AccountsScreen />
        </Flexer>
    );
};

export default AccountsPage;
