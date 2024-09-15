import { Card, Typography } from "antd"

export default ({ result }: {
    result: {
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
    }
}) => {
    const QualityText = () => {

        if (result.quality.A.qualityValue.length > 0 &&
            result.quality.A.costPerUnit.length > 0 &&
            result.quality.B.qualityValue.length > 0 &&
            result.quality.B.costPerUnit.length > 0
        ) {
            return (
                <div style={{ marginTop: '10px' }}>
                    <Typography.Title level={3}>品質評価</Typography.Title>
                    <Typography.Text strong>1円あたりの価値 - A: {result.quality.A.qualityValue} </Typography.Text>
                    <Typography.Text strong>1個あたりの価値 - A: {result.quality.A.costPerUnit} 円</Typography.Text>
                    <Typography.Text strong>1円あたりの価値 - B: {result.quality.B.qualityValue} </Typography.Text>
                    <Typography.Text strong>1個あたりの価値 - A: {result.quality.B.costPerUnit} 円</Typography.Text>
                </div>
            )
        } else {
            return (<></>)
        }
    }

    return (
        <>
            {result.cost.length > 1 && (
                <Card style={{ margin: 8, padding: '20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                    <Typography.Title level={3}> 結果 </Typography.Title>
                    <Typography.Text strong>{result.cost}</Typography.Text>
                    <QualityText />
                </Card>
            )}
        </>
    )
}