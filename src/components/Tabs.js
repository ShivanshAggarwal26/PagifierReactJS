import './Tabs.css';

const Tabs = (props) => {
    let page = props.pageValue;
    let max = props.maxLength;
    const firstClickHandler = () => {
        page = 0;
        props.onTabClick(page);
    }
    const previousClickHandler = () => {
        (page === 0) ? (page = max - 10) : page -= 10;
        props.onTabClick(page);
    }
    const nextClickHandler = () => {
        (page === max - 10) ? page = 0: page += 10;
        props.onTabClick(page);
    }
    const lastClickHandler = () => {
        page = max - 10;
        props.onTabClick(page);
    }
    return (
        <div className='tabs'>
            <div className='first' onClick={firstClickHandler}>{'<<'}</div>
            <div className='previous' onClick={previousClickHandler}>{'<'}</div>
            <div className='next' onClick={nextClickHandler}>{'>'}</div>
            <div className='last' onClick={lastClickHandler}>{'>>'}</div>
        </div>
    )
}

export default Tabs;