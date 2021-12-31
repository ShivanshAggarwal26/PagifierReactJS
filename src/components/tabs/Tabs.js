import './Tabs.css';
import Dropdown from '../dropdown/Dropdown';
import {useContext} from 'react';
import MainContext from '../../context/MainContext';

const Tabs = (props) => {
    const ctx = useContext(MainContext);

    let page = ctx.pageData;
    let max = props.maxLength;

    let scale = ctx.scaleData;
    const firstClickHandler = () => {
        page = 0;
        ctx.update(page);
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
        ctx.update(page);
    }
    const nextClickHandler = () => {
        (page >= max - scale) ? page = 0: page += scale;
        ctx.update(page);
    }
    const lastClickHandler = () => {
        if (max % scale === 0) {
            page = max - scale;
        } else {
            page = max - (max % scale);
        }
        ctx.update(page);
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
            <Dropdown />
        </div>
    )
}

export default Tabs;