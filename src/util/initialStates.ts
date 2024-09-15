export const initializeUnitValues = () => {
    return {
        a1Val: "0",
        a2Val: "0",
        b1Val: "0",
        b2Val: "0",
    }
}

export const initializeMultiValues = () => {
    return {
        a1Val: "0",
        a2Val: "0",
        a3Val: "0",
        b1Val: "0",
        b2Val: "0",
        b3Val: "0"
    }
}
export const initializeResult = () => {
    return {
        cost: "",
        quality: { A: "", B: ""},
    }
}

export const initializeMultiResult = () => {
    return {
        cost: "",
        quality: {
            A: {
                qualityValue: "",
                costPerUnit: ""
            },
            B: {
                qualityValue: "",
                costPerUnit: ""
            },
        },
    }
}


export const initializeTab = () => {
    return "unit"
}