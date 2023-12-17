import { createSlice } from "@reduxjs/toolkit";

// exporting the slice , so that it can be used in store.

/**
    Each Slice have this key value :
    1) name to identify the slice throughout the whole application !
    2) initialState
    3) reducers : basically this contains all ur functions but with state and actions just like useState();
    4) last step:  Export them
    but in 2 ways :   1) export the slice directly and then 2) exprt the each function through <yourslice>.actions

    what is actions ? => collective name of all ur reducers or can say ur functions
    
**/
export const CartSlice=createSlice({
    name: "cart",
    initialState: {
        cart:[],
        total:0
    }
    , // this can be anything , but for this project ,our usecase is to use an Array !
    reducers : {  // state,action => 1) initialstate is stored in "state" and through action we change our "state".
        // action has the data we get from useDIspatch();
        // payload in plain language means our data !!!!
        // so action.payload means data !
        addProduct(state,action){
            state.cart.push(action.payload)
            state.total += action.payload.price
            // console.log('data from redux', action.payload);
        },
        deleteProduct(state, action){
            console.log('delete product with id as : ', action.payload.id);
            state.cart = state.cart.filter((product)=>product.id !== action.payload.id)
            state.total -= action.payload.price
        },
    }
});



//2: exporting each functions
export const { addProduct , deleteProduct } = CartSlice.actions;