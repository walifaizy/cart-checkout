import React from 'react';
import ConfirmScreen from '../components/confirm/index';
import styled from 'styled-components';

const Flexer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    width: 100%;
`;

class ConfirmPage extends React.PureComponent {
    render() {
        return (
            <Flexer>
                <ConfirmScreen />
            </Flexer>
        );
    }
}

export default ConfirmPage;
