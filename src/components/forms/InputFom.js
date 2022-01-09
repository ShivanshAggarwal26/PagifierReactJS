import NumberInput from "./NumberInput";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import { useSelector, useDispatch } from "react-redux";
import { nameInputActions } from "../../store/name-input-slice";
import { numberInputActions } from "../../store/number-input-slice";
import { emailInputActions } from "../../store/email-input-slice";
// import { useEffect, useState } from "react";
import { inputDataActions } from "../../store/input-data-slice";

const InputForm = () => {
    // const [formIsValid, setformIsValid] = useState(false);

    // const nameInputValid = useSelector((state) => {
    //     return state.nameInputSlice.nameInputValid;
    // })
    
    // const numberInputValid = useSelector((state) => {
    //     return state.numberInputSlice.numberInputValid;
    // })
    
    // const emailInputValid = useSelector((state) => {
    //     return state.emailInputSlice.emailInputValid;
    // })
    // console.log(nameInputValid);
    // console.log("numberInputIsValid" + numberInputValid);
    // console.log("emailInputIsValid" + emailInputValid);
    
    // if (numberInputValid && nameInputValid && emailInputValid) {
    //     setformIsValid(true);
    //     console.log(formIsValid);
    // }

    const dispatch = useDispatch();

    const nameData = useSelector((state) => {
        return state.nameInputSlice.enteredName;
    })

    const numberData = useSelector((state) => {
        return state.numberInputSlice.enteredNumber;
    })

    const emailData = useSelector((state) => {
        return state.emailInputSlice.enteredEmail;
    })

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        console.log(numberData + " " + nameData + " " + emailData);

        dispatch(inputDataActions.setNewInputData({
            rollNo: +numberData,
            name: nameData,
            emailId: emailData
        }));

        dispatch(nameInputActions.setEnteredName(""));
        dispatch(nameInputActions.setEnteredNameTouched(false));

        dispatch(numberInputActions.setEnteredNumber(""));
        dispatch(numberInputActions.setEnteredNumberTouched(false));

        dispatch(emailInputActions.setEnteredEmail(""));
        dispatch(emailInputActions.setEnteredEmailTouched(false));
    }

    return (
        <form className='inputForm'>
            <div className='control-group'>
                <NumberInput />
                <NameInput />
                <EmailInput />
                <div className='form-actions'>
                    <button onClick={formSubmissionHandler}>Submit</button>
                </div>
            </div>
        </form>
    );
}

export default InputForm;