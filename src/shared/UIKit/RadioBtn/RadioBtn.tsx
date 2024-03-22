'use client'
import React, {useEffect, useState} from 'react';
import styles from './RadioBtn.module.css'
import {RadioContext} from "@/shared/UIKit/RadioBtn/RadioBtn.props";
import {useDispatch, useSelector} from "react-redux";
import {selectProductAmount} from "@/processes/redux/feature/cart/selector";
import {cartActions} from "@/processes/redux/feature/cart";

// const RadioContext = createContext<RadioContext | undefined>(undefined)

const PRODUCT_ID = '123'

const Product = () => {
    const productAmount = useSelector((state) => selectProductAmount(state, PRODUCT_ID))

    return <div>
        {productAmount}
    </div>
}

const RadioProvider = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(cartActions.increment(PRODUCT_ID))}>+</button>
            <button onClick={() => dispatch(cartActions.decrement(PRODUCT_ID))}>-</button>
            <Product/>
        </div>
    );
};



export default RadioProvider;