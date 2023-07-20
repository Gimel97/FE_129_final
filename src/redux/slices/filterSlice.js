import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    // categoryNames: 'Бургеры'
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action){
            state.categoryId = action.payload
        },
        // setCategoryNames(state, action){
        //     state.categoryNames = action.payload
        // }
    }
})

export const {setCategoryId, setCategoryNames} = filterSlice.actions;
export default filterSlice.reducer;