import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { numberInputActions } from "../../store/number-input-slice";

const NumberInput = () => {
    const enteredNumber = useSelector((state) => {
        return state.numberInputSlice.enteredNumber;
    })

    const enteredNumberTouched = useSelector((state) => {
        return state.numberInputSlice.enteredNumberTouched;
    })

    const dispatch = useDispatch();

    const enteredNumberIsValid = enteredNumber.trim() !== "";
    const numberInputIsValid = !enteredNumberIsValid && enteredNumberTouched;

    // useEffect(() => {
    //     const numberValidation = (enteredNumberIsValid) => {
    //         if (enteredNumberIsValid) {
    //             dispatch(numberInputActions.setNumberInputValid(true));
    //         }
    //     }
    //     numberValidation(enteredNumberIsValid);
    // }, [numberValidation])
    
    const numberChangeHandler = (event) => {
        dispatch(numberInputActions.setEnteredNumber(event.target.value));
    }

    const numberTouchedBlurHandler = () => {
        dispatch(numberInputActions.setEnteredNumberTouched(true));
    }

    const numberInputClasses = numberInputIsValid ? 'form-control invalid' : 'form-control';

    return (
        <div className={numberInputClasses}>
            <label htmlFor='name'>Roll Number</label>
            <input type='number' id='name' onChange={numberChangeHandler} 
                    value={enteredNumber} onBlur={numberTouchedBlurHandler}/>
            {numberInputIsValid && <p className='error-text'>Number must not be empty</p>}
        </div>
    )
}

export default NumberInput