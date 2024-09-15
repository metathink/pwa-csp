import { Button } from "antd"
import { initializeMultiResult, initializeMultiValues } from "../../util/initialStates"

export default ({ setResult, setVal }: {
    setResult: React.Dispatch<React.SetStateAction<{
        cost: string
        quality: {
            A: {
                qualityValue: string
                costPerUnit: string
            }
            B: {
                qualityValue: string
                costPerUnit: string
            }
        }
    }>>,
    setVal: React.Dispatch<React.SetStateAction<{
        a1Val: string
        a2Val: string
        a3Val: string
        b1Val: string
        b2Val: string
        b3Val: string
    }>>
}) => {
    const onReset = () => {
        setResult(initializeMultiResult)
        setVal(initializeMultiValues)
    }

    return (
        <div>
            <Button onClick={onReset} > Reset </Button>
        </div>
    )
}