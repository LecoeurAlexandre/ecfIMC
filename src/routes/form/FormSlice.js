import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState : {
        bodyDatas: []
    },
    reducers: {
        addBodyDatas(state, action) {
            state.bodyDatas.push(action.payload)
        }
    }
})

export const { addBodyDatas } = formSlice.actions;
export default formSlice.reducer;