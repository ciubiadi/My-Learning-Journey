import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
// const redux = require('redux');

const INITIAL_STATE = {
    counter: 0,
    showCounter: false
}

/* I'm preparing a slice of my global state. When I have different pieces of state that are not related directly,
like an authentication status and a counter status, I can create multiple state slices for a more maintainable 
code
*/
createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
    reducers: {
        increment(state){
            // Here I am allowed to mutate the state
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter+action.amount;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

const counterReducer = (state = INITIAL_STATE, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        } 
    }
    if(action.type === 'increase'){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'toggle'){
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;