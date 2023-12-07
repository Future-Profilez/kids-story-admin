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
        getUser: (state, action) => {
            state.users = action.payload.map(user => {
                return {
                    id: user._id,
                }
            })
        },
        adduser: (state, action) => {
            state.users.push(action.payload)
        },
        reduxdatauser: (state, action) => {
            state.users.push(action.payload)
        },
       
    }
})

export const { getUser, adduser, login, logout ,reduxdatauser} = UserSlice.actions;

export const selectuser = (state) => state.users.users;
export default UserSlice.reducer;
