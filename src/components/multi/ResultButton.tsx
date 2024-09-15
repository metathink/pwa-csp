import { Button } from "antd"
import Quality from "../../util/quality"

export default ({ val, setResult }: {
    val: {
        a1Val: string
        a2Val: string
        a3Val: string
        b1Val: string
        b2Val: string
        b3Val: string
    }
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
    }>>
}) => {

    const onResult = () => {
        const a1 = parseFloat(val.a1Val)
        const a2 = parseFloat(val.a2Val)
        const a3 = parseFloat(val.a3Val)
        const b1 = parseFloat(val.b1Val)
        const b2 = parseFloat(val.b2Val)
        const b3 = parseFloat(val.b3Val)

        if (isNaN(a1) || isNaN(a2) || isNaN(a3) || isNaN(b1) || isNaN(b2) || isNaN(b3) || a1 <= 0 || a2 <= 0 || a3 <= 0 || b1 <= 0 || b2 <= 0 || b3 <= 0) {
            setResult({
                cost: "入力が無効です。有効な数値を入力してください。価格が 0 より大きく、数量が 1 以上であることを確認してください。",
                quality: {
                    A: {
                        qualityValue: "",
                        costPerUnit: ""
                    },
                    B: {
                        qualityValue: "",
                        costPerUnit: ""
                    }
                }
            })
            return
        }
        const qualityAValue = Quality(a1, a2)
        const qualityBValue = Quality(b1, b2)

        const costPerUnitA = a2 / a3
        const costPerUnitB = b2 / b3

        let resultMessage = ""

        if (qualityAValue > qualityBValue) {
            resultMessage = `Aの方がコスト効率が良いです。`
        } else if (qualityBValue > qualityAValue) {
            resultMessage = `Bの方がコスト効率が良いです。`
        } else {
            resultMessage = `A と B はどちらも費用対効果は同じです。`
        }

        setResult({
            cost: resultMessage,
            quality: {
                A: {
                    qualityValue: qualityAValue.toFixed(2),
                    costPerUnit: costPerUnitA.toFixed(2)
                },
                B: {
                    qualityValue: qualityBValue.toFixed(2),
                    costPerUnit: costPerUnitB.toFixed(2)
                },
            }
        })
    }

    return (
        <div style={{ margin: 12 }}>
            <Button onClick={onResult} > Result </Button>
        </div>
    )
}