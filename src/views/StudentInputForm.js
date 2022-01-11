import { useSelector, useDispatch } from "react-redux";
import { numberInputActions } from "../store/number-input-slice";
import { nameInputActions } from "../store/name-input-slice";
import { emailInputActions } from "../store/email-input-slice";
import { inputDataActions } from "../store/input-data-slice";
import InputData from "../components/forms/InputData";

const StudentInputForm = () => {

    // Importing data from Store
    const enteredNumber = useSelector((state) => {
        return state.numberInputSlice.enteredNumber
    })
    const enteredName = useSelector((state) => {
        return state.nameInputSlice.enteredName
    })
    const enteredEmail = useSelector((state) => {
        return state.emailInputSlice.enteredEmail
    })
    const enteredNumberTouched = useSelector((state) => {
        return state.numberInputSlice.enteredNumberTouched
    })
    const enteredNameTouched = useSelector((state) => {
        return state.nameInputSlice.enteredNameTouched
    })
    const enteredEmailTouched = useSelector((state) => {
        return state.emailInputSlice.enteredEmailTouched
    })

    const dispatch = useDispatch();

    // Updating state values
    const updateEnteredNumberHandler = (value) => {
        dispatch(numberInputActions.setEnteredNumber(value))
    }
    const updateEnteredNumberTouchedHandler = (value) => {
        dispatch(numberInputActions.setEnteredNumberTouched(value))
    }
    const updateEnteredNameHandler = (value) => {
        dispatch(nameInputActions.setEnteredName(value))
    }
    const updateEnteredNameTouchedHandler = (value) => {
        dispatch(nameInputActions.setEnteredNameTouched(value))
    }
    const updateEnteredEmailHandler = (value) => {
        dispatch(emailInputActions.setEnteredEmail(value))
    }
    const updateEnteredEmailTouchedHandler = (value) => {
        dispatch(emailInputActions.setEnteredEmailTouched(value))
    }

    const numberInputs = {
        enteredInput: enteredNumber,
        enteredInputTouched: enteredNumberTouched,
        tagName: "Roll Number",
        typeName: "number"
    }
    const nameInputs = {
        enteredInput: enteredName,
        enteredInputTouched: enteredNameTouched,
        tagName: "Name",
        typeName: "text"
    }
    const emailInputs = {
        enteredInput: enteredEmail,
        enteredInputTouched: enteredEmailTouched,
        tagName: "EmailId",
        typeName: "email"
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        dispatch(inputDataActions.setNewInputData({
            rollNo: +enteredNumber,
            name: enteredName,
            emailId: enteredEmail
        }));

        dispatch(numberInputActions.setEnteredNumber(""))
        dispatch(numberInputActions.setEnteredNumberTouched(false))
        dispatch(nameInputActions.setEnteredName(""))
        dispatch(nameInputActions.setEnteredNameTouched(false))
        dispatch(emailInputActions.setEnteredEmail(""))
        dispatch(emailInputActions.setEnteredEmailTouched(false))
    }
    
    return (
        <form className='inputForm'>
            <div className='control-group'>
                <InputData inputData={numberInputs} 
                            updateEnteredInput={updateEnteredNumberHandler}
                            updateEnteredInputTouched={updateEnteredNumberTouchedHandler}/>
                <InputData inputData={nameInputs} 
                            updateEnteredInput={updateEnteredNameHandler}
                            updateEnteredInputTouched={updateEnteredNameTouchedHandler}/>
                <InputData inputData={emailInputs} 
                            updateEnteredInput={updateEnteredEmailHandler}
                            updateEnteredInputTouched={updateEnteredEmailTouchedHandler}/>
                <div className='form-actions'>
                    <button onClick={formSubmissionHandler}>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default StudentInputForm