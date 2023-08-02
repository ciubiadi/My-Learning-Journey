import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import toggleCartSlice from './toggleCart-slice';

export default configureStore({
    reducer: {
        cart: cartSlice,
        toggleCart: toggleCartSlice
    },
})