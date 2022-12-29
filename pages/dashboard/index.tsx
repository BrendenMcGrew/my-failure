import Banner from "../../components/dashboard components/perosnal data banner";
import Table from "../../components/dashboard components/personal files table"
import DocumentsTable from "../../components/dashboard components/documents table";
import {useState, useEffect} from "react";
export default function Dashboard() {
    const [data, setData] = useState(0);
    useEffect(() => {
        const token = window.sessionStorage.getItem('token');
        fetch( 'http://localhost:6969/api/entity', {
    	    method: 'POST',
	    headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },    
            body: new URLSearchParams({
	        'token': token
	    })
	  }).then((res) => res.json())
	    .then((data) => {
	        setData(data)
            })
    }, []);
    return(
        <>
            <Banner data={data}/>
            <Table/>
            <DocumentsTable/>
        </>
    )
}
