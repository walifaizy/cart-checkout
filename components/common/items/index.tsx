import React, { Component } from 'react';
import styled from 'styled-components';
import { TItems } from '../../../_types';

const ItemCtr = styled.div``;

const Item = styled.div`
    background-color: rgb(255, 255, 255);
    margin-top: -1px;
    padding: 14px 15px 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(226, 229, 241);
    border-image: initial;
    display: flex;
    border-radius: 5px;
    .imageCtr {
        width: 25%;
        max-width: 120px;
    }
    .imageCtr > img {
        display: block;
        max-width: 100%;
        border-radius: 5px;
    }
`;

const SummaryCtr = styled.div`
    flex: 1 1 0%;
    margin: 0px 15px 0px 15px;
    display: flex;
    justify-content: space-between;

    .brand {
        font-family: sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 15px;
        color: rgb(126, 133, 155);
    }
    .title {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        margin-top: 5px;
    }
    .deliver {
        font-size: 0.85rem;
        margin-top: 10px;
    }
    .date {
        color: rgb(55, 174, 2);
    }
    .priceWrapper {
        display: flex;
        justify-content: flex-start;
        font-size: 0.85rem;
        .price {
            font-size: 1.2rem;
            line-height: 15px;
            margin: 0px 2px;
        }
    }
`;

const Items = (props: TItems) => {
    const { item } = props;
    return (
        <>
            <ItemCtr>
                <Item>
                    <div className="imagectr">{item && item.imageURL && <img src={item && item.imageURL} />}</div>
                    <SummaryCtr>
                        <div>
                            <div className="brand">{item.brand}</div>
                            <div className="title">{item.title}</div>
                            <div className="deliver">
                                Delivered by: <span className="date">{item.estimatedDeliveryDate}</span>
                            </div>
                            <div className="deliver">{item.warranty}</div>
                        </div>
                        <div className="priceWrapper">
                            <span>AED</span> &nbsp;
                            <div className="price"> {item && item.unitPrice}</div>
                        </div>
                    </SummaryCtr>
                </Item>
            </ItemCtr>
        </>
    );
};

export default Items;
