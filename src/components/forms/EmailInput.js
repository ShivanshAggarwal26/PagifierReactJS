import { useSelector, useDispatch } from "react-redux";
import { emailInputActions } from "../../store/email-input-slice";

const EmailInput = () => {
    const enteredEmail = useSelector((state) => {
        return state.emailInputSlice.enteredEmail;
    })

    const enteredEmailTouched = useSelector((state) => {
        return state.emailInputSlice.enteredEmailTouched;
    })

    const dispatch = useDispatch();

    const enteredEmailIsValid = enteredEmail.trim() !== '';
    const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched
    const emailInputChangeHandler = (event) => {
        dispatch(emailInputActions.setEnteredEmail(event.target.value));
    }

    const emailInputBlurHandler = () => {
        dispatch(emailInputActions.setEnteredEmailTouched(true));
    }

    const emailInputClasses = emailInputIsValid ? 'form-control invalid' : 'form-control';

    return (
        <div className={emailInputClasses}>
            <label htmlFor='name'>Email Id</label>
            <input type='email' id='name' onChange={emailInputChangeHandler} 
                    value={enteredEmail} onBlur={emailInputBlurHandler}/>
            {emailInputIsValid && <p className='error-text'>Email must not be empty</p>}
        </div>
    )
}

export default EmailInput