import React, {useEffect, useState} from 'react';
import Trow from "../components/table/Trow";

const GetStudentData = (props) => {

    const [rowData, setRowData] = useState([]);

    const page = props.page;
    const scale = props.scale;
    const getStudentData = async (page = 0, scale = 0) => {
        const maxlen = 50;
        try {
            const response = await fetch('https://react-http-4d12b-default-rtdb.firebaseio.com/students.json');

            if (!response.ok) {
                throw new Error("Something is wrong");
            }
            const data = await response.json();

            const newData = [];

            for (let i = page; i < page + scale && i < maxlen; i++) {
                for (const key in data) {
                    newData.push({
                        rollNo: i,
                        name: data[key][i].name,
                        emailId: data[key][i].emailId
                    })
                }
            }

            const rows = newData.map((item) => {
                const itemData = [item.rollNo, item.name, item.emailId];
                return <Trow data={itemData} key={item.rollNo} />
            })

            setRowData(rows);

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getStudentData(page, scale);
    }, [page, scale]);
    return rowData;
}

export default GetStudentData;