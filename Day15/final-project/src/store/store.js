import { configureStore } from "@reduxjs/toolkit";

import studentSlice from "./studentSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        //student: studentSlice,
    }
})

export default store;