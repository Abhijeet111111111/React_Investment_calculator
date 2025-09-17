import {useState} from "react";
import UserInput from "../Components/UserInput.jsx";
import {calculateInvestmentResults} from "./util/investment.js";
import Table from "../Components/table.jsx"
import Header from "../Components/Header.jsx";
import InputSection from "../Components/InputSection.jsx";
function App() {
  const [userInput,setUserInput] = useState({
      initialInvestment:15000,
      annualInvestment:12000,
      expectedReturn : 6,
      duration : 10
  })
    const isValidInput = userInput.duration >= 1;
    const handleInputChange = (evt) =>{
      setUserInput((oldInputValue)=>({
          ...oldInputValue,
          [evt.target.name] : parseInt(evt.target.value)
      }))
    }

    const tableData = calculateInvestmentResults(userInput);
    let sum = 0;
    let sum1 = userInput.initialInvestment;
    for(let i=0;i<tableData.length;i++){
        sum1 += userInput.annualInvestment
        sum += tableData[i].interest;
        tableData[i].totalInterest = sum;
        tableData[i].investedCapital = sum1;
    }

    return (
        <>
            <Header/>
            <InputSection handleInputChange={handleInputChange} userInput={userInput}/>
            {!isValidInput && <p className="center">Enter Duration more than zero.</p>}
            {isValidInput && <Table tableData={tableData}/>}
</>
  )
}

export default App
