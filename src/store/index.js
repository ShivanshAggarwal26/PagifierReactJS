import { configureStore } from "@reduxjs/toolkit";
import studentStateSlice from "./student-slice";
import showTableSlice from "./table-show-slice";
import inputDataSlice from "./input-data-slice";
import employeeStateSlice from "./employee-slice";

const store = configureStore({
    reducer: {
        studentState: studentStateSlice.reducer,
        employeeState: employeeStateSlice.reducer,
        showTable: showTableSlice.reducer,
        inputDataState: inputDataSlice.reducer
    }
})

export default store