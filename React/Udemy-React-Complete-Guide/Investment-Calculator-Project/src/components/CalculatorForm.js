import { useState } from "react";

const INITIAL_USER_INPUT_STATE = {
  'current-savings': 0,
  'yearly-contribution': 0,
  'expected-return': 8,
  'duration': 0
}

const CalculatorForm = (props) => {

    const [userInput, setUserInput] = useState(INITIAL_USER_INPUT_STATE)


    const resetHandler = () => {
      setUserInput(INITIAL_USER_INPUT_STATE);
    }

    const submitHandler = (event) => {
      event.preventDefault();
      props.calculateHandler(userInput);
    }

    const inputChangeHandler = (input, value) => {
      setUserInput((pervState) => {
        return {
          ...pervState,
          [input]: +value
        }
      })
    }

    return (
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={(event) => {
              return inputChangeHandler('current-savings', event.target.value)
            }} value={userInput['current-savings']}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={(event) => {
              return inputChangeHandler('yearly-contribution', event.target.value)
            }} value={userInput['yearly-contribution']} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={(event) => {
              return inputChangeHandler('expected-return', event.target.value)
            }} value={userInput['expected-return']} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(event) => {
              return inputChangeHandler('duration', event.target.value)
            }} value={userInput['duration']} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    );
}

export default CalculatorForm;