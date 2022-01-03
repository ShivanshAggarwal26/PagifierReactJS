import './Tabs.css';
import Dropdown from '../dropdown/Dropdown';

const Tabs = (props) => {

    let page = props.page;
    let max = props.maxLength;

    let scale = props.scale;
    const firstClickHandler = () => {
        page = 0;
        props.updatePageData(page);
    }
    const previousClickHandler = () => {
        if (page < scale) {
            if (page === 0) {
                if (max % scale === 0) {
                    page = max - scale;
                } else {
                    page = max - (max % scale);
                }
            } else {
                page = 0;
            }
        } else {
            page -= scale;
        }
        props.updatePageData(page);
    }
    const nextClickHandler = () => {
        (page >= max - scale) ? page = 0: page += scale;
        props.updatePageData(page);
    }
    const lastClickHandler = () => {
        if (max % scale === 0) {
            page = max - scale;
        } else {
            page = max - (max % scale);
        }
        props.updatePageData(page);
    }

    const updateScaleValueHandler = (scaleValue) => {
        props.updateScaleData(scaleValue);
    }
    const pageNumber = Math.floor(page / scale) + 1;
    return (
        <div className='tabs'>
            <div className='first' onClick={firstClickHandler}>{'<<'}</div>
            <div className='previous' onClick={previousClickHandler}>{'<'}</div>
            <div>{pageNumber}</div>
            <div className='next' onClick={nextClickHandler}>{'>'}</div>
            <div className='last' onClick={lastClickHandler}>{'>>'}</div>
            <div></div>
            <Dropdown updateScaleValue={updateScaleValueHandler}/>
        </div>
    )
}

export default Tabs;