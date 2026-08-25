import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name: "TODO",
    initialState: { task: [] },
    reducers: {
        add(state, action) {
            state.task.push(action.payload)
        },
        update(state, action) {
            console.log({ action });

            state.task = state.task.map(v => {
                console.log("v.id != action.payload.id", v.id != action.payload.id);

                if (v.id != action.payload.id) {
                    return v
                } else {
                    return { id: action.payload.id, task: action.payload.newData }
                }
            })
        },
        deleteTask(state, action) {
            state.task = state.task.filter(v => v.id !== action.payload)
        }
    }
})

export const { add, update, deleteTask } = TaskSlice.actions
export default TaskSlice.reducer