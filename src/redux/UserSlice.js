import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {

        login: (state, action) => {
            state.users = action.payload;
        },

        logout: (state, action) => {
            state.users = null;
        },
      
    }

})

export const {  login, logout } = UserSlice.actions;

export const selectuser = (state) => state.users.users;
export default UserSlice.reducer;
