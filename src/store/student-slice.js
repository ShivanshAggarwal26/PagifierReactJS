import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pageData: 0,
    scaleData: 10
}

const studentStateSlice = createSlice({
    name: 'studentState',
    initialState: initialState,
    reducers: {
        updatePage(state, action) {
            state.pageData = action.payload
        },
        updateScale(state, action) {
            state.scaleData = action.payload
        }
    }
})

export const studentStateActions = studentStateSlice.actions

export default studentStateSlice