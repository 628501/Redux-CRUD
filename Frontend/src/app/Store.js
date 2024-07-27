import { configureStore } from "@reduxjs/toolkit";
import UserReducer  from "../Slices/UserSlice";

const store = configureStore({
    reducer:{
        usersInfo: UserReducer,
    },
})

export default store;