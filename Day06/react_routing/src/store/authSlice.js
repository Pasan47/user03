import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false, //If not logged; redirect to the login page. otherwise go to the addPost page
    userData: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true; // If false, this will navigate to the login page
            state.userData = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;