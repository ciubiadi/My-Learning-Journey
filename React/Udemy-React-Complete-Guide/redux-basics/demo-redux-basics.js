const redux = require('redux');

const storeReducer = (state = { counter:0 }, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter -1
        }
    }
    return state;
};

const store = redux.createStore(storeReducer);

const stateSubscriber = () => {
    const lastState = store.getState();
    console.log(lastState);
};

//this will output the first state : {counter: 1}
store.subscribe(stateSubscriber);

store.dispatch({type: 'increment'});
// because we change the state decreasing the counter, it will retrigger the subscruption so it will ooutput {counter: 0}
store.dispatch({type: 'decrement'});