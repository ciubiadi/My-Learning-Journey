import redux from 'redux';
// const redux = require('redux');

const storeReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'increase'){
        return {
            counter: state.counter + action.amount
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

const store = redux.createStore(storeReducer);

export default store;