import './Tbody.css';
import Trow from './Trow';

const Tbody = (props) => {
    const rows = props.data.map(item => {
            return <Trow data={item} key={item.rollNo} />
        }
    );
    props.onSaveRowData(rows);
    const page = props.pageValue;
    const scale = props.scaleValue;
    return (
        <tbody>
            {rows.slice(page, page + scale)}
        </tbody>
    )
}

export default Tbody;