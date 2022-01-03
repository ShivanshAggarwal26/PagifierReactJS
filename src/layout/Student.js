import React, { useContext } from "react";
import GetStudentData from "../views/GetStudentData"
import Table from "../components/table/Table";
import Tabs from "../components/tabs/Tabs";
import StudentContext from "../context/StudentContext";

const Student = () => {
    const headings = [];
    const ctx = useContext(StudentContext);
    headings.push("Roll Number");
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

    const rows = <GetStudentData page={page} scale={scale} />
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

export default Student;