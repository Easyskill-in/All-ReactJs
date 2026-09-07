import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        task: []
    },
    reducers: {
        addTask(state, action) {
            state.task.push(action.payload)
        },
        removeTask(state, action) {
            state.task = state.task.filter(v => v.id !== action.payload)
        }
    }
})


// console.log({ TodoSlice })

export const { addTask, removeTask } = TodoSlice.actions;
export default TodoSlice.reducer;