import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentTableVisible: false
}

const showTableSlice = createSlice({
    name: 'showStudentTable',
    initialState: initialState,
    reducers: {
        toggleStudentTable(state) {
            state.studentTableVisible = !state.studentTableVisible;
            console.log(state.studentTableVisible);
        }
    }
});

export const showTableActions = showTableSlice.actions;

export default showTableSlice;