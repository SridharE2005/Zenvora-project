
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: [],
        message: ""
    },

    reducers: {
        // Add product to cart
        addCart: (state, action) => {
            const newItem = action.payload;

            const findProduct = state.items.find(
                (item) => String(item.id) === String(newItem.id)
            );

            if (!findProduct) {
                state.items.push(newItem);
                state.message = "Product added successfully";
            } else {
                state.message = "Product is already in the cart";
            }
        },

        // Remove product from cart
        deleteCart: (state, action) => {
            const id = action.payload;

            const findProduct = state.items.find(
                (item) => String(item.id) === String(id)
            );

            if (findProduct) {
                state.items = state.items.filter(
                    (item) => String(item.id) !== String(id)
                );

                state.message = "Product removed successfully";
            } else {
                state.message = "Product not found in cart";
            }
        },

        // Clear message
        clearMessage: (state) => {
            state.message = "";
        }
    }
});

export const {
    addCart,
    deleteCart,
    clearMessage
} = cartSlice.actions;

export default cartSlice.reducer;

