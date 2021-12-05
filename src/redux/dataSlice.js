import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wallets: [],
    transactions: []
}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addData: (state, action) => {
            if (action.payload.wallets == undefined) {
                return state = initialState
            } else {
                return state = action.payload
            }
        },
        removeTransaction: (state, action) => {
            let { transactionDate, selectedTransaction } = action.payload;

            for (const [key, value] of Object.entries(state.transactions)) {
                if (key === transactionDate) {
                    let index =value.findIndex(item => { return JSON.stringify(item)  === JSON.stringify(selectedTransaction)});
                    value.splice(index, 1);
                }
            }           
        },

    },
})

export const { addData, removeTransaction } = dataSlice.actions

export default dataSlice.reducer