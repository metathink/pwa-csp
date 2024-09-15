export interface States {
    initialState: { val: number, str: string, tab: string },
    // val: { a1Val: number, a2Val: number, b1Val: number, b2Val: number, },
    setVal: React.Dispatch<React.SetStateAction<{
        a1Val: number
        a2Val: number
        b1Val: number
        b2Val: number
    }>>,
    // result: { cost: string, quality: { A: string, B: string } },
    setResult: React.Dispatch<React.SetStateAction<{
        cost: string
        quality: {
            A: string
            B: string
        }
    }>>
}