// import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
// const redux = require('redux');

const INITIAL_COUNTER_STATE = {
    counter: 0,
    showCounter: false
}

/* I'm preparing a slice of my global state. When I have different pieces of state that are not related directly,
like an authentication status and a counter status, I can create multiple state slices for a more maintainable 
code
*/
const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_COUNTER_STATE,
    reducers: {
        increment(state){
            // Here I am allowed to mutate the state but behind the scenes it returns an object will the state #imutable
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter+action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;