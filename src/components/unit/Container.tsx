import React, { useState } from "react"
import { initializeResult, initializeUnitValues } from "../../util/initialStates"
import replaceStr from "../../util/replaceStr"
import Block from "./Block"
import ResultButton from "../unit/ResultButton"
import Result from "./Result"
import ResetButton from "../unit/ResetButton"

export default () => {
    const [val, setVal] = useState(initializeUnitValues)
    const [result, setResult] = useState(initializeResult)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const formattedValue = replaceStr(value)
        setVal((prevVal) => ({
            ...prevVal,
            [name]: formattedValue
        }))
    }

    return (
        <div className="container">
            <Block name="a" value={val} onChange={handleChange} />
            <Block name="b" value={val} onChange={handleChange} />
            <ResultButton val={val} setResult={setResult} />
            <Result result={result} /> 
            <ResetButton setVal={setVal} setResult={setResult} /> 
        </div>
    )
}