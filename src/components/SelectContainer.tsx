import React from "react"
import { Radio, RadioChangeEvent } from "antd"

export default ({ tab, setTab }: { tab: string, setTab: React.Dispatch<React.SetStateAction<string>> }) => {

    const handleChange = (e: RadioChangeEvent) => {
        setTab(e.target.value)
    }

    return (
        <>
            <div className="selectTab">
                <Radio.Group name="tabs" value={tab} onChange={handleChange}>
                    <Radio.Button value="unit"> 単価 </Radio.Button>
                    <Radio.Button value="multi"> 複数 </Radio.Button>
                </Radio.Group>
            </div>
        </>
    )
}