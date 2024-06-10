import {calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({input}){
    const resultData = calculateInvestmentResults(input);
    const initalInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    //ta bazw edw giati den apo8hkeuonte allou

    console.log(resultData);
    return (<table id = "result">
        <thead>
        <tr>
            <th>Year</th>
            <th>Interest Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {resultData.map(yearData  => { //8eloume ta data gia ka8e xrono

            const totalInterest = yearData.valueEndOfYear- yearData.annualInvestment * yearData.year -initalInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
            //efoson einai table prepei na xrhsimopoiohsw ena key, to opoio einai indetifier (bazw ton xrono)
            return <tr key={yearData.year}>
                <td>{yearData.year}
                </td>
                <td>{formatter.format(yearData.valueEndOfYear)}
                </td>
                <td>{formatter.format(yearData.interest)}
                </td>
                <td>{formatter.format(totalInterest)}
                </td>
                <td>{formatter.format(totalAmountInvested)}
                </td>
            </tr>})}
        </tbody>
    </table>);
}