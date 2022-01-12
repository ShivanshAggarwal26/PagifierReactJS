import React, {useEffect, useState} from 'react';
import Trow from "../components/table/Trow";

const GetStudentData = (props) => {

    const [rowData, setRowData] = useState([]);

    const page = props.page;
    const scale = props.scale;
    const newStudentData = props.newStudentData
    const getStudentData = async (page = 0, scale = 0, newStudentData) => {
        const maxlen = 50;
        try {
            const response = await fetch('https://react-http-4d12b-default-rtdb.firebaseio.com/students.json');

            if (!response.ok) {
                throw new Error("Something is wrong");
            }
            const data = await response.json();

            let newData = [];

            for (let i = page; i < page + scale && i < maxlen; i++) {
                for (const key in data) {
                    newData.push({
                        rollNo: i + 1,
                        name: data[key][i].name,
                        emailId: data[key][i].emailId
                    })
                }
            }

            const newDataLength = newData.length
            if (newDataLength === 0) {
                newData = newData.concat(newStudentData.slice(page - maxlen, page - maxlen + scale))
                console.log(newData)
            } else if (newDataLength < scale) {
                const remainingDataLength = scale - newDataLength
                newData = newData.concat(newStudentData.slice(0, remainingDataLength))
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
        getStudentData(page, scale, newStudentData)
    }, [page, scale, newStudentData])
    return rowData
}

export default GetStudentData