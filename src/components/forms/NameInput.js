import { useSelector, useDispatch } from 'react-redux';
import { nameInputActions } from '../../store/name-input-slice';

const NameInput = () => {

    const enteredName = useSelector((state) => {
        return state.nameInputSlice.enteredName;
    })

    const enteredNameTouched = useSelector((state) => {
        return state.nameInputSlice.enteredNameTouched;
    })

    const dispatch = useDispatch();

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

    
    const nameInputChangeHandler = (event) => {
        dispatch(nameInputActions.setEnteredName(event.target.value));
    }

    const nameInputBlurHandler = () => {
        dispatch(nameInputActions.setEnteredNameTouched(true));
    }

    const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

    return (
        <div className={nameInputClasses}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' onChange={nameInputChangeHandler} 
                    value={enteredName} onBlur={nameInputBlurHandler}/>
            {nameInputIsValid && <p className='error-text'>Name must not be empty</p>}
        </div>
    )
}

export default NameInput