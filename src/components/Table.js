import Thead from './Thead';
import './Table.css';
import Tbody from './Tbody';
const Table = (props) => {
    const saveRowDataHandler = (rowData) => {
        props.onSaveRow(rowData);
    }

    return (
        // <div className='tableClass'>
        <table>
            <Thead />
            <Tbody data={props.data} onSaveRowData={saveRowDataHandler}
                    pageValue={props.pageValue} scaleValue={props.scale} />
            {/* <Tbody data={props.data} />  */}
        </table>
        // </div>
    )
}

export default Table;