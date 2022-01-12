import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageData: 0,
    scaleData: 10
};

const employeeStateSlice = createSlice({
    name: 'employeeState',
    initialState: initialState,
    reducers: {
        updatePage(state, action) {
            state.pageData = action.payload;
        },
        updateScale(state, action) {
            state.scaleData = action.payload;
        }
    }
})

export const employeeStateActions = employeeStateSlice.actions;

export default employeeStateSlice;