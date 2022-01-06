import { configureStore } from "@reduxjs/toolkit";
import studentStateSlice from "./student-slice";
import showTableSlice from "./table-show-slice";

const store = configureStore({
    reducer: {
        studentState: studentStateSlice.reducer,
        showTable: showTableSlice.reducer
    }
});

export default store;