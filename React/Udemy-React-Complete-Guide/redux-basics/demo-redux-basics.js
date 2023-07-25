const redux = require('redux');

const storeReducer = (state = {counter:0}, action) => {
    return {
        counter: state.counter + 1
    }
};

const store = redux.createStore(storeReducer);

const stateSubscriber = () => {
    const lastState = store.getState();
    console.log(lastState);
};

store.subscribe(stateSubscriber);

store.dispatch({type: 'increment'})