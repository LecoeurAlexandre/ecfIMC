import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState : {
        isLogged: false
    },
    reducers: {
        loggin(state, action){
            state.isLogged(action.payload)
        }
    }
})

export const { loggin } = userSlice.actions;
export default userSlice.reducer;