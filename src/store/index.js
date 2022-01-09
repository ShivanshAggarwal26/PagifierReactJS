import { configureStore } from "@reduxjs/toolkit";
import nameInputSlice from "./name-input-slice";
import numberInputSlice from "./number-input-slice";
import studentStateSlice from "./student-slice";
import showTableSlice from "./table-show-slice";
import emailInputSlice from "./email-input-slice";
import inputDataSlice from "./input-data-slice";

const store = configureStore({
    reducer: {
        studentState: studentStateSlice.reducer,
        showTable: showTableSlice.reducer,
        nameInputSlice: nameInputSlice.reducer,
        numberInputSlice: numberInputSlice.reducer,
        emailInputSlice: emailInputSlice.reducer,
        inputDataState: inputDataSlice.reducer
    }
})

export default store