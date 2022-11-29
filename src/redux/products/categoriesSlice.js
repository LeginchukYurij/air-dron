import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    selectedCategory: {}
};

const categoriesSlice = createSlice({
    name: "categoriesSlice",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload.data;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        removeSelectedCategory: (state) => {
            state.selectedCategory = {};
        },
    }
});

export const { setCategories, setSelectedCategory, removeSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;

