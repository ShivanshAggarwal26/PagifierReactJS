const Trow = (props) => {
    return (
        <tr>
            <td>{props.data[0]}</td>
            <td>{props.data[1]}</td>
            <td>{props.data[2]}</td>
        </tr>
    );
}

export default Trow;