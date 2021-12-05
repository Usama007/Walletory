import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        addNewUser: (state, action) => {
            if (action.payload.email == undefined) {
                return state = initialState
            } else {
                return state = [...state,action.payload]
            }
        },      
    },
})

export const { addNewUser } = registerSlice.actions

export default registerSlice.reducer