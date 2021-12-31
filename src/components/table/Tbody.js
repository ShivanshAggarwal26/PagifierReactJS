import './Tbody.css';
import Trow from './Trow';
import {useContext} from 'react';
import MainContext from '../../context/MainContext';

const Tbody = (props) => {
    const rows = props.data.map(item => {
            return <Trow data={item} key={item.rollNo} />
        }
    );
    props.onSaveRowData(rows);

    const ctx = useContext(MainContext);
    const page = ctx.pageData;
    const scale = ctx.scaleData;
    console.log(page);
    console.log("and" + scale);
    return (
        <tbody>
            {rows.slice(page, page + scale)}
        </tbody>
    )
}

export default Tbody;