import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from '../index';

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 25;
    width: 0;
    height: 0;
    overflow: hidden;

    &.showAlertCtr {
        width: 100%;
        height: 100%;
        animation: ${({ theme }) => theme.effect.fadeIn} 0.3s ease-in both;
        z-index: 25;
    }
`;

const Scrim = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: ${({ theme }) => theme.colors.secondaryText}22;
    z-index: 25;
`;

const Alert = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.boxShadow.componentShadow};
    border-radius: 4px;
    margin: 10px 0;
    position: relative;
    overflow: hidden;
    height: 0;
    width: 0;
    &.showAlert {
        height: auto;
        width: 260px;
        animation: ${({ theme }) => theme.effect.fadeIn} 0.3s ease-in both;
        z-index: 26;
        padding: 20px;
    }
    .btnWrapper {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .children {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        line-height: 1.5;
        text-align: center;
        color: ${({ theme }) => theme.colors.secondaryText};
    }
    .title {
        text-align: center;
        margin: 20px;
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 1.5;
    }
`;

class AlertBox extends React.PureComponent<> {
    componentDidMount() {
        document.addEventListener('keydown', this.escFunction, false);
    }
    escFunction = e => {
        if (this.props.isOpen && e.keyCode === 27) {
            this.props.onCloseAlert();
        }
    };
    render() {
        const {
            children,
            title,
            isOpen,
            onCloseAlert,
            onCancel,
            onConfirm,
            cancelBtnLabel = 'Cancel',
            confirmBtnLabel = 'Continue Shopping',
        } = this.props;

        return (
            <Container className={isOpen ? 'showAlertCtr' : ''}>
                {isOpen ? <Scrim onClick={onCloseAlert} /> : ''}
                <Alert className={isOpen ? 'showAlert' : ''}>
                    <h3 className="title">{title}</h3>
                    <div className="children">{children}</div>
                    <div className="btnWrapper">
                        <Button solid color={({ theme }) => theme.colors.dark} onClick={onConfirm}>
                            {confirmBtnLabel}
                        </Button>
                    </div>
                </Alert>
            </Container>
        );
    }
}

export default AlertBox;
