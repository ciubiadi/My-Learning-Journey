// import React, { useState } from "react";

// const CalculatorContext = React.createContext({
//      tableData: [1,2,3,4,5],
//      onCalculateHandler: () => {}
// });

// export const CalculatorContextProvider = (props) => {
//     const [tableData, setTableData] = useState([]);
  
//     const calculateHandler = (userInput) => {
//         // Should be triggered when form is submitted
//         const yearlyData = []; // per-year results
    
//         let currentSavings = +userInput['current-savings']; 
//         const yearlyContribution = +userInput['yearly-contribution'];
//         const expectedReturn = +userInput['expected-return'] / 100;
//         const duration = +userInput['duration'];
    
//         // The below code calculates yearly results (total savings, interest etc)
//         for (let i = 0; i < duration; i++) {
//           const yearlyInterest = currentSavings * expectedReturn;
//           currentSavings += yearlyInterest + yearlyContribution;
//           yearlyData.push({
//             year: i + 1,
//             yearlyInterest: yearlyInterest,
//             savingsEndOfYear: currentSavings,
//             yearlyContribution: yearlyContribution,
//           });
//         }
    
//         // do something with yearlyData ...
//         setTableData([6,7,8,9,10]);
//       };
  
//     return (
//       <CalculatorContext.Provider
//         value={{
//           tableData: tableData,
//           onCalculateHandler: calculateHandler
//         }}
//       >
//         {props.children}
//       </CalculatorContext.Provider>
//     );
//   };

// export default CalculatorContext;


import { createContext } from "react";

export const CalculatorContext = createContext([
    {year: 2000, totalSavings: 100000, interestYear: 3, totalInterst: 100000, investedCapital: 50000},
    {year: 2000, totalSavings: 100000, interestYear: 3, totalInterst: 100000, investedCapital: 50000},
    {year: 2000, totalSavings: 100000, interestYear: 3, totalInterst: 100000, investedCapital: 50000},
    {year: 2000, totalSavings: 100000, interestYear: 3, totalInterst: 100000, investedCapital: 50000},
    {year: 2000, totalSavings: 100000, interestYear: 3, totalInterst: 100000, investedCapital: 50000},
]);