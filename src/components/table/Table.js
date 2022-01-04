import Thead from './Thead';
import './Table.css';
import Tbody from './Tbody';
const Table = (props) => {

    return (
        <table>
            <Thead data={props.headings}/>
            <Tbody rows={props.rows}/>
        </table>
    )
}

export default Table;