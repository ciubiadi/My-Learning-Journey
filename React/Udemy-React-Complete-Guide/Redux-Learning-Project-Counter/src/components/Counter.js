/* useSelector is a custom react hook made by the React Redux team. useStore is another custom hook as well
 useSelector allows me to automatically select a part of my state managed by the store
 connect function can be used as a wrapper around a class component to connect that class component to the store
*/
import { useSelector, useDispatch } from 'react-redux'; 
import classes from './Counter.module.css';
// import { counterActions } from '../store/index';
import { counterActions } from '../store/counter-slice.js';

const Counter = () => {
  // get access to the data managed in the store by useSelector
  // in the parameter I say what part of the state I need in the current component
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler  = () => {
    // dispatch({type: 'increment'});
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({type: 'increase', amount: 5});
    dispatch(counterActions.increase(5));
  }

  const decrementHandler  = () => {
    // dispatch({type: 'decrement'});
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({type: 'toggle'});
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;