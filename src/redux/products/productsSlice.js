import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedProduct: {},
};

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload.data;
        },
        removeProducts: (state) => {
            state.products = [];
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        removeSelectedProduct: (state) => {
            state.selectedProduct = {};
        }
    }
});

export const { setProducts, removeProducts, setSelectedProduct, removeSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;