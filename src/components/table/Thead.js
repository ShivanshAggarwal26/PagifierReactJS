import './Thead.css';

const Thead = (props) => {
    const headings = props.data;
    let i = 0;
    const tableHeadings = headings.map((heading) => {
        return <th key={i++}>{heading}</th>
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