import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalCartQuantity: 0,
        totalCartAmount: 0
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            // if(!existingItem){
            //     state.items.push(existingItem)
            // } else {
            //     const existingItemIndex = state.items.findIndex(item => item.id === newItem.id)
            //     state.items[existingItemIndex].quantity++; 
            // }
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            state.totalCartQuantity++;
            
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if(existingItem.quantity === 1 ) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice  = existingItem.totalPrice - existingItem.price; 
            }
            state.totalCartQuantity--;

        },
        replaceCart(state, action) {
            state.totalCartQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
          },
    }
});

export const {addItem, removeItem, replaceCart} = cartSlice.actions;
// export const cartActions = cartSlice.actions;

export default cartSlice.reducer;