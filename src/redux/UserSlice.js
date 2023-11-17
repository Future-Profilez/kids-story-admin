import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "users",
    initialState: {
        isUserLoggedIn: false,
        users: null,
    },
    reducers: {
    
        login: (state, action) => {
            state.users = action.payload;
            state.isUserLoggedIn = true;
        },
        token: (state, action) => {
            state.users = action.payload;
            state.isUserLoggedIn = true;
        },

        
        logout: (state) => {
            state.users = null;
            state.isUserLoggedIn = false;
        },
        
        getuser: (state, action) => {
            state.users = action.payload.map(user => {
                return {
                    email: user.email

                }
            })

        },


        getData: (state, action) => {
            state.users = action.payload.users.map(user => {
                return {
                    chapter: user.chapter,
                    content: user.content,
                    imagePrompt: user.imagePrompt,
                    subtitle: user.subtitle,

                }
            })
        },
        adduser: (state, action) => {
            state.users.push(action.payload);
        },


    }

})

export const { login, logout, adduser, getuser,token,getData } = UserSlice.actions;

export const selectUser = (state) => state.users.users;

export default UserSlice.reducer;

