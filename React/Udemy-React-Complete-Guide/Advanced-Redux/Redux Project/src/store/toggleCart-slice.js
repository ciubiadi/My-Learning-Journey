import { createSlice } from '@reduxjs/toolkit'

export const toggleCartSlice = createSlice({
    name: 'toggleCart',
    initialState: {
        showCart: false
    },
    reducers: {
        toggleCart: (state, action) => {
            state.showCart = !state.showCart
        }
    }
});

export const { toggleCart } = toggleCartSlice.actions;

export default toggleCartSlice.reducer;