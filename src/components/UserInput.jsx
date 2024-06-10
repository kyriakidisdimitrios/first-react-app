import { useState } from 'react';
export default function UserInput({onChange, userInput}){

    return (<section id="user-input">
        <div className = "input-group">
            <p>
                <label>Initial Investment</label>
                {/*<input type="number" required onChange = {handleChange}/> se auton edw 8a estelne mono ena stoixeio automata apo thn react, anti autou 8a kanoume anonymous function*/}
                {/*<input type="number" required onChange = {() => handleChange('initialInvestment',)}/> mesa sthn anonymous bazw thn event*/}
                {/*thn value ={} thn valame gia na epistrefei h timh apo thn handleChange*/}
                {/*<input type="number" value ={userInput.initialInvestment} required onChange = {(event) => */}
                {/*    handleChange('initialInvestment', event.target.value)}/>            anti gia handlechange 8a baloume thn onChange pou balamne me to State Up sthn App*/}
                <input type="number" value ={userInput.initialInvestment} required onChange = {(event) =>
                    onChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value ={userInput.annualInvestment} required onChange = {(event) => onChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className = "input-group">
            <p>andle
                <label>Expected Return</label>
                <input type="number" value ={userInput.expectedReturn} required onChange = {(event) => onChange('expectedReturn', event.target.value)}/>
                    </p>
            <p>
                <label>Duration</label>
                <input type="number" value ={userInput.duration} required onChange = {(event) => onChange('duration', event.target.value)}/>

            </p>
        </div>
    </section>);
}