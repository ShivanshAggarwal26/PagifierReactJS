import Thead from './Thead';
import './Table.css';
import Tbody from './Tbody';
const Table = (props) => {
    const saveRowDataHandler = (rowData) => {
        props.onSaveRow(rowData);
    }

    return (
        <table>
            <Thead />
            <Tbody data={props.data} onSaveRowData={saveRowDataHandler} pageValue={props.pageValue}/>
            {/* <Tbody data={props.data} />  */}
        </table>
    )
}

export default Table;