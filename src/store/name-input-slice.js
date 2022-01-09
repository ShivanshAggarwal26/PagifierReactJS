import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enteredName: '',
    enteredNameTouched: false,
    nameInputValid: false
};

const nameInputSlice = createSlice({
    name: "nameInputSlice",
    initialState: initialState,
    reducers: {
        setEnteredName(state, action) {
            state.enteredName = action.payload;
        },
        setEnteredNameTouched(state, action) {
            state.enteredNameTouched = action.payload;
        },
        setNameInputValid(state, action) {
            state.nameInputValid = action.payload;
        }
    }
});

export const nameInputActions = nameInputSlice.actions;

export default nameInputSlice;