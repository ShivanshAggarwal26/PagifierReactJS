import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newStudentData: [],
    newEmployeeData: []
};

const inputDataSlice = createSlice({
    name: "inputDataState",
    initialState: initialState,
    reducers: {
        setNewStudentInputData(state, action) {
            state.newStudentData.push(action.payload);
        },
        setNewEmployeeInputData(state, action) {
            state.newEmployeeData.push(action.payload);
        }
    }
})

// const dispatch = useDispatch()

// const updatePageDataHandler = (pageValue) => {
//     dispatch(studentStateActions.updatePage(pageValue))
// }

// const updateScaleDataHandler = (scaleValue) => {
//     dispatch(studentStateActions.updateScale(scaleValue))
// }

// const updateStudentInputDataHandler = (inputValue) => {
//     const inputData = {
//         rollNo: inputValue.enteredNumber,
//         name: inputValue.enteredName,
//         emailId: inputValue.const dispatch = useDispatch()

//         const updatePageDataHandler = (pageValue) => {
//             dispatch(studentStateActions.updatePage(pageValue))
//         }
    
//         const updateScaleDataHandler = (scaleValue) => {
//             dispatch(studentStateActions.updateScale(scaleValue))
//         }
    
//         const updateStudentInputDataHandler = (inputValue) => {
//             const inputData = {
//                 rollNo: inputValue.enteredNumber,
//                 name: inputValue.enteredName,
//                 emailId: inputValue.enteredEmail
//             }
//             dispatch(inputDataActions.setNewStudentInputData(inputData))
//         }enteredEmailconst dispatch = useDispatch()

//         const updatePageDataHandler = (pageValue) => {
//             dispatch(studentStateActions.updatePage(pageValue))
//         }
    
//         const updateScaleDataHandler = (scaleValue) => {
//             dispatch(studentStateActions.updateScale(scaleValue))
//         }
    
//         const updateStudentInputDataHandler = (inputValue) => {
//             const inputData = {
//                 rollNo: inputValue.enteredNumber,
//                 name: inputValue.enteredName,
//                 emailId: inputValue.enteredEmail
//             }
//             dispatch(inputDataActions.setNewStudentInputData(inputData))
//         }const dispatch = useDispatch()

//         const updatePageDataHandler = (pageValue) => {
//             dispatch(studentStateActions.updatePage(pageValue))
//         }
    
//         const updateScaleDataHandler = (scaleValue) => {
//             dispatch(studentStateActions.updateScale(scaleValue))
//         }
    
//         const updateStudentInputDataHandler = (inputValue) => {
//             const inputData = {
//                 rollNo: inputValue.enteredNumber,
//                 name: inputValue.enteredName,
//                 emailId: inputValue.enteredEmail
//             }
//             dispatch(inputDataActions.setNewStudentInputData(inputData))
//         }
//     }
//     dispatch(inputDataActions.setNewStudentInputData(inputData))
// }

export const inputDataActions = inputDataSlice.actions
export default inputDataSlice