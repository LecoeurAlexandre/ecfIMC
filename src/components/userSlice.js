import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState : {
        isLogged: false
    },
    reducers: {
        setIsLogged(state, action){
            state.isLogged=action.payload
        }
    }
})

export const { setIsLogged } = userSlice.actions;
export default userSlice.reducer;