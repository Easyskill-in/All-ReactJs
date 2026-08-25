import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from './TaskSlice.jsx';
export const Store = configureStore({
    reducer: {
        Task: TaskReducer
    }
})