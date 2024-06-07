import { useState } from 'react';
export default function UserInput(){
    const [userInput, setUserInput] = useState({
            initialInvestment: 10000,
            annualInvestment: 120,
            expectedReturn: 6,
            duration: 10
        }
    );

    function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInput => { //1. h setUserInput apo epanw, 2. h prevUserInput POY 8A xrhsimopopoihsoume META
            return { //apo to opoio kai 8a epistrepsoume
            ...prevUserInput, //dhmiourgoume ena neo Object apo to porhgoumeno ths prevUserInput, to opoio kai 8a anagnorizetai apo to inputIdentifier
                              //to opoio mporei na einai eite initialInvestment, eite annualInvestment, eite expectedReturn, eite duration
                [inputIndetifier]: newValue //wste na ftiaksoume mia idiothta dynamika analoga me to pia timh exei apo8hkeutei sthn inputIdentifier,
                                //kai 8elw na 8esww thn timh ths idiothtas ws newValue , thn opoia epishs pernoume ws parametro
            };
    });
    }
    return (<section id="user-input">
        <div className = "input-group">
            <p>
                <label>Initial Investment</label>
                {/*<input type="number" required onChange = {handleChange}/> se auton edw 8a estelne mono ena stoixeio automata apo thn react, anti autou 8a kanoume anonymous function*/}
                {/*<input type="number" required onChange = {() => handleChange('initialInvestment',)}/> mesa sthn anonymous bazw thn event*/}
                {/*thn value ={} thn valame gia na epistrefei h timh apo thn handleChange*/}
                <input type="number" value ={userInput.initialInvestment} required onChange = {(event) => handleChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value ={userInput.annualInvestment} required onChange = {(event) => handleChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className = "input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" value ={userInput.expectedReturn} required onChange = {(event) => handleChange('expectedReturn', event.target.value)}/>
                    </p>
            <p>
                <label>Duration</label>
                <input type="number" value ={userInput.duration} required onChange = {(event) => handleChange('duration', event.target.value)}/>

            </p>
        </div>
    </section>);
}