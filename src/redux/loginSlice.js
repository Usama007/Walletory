import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isLoggedIn: false
}
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addLoginData: (state, action) => {
            if (action.payload.isLoggedIn == undefined) {
                return state = initialState
            } else {
                return state = action.payload
            }
        },       
    },
})

export const { addLoginData } = loginSlice.actions

export default loginSlice.reducer