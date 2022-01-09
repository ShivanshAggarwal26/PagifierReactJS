import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newData: []
};

const inputDataSlice = createSlice({
    name: "inputDataState",
    initialState: initialState,
    reducers: {
        setNewInputData(state, action) {
            state.newData.push(action.payload);
        }
    }
})

export const inputDataActions = inputDataSlice.actions
export default inputDataSlice