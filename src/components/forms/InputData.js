const InputData = (props) => {

    const inputData = props.inputData;
    const enteredInput = inputData.enteredInput;
    const enteredInputTouched = inputData.enteredInputTouched;
    const tagName = inputData.tagName;
    const typeName = inputData.typeName;

    const enteredInputIsValid = enteredInput.trim() !== "";
    const dataInputIsValid = !enteredInputIsValid && enteredInputTouched;

    const inputChangeHandler = (event) => {
        props.updateEnteredInput(event.target.value);
    }

    const inputBlurHandler = () => {
        props.updateEnteredInputTouched(true);
    }

    const dataInputClasses = dataInputIsValid ? "form-control invalid" : "form-control";

    return (
        <div className={dataInputClasses}>
            <label htmlFor="name">{tagName}</label>
            <input type={typeName} id="name" value={enteredInput}
                    onChange={inputChangeHandler} onBlur={inputBlurHandler}/>
            {dataInputIsValid && <p className="error-text">{tagName} must not be empty</p>}
        </div>
    )
}

export default InputData