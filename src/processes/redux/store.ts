import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "@/processes/redux/feature/cart";
import {logger} from "@/processes/redux/middleware/logger";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
    devTools: process.env.NODE_ENV !== 'production'
})