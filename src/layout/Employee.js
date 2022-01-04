import React, { useContext } from "react";
import GetEmployeeData from "../views/GetEmployeeData";
import Table from "../components/table/Table";
import Tabs from "../components/tabs/Tabs";
import EmployeeContext from "../context/EmployeeContext";

const Employee = () => {
    const headings = [];
    const ctx = useContext(EmployeeContext);
    headings.push("Employee Number")
    headings.push("Name");
    headings.push("Email Id");
    const page = ctx.pageData;
    const scale = ctx.scaleData;

    const updatePageDataHandler = (pageValue) => {
        ctx.updatePage(pageValue);
    }

    const updateScaleDataHandler = (scaleValue) => {
        ctx.updateScale(scaleValue);
    }

    const rows = <GetEmployeeData page={page} scale={scale} />

    return (
        <div className="innerClass">
            <div className="tableClass">
                <Table headings={headings} rows={rows} />
            </div>
            <Tabs maxLength={50} 
                page={page} scale={scale}
                updatePageData={updatePageDataHandler}
                updateScaleData={updateScaleDataHandler}/>
        </div>
    )
}

export default Employee;