import {useContext} from 'react';
import MainContainer from '../../context/MainContext';

const Dropdown = (props) => {
    const ctx = useContext(MainContainer);
    const dropdownHandler = (event) => {
        ctx.updateScaleData(+event.target.value);
    }
    return (
        <select onChange={dropdownHandler}>
            <option>{10}</option>
            <option>{15}</option>
        </select>
    )
}

export default Dropdown;