import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        cartItems: [],
        amount: 0,
        total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        addToCart: (state, action) => {

            const cartItem = state.cartItems.find(item => item.id === action.payload.product.id);
            if(!cartItem){
                state.cartItems.push(action.payload);
                state.amount += action.payload.amount;
            }else{
                state.amount += action.payload.amount;
                cartItem.amount += action.payload.amount;
            }

        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        } 
    }
});

export const { clearCart, removeItem, increase, decrease, calculateTotals, addToCart } = cartSlice.actions;

export default cartSlice.reducer;