import { createSlice } from "@reduxjs/toolkit";

const CountSlice = createSlice({
    name: "Count",
    initialState: { value: 0 },
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
    }
})

export const { increment, decrement } = CountSlice.actions;

export default CountSlice.reducer;

// console.log({ CountSlice })
// console.log(CountSlice.actions)
// console.log(CountSlice.reducer)