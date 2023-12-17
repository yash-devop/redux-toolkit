import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice";

const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,        // name : <ImportyourSlice and also add reducer like in the leftside code >
    }
})

export default store;