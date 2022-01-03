import './Thead.css';

const Thead = (props) => {
    const headings = props.data;
    return (
        <thead>
            <tr>
                <th>{headings[0]}</th>
                <th>{headings[1]}</th>
                <th>{headings[2]}</th>
            </tr>
        </thead>
    );
}

export default Thead;