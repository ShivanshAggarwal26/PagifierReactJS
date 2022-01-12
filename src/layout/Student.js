import React from "react";
import GetStudentData from "../views/GetStudentData";
import Table from "../components/table/Table";
import Tabs from "../components/tabs/Tabs";
import { useSelector, useDispatch } from "react-redux";
import { studentStateActions } from "../store/student-slice";
import { inputDataActions } from "../store/input-data-slice";
import InputForm from "../components/forms/InputForm";

const Student = () => {
    const headings = [];
    headings.push("Roll Number");
    headings.push("Name");
    headings.push("Email Id");

    const studentState = useSelector((state) => {
        return state.studentState
    })

    const newStudentData = useSelector((state) => {
        return state.inputDataState.newStudentData
    })

    const page = studentState.pageData
    const scale = studentState.scaleData
    const newDataLength = newStudentData.length

    const dispatch = useDispatch()

    const updatePageDataHandler = (pageValue) => {
        dispatch(studentStateActions.updatePage(pageValue))
    }

    const updateScaleDataHandler = (scaleValue) => {
        dispatch(studentStateActions.updateScale(scaleValue))
    }

    const updateStudentInputDataHandler = (inputValue) => {
        const inputData = {
            rollNo: inputValue.enteredNumber,
            name: inputValue.enteredName,
            emailId: inputValue.enteredEmail
        }
        dispatch(inputDataActions.setNewStudentInputData(inputData))
    }

    const rows = <GetStudentData page={page} scale={scale} newStudentData={newStudentData}/>
    
    return (
        <div className="innerClass">
            <div className="tableClass">
                <Table headings={headings} rows={rows} />
            </div>
            <Tabs maxLength={50 + newDataLength}
                page={page} scale={scale}
                updatePageData={updatePageDataHandler}
                updateScaleData={updateScaleDataHandler} />
            <InputForm tagNames={headings}
                setInputData={updateStudentInputDataHandler}/>
        </div>
    )
}

export default Student