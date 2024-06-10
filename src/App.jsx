import Header from './components/Header';
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import {useState} from "react";
function App() {
    const [userInput, setUserInput] = useState({
            initialInvestment: 10000,
            annualInvestment: 1200,
            expectedReturn: 6,
            duration: 10
        }
    );

    const inputIsValid = userInput.duration >= 1;
    function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInput => { //1. h setUserInput apo epanw, 2. h prevUserInput POY 8A xrhsimopopoihsoume META
            return { //apo to opoio kai 8a epistrepsoume
                ...prevUserInput, //dhmiourgoume ena neo Object apo to porhgoumeno ths prevUserInput, to opoio kai 8a anagnorizetai apo to inputIdentifier
                                  //to opoio mporei na einai eite initialInvestment, eite annualInvestment, eite expectedReturn, eite duration
                //[inputIdentifier]: newValue //wste na ftiaksoume mia idiothta dynamika analoga me to pia timh exei apo8hkeutei sthn inputIdentifier,
                [inputIdentifier]: +newValue //me thn allagh se + to kanei ari8mo kai kanei spros8hkh ari8mwn
                //kai 8elw na 8esww thn timh ths idiothtas ws newValue , thn opoia epishs pernoume ws parametro
            };
        });
    }
  return (
      <>
      <Header />
      <UserInput userInput = {userInput} onChange={handleChange} />
      {!inputIsValid && (<p className="center">Please enter a duration greater than zero.</p>)}
          {inputIsValid && <Results input = {userInput} />}
      </>
  );
}

export default App
