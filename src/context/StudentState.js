import StudentContext from "./StudentContext";
import { useState } from "react";

const StudentState = (props) => {
    const [pageData, setPageData] = useState(0);
    const [scaleData, setScaleData] = useState(10);

    const updatePage = (newPageData) => {
        setPageData(newPageData);
    }

    const updateScale = (newScaleData) => {
        setScaleData(newScaleData);
    }

    return (
        <StudentContext.Provider value={{
            pageData: pageData,
            scaleData: scaleData,
            updatePage: updatePage,
            updateScale: updateScale
        }}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentState;