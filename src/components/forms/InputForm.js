import InputData from "./InputData";
import { useState } from "react";

const InputForm = (props) => {

    const [enteredNumber, setEnteredNumber] = useState("")
    const [enteredName, setEnteredName] = useState("")
    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredNumberTouched, setEnteredNumberTouched] = useState(false)
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

    const tagNames = props.tagNames

    const updateEnteredNumberHandler = (value) => {
        setEnteredNumber(value)
    }
    const updateEnteredNumberTouchedHandler = (value) => {
        setEnteredNumberTouched(value)
    }
    const updateEnteredNameHandler = (value) => {
        setEnteredName(value)
    }
    const updateEnteredNameTouchedHandler = (value) => {
        setEnteredNameTouched(value)
    }
    const updateEnteredEmailHandler = (value) => {
        setEnteredEmail(value)
    }
    const updateEnteredEmailTouchedHandler = (value) => {
        setEnteredEmailTouched(value)
    }

    const numberInputs = {
        enteredInput: enteredNumber,
        enteredInputTouched: enteredNumberTouched,
        tagName: tagNames[0],
        typeName: "number"
    }
    const nameInputs = {
        enteredInput: enteredName,
        enteredInputTouched: enteredNameTouched,
        tagName: tagNames[1],
        typeName: "text"
    }
    const emailInputs = {
        enteredInput: enteredEmail,
        enteredInputTouched: enteredEmailTouched,
        tagName: tagNames[2],
        typeName: "email"
    }

    const inputData = {
        enteredNumber: +enteredNumber,
        enteredName: enteredName,
        enteredEmail: enteredEmail
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()

        props.setInputData(inputData)

        setEnteredNumber("")
        setEnteredName("")
        setEnteredEmail("")
        setEnteredNumberTouched(false)
        setEnteredNameTouched(false)
        setEnteredEmailTouched(false)
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

export default InputForm;