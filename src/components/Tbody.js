import './Tbody.css';
import Trow from './Trow';

const Tbody = (props) => {
    const rows = props.data.map(item => {
            
            return <Trow data={item} key={item.rollNo} />
        }
    );
    props.onSaveRowData(rows);
    const page = props.pageValue;
    return (
        <tbody>
            {rows.slice(page, page + 10)}
        </tbody>
    )
}

export default Tbody;