import React from "react";
import GetEmployeeData from "../views/GetEmployeeData";
import Table from "../components/table/Table";
import Tabs from "../components/tabs/Tabs";
import { inputDataActions } from "../store/input-data-slice";
import { useSelector, useDispatch } from "react-redux";
import {employeeStateActions} from "../store/employee-slice";
import InputForm from "../components/forms/InputForm";

const Employee = () => {
    const headings = [];
    headings.push("Employee Number");
    headings.push("Name");
    headings.push("Email Id");

    const employeeState = useSelector((state) => {
        return state.employeeState
    })

    const newEmployeeData = useSelector((state) => {
        return state.inputDataState.newEmployeeData
    })

    const page = employeeState.pageData
    const scale = employeeState.scaleData
    const newDataLength = newEmployeeData.length

    const dispatch = useDispatch()

    const updatePageDataHandler = (pageValue) => {
        dispatch(employeeStateActions.updatePage(pageValue))
    }

    const updateScaleDataHandler = (scaleValue) => {
        dispatch(employeeStateActions.updateScale(scaleValue))
    }

    const updateEmployeeInputDataHandler = (inputValue) => {
        const inputData = {
            empNo: inputValue.enteredNumber,
            name: inputValue.enteredName,
            emailId: inputValue.enteredEmail
        }
        dispatch(inputDataActions.setNewEmployeeInputData(inputData))
    }

    const rows = <GetEmployeeData page={page} scale={scale} newEmployeeData={newEmployeeData}/>

    return (
        <div className="innerClass">
            <div className="tableClass">
                <Table headings={headings} rows={rows} />
            </div>
            <Tabs maxLength={50 + newDataLength} 
                page={page} scale={scale}
                updatePageData={updatePageDataHandler}
                updateScaleData={updateScaleDataHandler}/>
            <InputForm tagNames={headings}
                setInputData={updateEmployeeInputDataHandler}/>
        </div>
    )
}

export default Employee