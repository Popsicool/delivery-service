import {format} from 'date-fns'
const COLUMNS = [
    {
        Header: "Id",
        accessor: "id"
    },
    {
        Header: "Date",
        accessor: "date",
        Cell: ({value}) => { return format( new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header: "Source",
        accessor: "source"
    },
    {
        Header: "Destination",
        accessor: "destination"
    },
    {
        Header: "Amount",
        accessor: "amount"
    },
    {
        Header: "Status",
        accessor: "status"
    },
]

const data = [
    { id:1,date: "2023-04-12", source: "Nairobi", destination: "Isiolo", amount: 50000, status: "In-Transit" },
    { id:2,date: "2023-05-12", source: "Nairobi", destination: "Keroka", amount: 90000, status: "Assigned" },
    { id:3,date: "2023-06-12", source: "Nairobi", destination: "Londiani", amount: 17000, status: "Delivered" },
    { id:4,date: "2023-07-12", source: "Nairobi", destination: "Lodwar", amount: 23000, status: "Delivered" },
    { id:5,date: "2023-08-12", source: "Nairobi", destination: "Kisii", amount: 45000, status: "Delivered" },
    { id:6,date: "2023-09-12", source: "Nairobi", destination: "Bondo", amount: 30000, status: "Delivered" },
    { id:7,date: "2023-10-12", source: "Nairobi", destination: "Meru", amount: 30000, status: "Delivered" },
    { id:8,date: "2023-07-12", source: "Nairobi", destination: "Lodwar", amount: 30000, status: "Delivered" },
    { id:9,date: "2023-08-12", source: "Nairobi", destination: "Kisii", amount: 30000, status: "Delivered" },
    { id:10,date: "2023-09-12", source: "Nairobi", destination: "Bondo", amount: 30000, status: "Delivered" },
    { id:11,date: "2023-10-12", source: "Uganda", destination: "Meru", amount: 30000, status: "Delivered" },
    { id:12,date: "2023-09-12", source: "Nairobi", destination: "Bondo", amount: 30000, status: "Delivered" },
    { id:13,date: "2023-10-12", source: "Uganda", destination: "Meru", amount: 30000, status: "Delivered" },
]
export {COLUMNS, data}