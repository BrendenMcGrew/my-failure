import Banner from "../../components/dashboard components/perosnal data banner";
import Table from "../../components/dashboard components/personal files table"
import DocumentsTable from "../../components/dashboard components/documents table";
import {useState, useEffect} from "react";
import SwaggerClient from 'swagger-client';
export default function Dashboard() {
    const [data, setData] = useState(0);
    
    useEffect(() => {
        new SwaggerClient({
	    url: 'http://localhost:6969/api',
	    authorizations: { tokenAuthn:
	        window.sessionStorage.getItem('token')
    }}).then(client => client.apis.default.getInfo())
       .then(Response => setData(Response.body))
    }, []);
    return(
        <>
            <Banner data={data}/>
            <Table data={data}/>
            <DocumentsTable data={data}/>
        </>
    )
}
