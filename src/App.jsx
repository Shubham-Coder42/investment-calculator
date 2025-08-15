import { useState } from "react";

import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
   const [userInput, setUserInput] = useState({
        initialInvestment: 5000,
        annualInvestment: 500,
        expectedReturn: 5,
        duration: 10
    });

    const inputIsValid = {
      initialInvestment: userInput.initialInvestment > 0,
      annualInvestment: userInput.annualInvestment > 0,
      expectedReturn: userInput.expectedReturn > 0,
      duration: userInput.duration > 0,
    }

    function handleInputChange(identifier, newValue) {
        setUserInput({
            ...userInput,
            [identifier]: +newValue
        });
    }

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onInputChange={handleInputChange}/>
      {!inputIsValid.initialInvestment && <p className="center">Initial Investment must be greater than 0</p>}
      {!inputIsValid.annualInvestment && <p className="center">Annual Investment must be greater than 0</p>}
      {!inputIsValid.expectedReturn && <p className="center">Expected Return must be greater than 0</p>}
      {!inputIsValid.duration && <p className="center">Duration must be greater than 0</p>}
      {inputIsValid.initialInvestment && inputIsValid.annualInvestment && inputIsValid.expectedReturn && inputIsValid.duration && (
        <Results newInput={userInput}/>
      )}
    </>
  )
}
export default App
