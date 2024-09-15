import { useState } from "react"
import { initializeMultiResult, initializeMultiValues } from "../../util/initialStates"
import replaceStr from "../../util/replaceStr"
import Block from "./Block"
import ResultButton from "./ResultButton"
import ResetButton from "./ResetButton"
import Result from "./Result"

export default () => {
    const [val, setVal] = useState(initializeMultiValues)
    const [result, setResult] = useState(initializeMultiResult)

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
            <ResetButton setVal={setVal} setResult={setResult}/>
        </div>
    )
}