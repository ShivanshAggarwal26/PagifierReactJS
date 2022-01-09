import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enteredEmail: '',
    enteredEmailTouched: false,
    emailInputValid: false
};

const emailInputSlice = createSlice({
    name: "emailInputSlice",
    initialState: initialState,
    reducers: {
        setEnteredEmail(state, action) {
            state.enteredEmail = action.payload;
        },
        setEnteredEmailTouched(state, action) {
            state.enteredEmailTouched = action.payload;
        },
        setEmailInputValid(state, action) {
            state.emailInputValid = action.payload;
        }
    }
});

export const emailInputActions = emailInputSlice.actions;

export default emailInputSlice;