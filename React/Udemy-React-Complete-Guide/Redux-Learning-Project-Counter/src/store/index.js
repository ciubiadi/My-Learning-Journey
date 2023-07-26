// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// const redux = require('redux');

import counterReducer from './counter-slice';
import authReducer from './auth';

// const counterReducer = (state = INITIAL_COUNTER_STATE, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         } 
//     }
//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }

// const store = createStore(counterReducer);





// const store = createStore(counterSlice.reducer);
/* configureStore combines/merge all reducers into 1 */ 
// If I have only the CounterSlice, I can use the below syntax
// const store = configureStore({
//     reducer: counterSlice.reducer
// });

// if I have multiple slices the below syntax will be used, and it basically merge the indiviodual reducers togheter
const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer}
});


export default store;