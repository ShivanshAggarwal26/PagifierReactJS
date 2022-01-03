import EmployeeContext from "./EmployeeContext";
import { useState } from "react";

const EmployeeState = (props) => {
    const [pageData, setPageData] = useState(0);
    const [scaleData, setScaleData] = useState(10);

    const updatePage = (newPageData) => {
        setPageData(newPageData);
    }

    const updateScale = (newScaleData) => {
        setScaleData(newScaleData);
    }

    return (
        <EmployeeContext.Provider value={{
            pageData: pageData,
            scaleData: scaleData,
            updatePage: updatePage,
            updateScale: updateScale
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeState;