import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    students: [],
    loading: false,
    error: null,
};

// Connect to the backend

const studentSlice = createSlice({

    // Object
    name: "student",
    initialState,


})

export default studentSlice.reducer;