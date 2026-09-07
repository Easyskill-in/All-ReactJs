import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from './TodoSlice.js'
export const store = configureStore({
    reducer: {
        todo: TodoSlice
    }
})

