const Dropdown = (props) => {

    const dropdownHandler = (event) => {
        props.updateScaleValue(+event.target.value);
    }

    return (
        <select onChange={dropdownHandler}>
            <option>{10}</option>
            <option>{15}</option>
        </select>
    )
}

export default Dropdown;