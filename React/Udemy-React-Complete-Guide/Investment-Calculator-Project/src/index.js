import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
// import CalculatorContextProvider from './store/StateWithContextAPI/calculator-context';
// import { CalculatorContext } from './store/StateWithContextAPI/calculator-context';
// import store from './store/StateWithRedux/store';
// import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <CalculatorContext.Provider value={[1,2,3,4,5]}> */}
        <App />
    {/* </CalculatorContext.Provider> */}
    {/* </Provider> */}
  </React.StrictMode>
);
