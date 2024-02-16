import {createSlice} from "@reduxjs/toolkit";
// @ts-ignore
import {WritableDraft} from "immer/src/types/types-external";

const initialState = {}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state: WritableDraft<{}>, {payload}) => {
            const count = state[payload] || 0
            state[payload] = count + 1;
        },
        decrement: (state: WritableDraft<{}>, {payload}) => {
            const count = state[payload] || 0

            if (!count){
                return;
            }

            if (count === 1){
                delete state[payload]
                return;
            }

            state[payload] = count - 1
        },
        reset: () => initialState,
    },
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions