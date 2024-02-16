import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "@/redux/feature/cart";
import {logger} from "@/redux/middleware/logger";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
    devTools: process.env.NODE_ENV !== 'production'
})