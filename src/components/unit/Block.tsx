import { Typography, Input } from "antd";
interface ValueObject {
    [key: string]: string;
}

export default ({ name, value, onChange }: {
    name: string,
    value: ValueObject,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
    <div style={{
        margin: 4,
        padding: 4,
        border: "1px solid rgba(0, 0, 0, 0.5)",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
    }}>
        <Typography.Title level={4} style={{ margin: 2 }}> {name} </Typography.Title>

        <div style={{ display: "flex", alignItems: "center", margin: 4 }}>
            <Input
                type="number"
                name={`${name}1Val`}
                value={value[`${name}1Val`]}
                onChange={onChange}
                min="0"
                style={{ flex: 1, marginRight: 8 }}
            />
            <Typography.Text> 単位(g,ml) </Typography.Text>
        </div>

        <div style={{ display: "flex", alignItems: "center", margin: 4 }}>
            <Input
                type="number"
                name={`${name}2Val`}
                value={value[`${name}2Val`]}
                onChange={onChange}
                min="0"
                style={{ flex: 1, marginRight: 8 }}
            />
            <Typography.Text> 円 </Typography.Text>
        </div>
    </div>
)