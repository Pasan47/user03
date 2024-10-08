import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name : "auth",
  initialState,
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;