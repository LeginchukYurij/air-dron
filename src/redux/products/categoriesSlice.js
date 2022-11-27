import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
};

const categoriesSlice = createSlice({
    name: "categoriesSlice",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload.data;
        }
    }
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

