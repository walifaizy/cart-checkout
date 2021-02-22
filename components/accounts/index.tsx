import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import { Input, Button } from '../common';
import validator from '../../utils/validator';
import styled from 'styled-components';
import cartData from '../../data/index';

const Site = styled.div`
    padding: 0 25px;
    margin: 20px auto;
    width: 100%;
    box-sizing: border-box;
`;

class Accounts extends Component {
    render() {
        return <Site>Accounts </Site>;
    }
}

export default Accounts;
