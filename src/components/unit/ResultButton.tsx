import { Button } from "antd"
import Quality from "../../util/quality"

export default ({ val, setResult }: {
    val: {
        a1Val: string
        a2Val: string
        b1Val: string
        b2Val: string
    }
    setResult: React.Dispatch<React.SetStateAction<{
        cost: string
        quality: {
            A: string
            B: string
        }
    }>>
}) => {

    const onResult = () => {

        const a1 = Number(val.a1Val)
        const a2 = Number(val.a2Val)
        const b1 = Number(val.b1Val)
        const b2 = Number(val.b2Val)
        if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || a1 <= 0 || a2 <= 0 || b1 <= 0 || b2 <= 0) {
            setResult({
                cost: "入力が無効です。有効な数値を入力してください。価格が 0 より大きく、数量が 1 以上であることを確認してください。",
                quality: { A: "", B: "" }
            })
            return
        }

        const qualityAValue = Quality(a1, a2)
        const qualityBValue = Quality(b1, b2)

        const qualityAMessage = qualityAValue.toFixed(2)
        const qualityBMessage = qualityBValue.toFixed(2)

        let resultMessage

        if (qualityAValue > qualityBValue) {
            resultMessage = "Aの方がコスト効率が良いです。"
        } else if (qualityAValue < qualityBValue) {
            resultMessage = "Bの方がコスト効率が良いです。"
        } else {
            resultMessage = "A と B はどちらも費用対効果は同じです。"
        }

        setResult({
            cost: resultMessage,
            quality: {
                A: qualityAMessage,
                B: qualityBMessage
            }
        })
    }

    return (
        <div style={{ margin: 12 }}>
            <Button onClick={onResult}> Result </Button>
        </div>
    )
}