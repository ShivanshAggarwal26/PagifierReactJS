const Trow = (props) => {
    return (
        <tr>
            <td>{props.data.rollNo}</td>
            <td>{props.data.name}</td>
            <td>{props.data.emailId}</td>
        </tr>
    );
}

export default Trow;