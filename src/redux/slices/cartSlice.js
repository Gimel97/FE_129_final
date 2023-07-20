import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { clearCartFromLS } from "../../utils/clearCartFromLS";

const {items, totalPrice} = getCartFromLS()

const initialState = {
    totalPrice,
    items,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action){
            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            if(findItem){
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice = calcTotalPrice(state.items)
            // state.totalPrice = state.items.reduce((sum, obj) => {
            //     return (obj.price * obj.count) + sum;
            // }, 0);
        },

       

        minusItem(state, action){
            const findItem = state.items.find((obj) => obj.id === action.payload);
            if (findItem){
                findItem.count--;
            }
        },

      

        removeItem(state, action){
                state.items = state.items.filter((obj) => obj.id !== action.payload);
                state.totalPrice = state.items.reduce((sum, obj) => {
                    return (obj.price * obj.count) + sum;
                }, 0);
            
        },

        clearItems(){
           clearCartFromLS()
            
        }
      
    }
});

export const {addItem, removeItem, minusItem, clearItems} = cartSlice.actions;
export default cartSlice.reducer;