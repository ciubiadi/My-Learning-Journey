import React, { useState} from 'react';
import CalculatorForm from './components/CalculatorForm';
import Header from './components/Header';
import ResultsTable from './components/ResultsTable';

function App() {
  const [calculatorData, setCalculatorData]= useState(null);

  const yearlyData = []; // per-year results

  // The below code calculates yearly results (total savings, interest etc)
  if(calculatorData){
    let currentSavings = +calculatorData['current-savings']; 
    const yearlyContribution = +calculatorData['yearly-contribution'];
    const expectedReturn = +calculatorData['expected-return'] / 100;
    const duration = +calculatorData['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  const calculateHandler = (userInput) => {
    setCalculatorData(userInput);
  }

  return (
    <React.Fragment>
        <Header />
        <CalculatorForm calculateHandler={calculateHandler}/>
        {!calculatorData && <p style={{textAlign: 'center'}}>No invesstment calculated.</p>}
        {calculatorData && <ResultsTable data={yearlyData} initialInvestment={calculatorData['current-savings']} />}
    </React.Fragment>
  );
}

export default App;
