import {formatter} from "../src/util/investment.js";

export default function Table({tableData}){
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
            {tableData.map((e) =>{

                return <tr key={e.year}>
                    <td>{e.year}</td>
                    <td>{formatter.format(Math.round(e.valueEndOfYear))}</td>
                    <td>{formatter.format(Math.round(e.interest))}</td>
                    <td>{formatter.format(Math.round(e.totalInterest))}</td>
                    <td>{formatter.format(e.investedCapital)}</td>
                </tr>

            })}
            </tbody>
        </table>
    )
}