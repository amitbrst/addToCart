import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "./MyProductSlice";

export const MyStore = configureStore({
    reducer:{
        product:MyProductReducer
    }
});