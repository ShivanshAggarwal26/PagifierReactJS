import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enteredNumber: '',
    enteredNumberTouched: false
};

const numberInputSlice = createSlice({
    name: "numberInputSlice",
    initialState: initialState,
    reducers: {
        setEnteredNumber(state, action) {
            state.enteredNumber = action.payload;
        },
        setEnteredNumberTouched(state, action) {
            state.enteredNumberTouched = action.payload;
        }
    }
});

export const numberInputActions = numberInputSlice.actions;
export default numberInputSlice;