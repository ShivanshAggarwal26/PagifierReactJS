import './Thead.css';

const Thead = (props) => {
    const headings = props.data;
    const tableHeadings = headings.map((heading) => {
        return <th>{heading}</th>
    });
    return (
        <thead>
            <tr>
                {tableHeadings}
            </tr>
        </thead>
    );
}

export default Thead;