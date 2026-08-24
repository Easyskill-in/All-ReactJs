import { configureStore } from "@reduxjs/toolkit";
import CountSlice from './CountSlice';

export const Store = configureStore({
    reducer: {
        Count: CountSlice,
    }
})