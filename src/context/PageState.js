import MainContext from './MainContext';
import {useState} from 'react';

const PageState = (props) => {
    const [pageData, setPageData] = useState(0);
    const [scaleData, setScaleData] = useState(10);

    const update = (newPageData) => {
        setPageData(newPageData);
    }

    const updateScaleData = (newScaleData) => {
        setScaleData(newScaleData);
    }

    return (
        <MainContext.Provider value={{
                pageData: pageData,
                update: update,
                scaleData: scaleData,
                updateScaleData: updateScaleData
            }}>
            {props.children}
        </MainContext.Provider>
    );
}

export default PageState;