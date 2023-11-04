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
            state.users = action.payload.story.map(user => {
                return {
                    chapter: user.chapter,
                    content: user.content,
                    imagePrompt: user.imagePrompt,
                    subtitle: user.subtitle,

                }
            })
        },
        adduser: (state, action) => {
            state.users.push(action.payload)
        },


    }

})

export const { login, logout, adduser, } = UserSlice.actions;

export const selectuser = (state) => state.users.users;
export default UserSlice.reducer;
