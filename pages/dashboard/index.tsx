import Banner from "../../components/dashboard components/perosnal data banner";
import DocumentsTable from "../../components/dashboard components/documents table";
import SubordinatesTable from "../../components/dashboard components/subordinates table";
import PersonalFilesTable from "../../components/dashboard components/personal files table";
import {useState, useEffect} from "react";
// @ts-ignore
import SwaggerClient from 'swagger-client';
export default function Dashboard() {
    const [data, setData] = useState(0);
    const [templates, setTemplates] = useState(0);
    useEffect(() => {
        new SwaggerClient({
            url: 'http://mydirt.af.mil:6969/api',
            authorizations: { tokenAuthn:
                    window.sessionStorage.getItem('token')
            }}).then((client:any) => client.apis.default.getInfo())
            .then((Response: any) => setData(Response.body))
	new SwaggerClient({
            url: 'http://mydirt.af.mil:6969/api',
            authorizations: { tokenAuthn:
                    window.sessionStorage.getItem('token')
            }}).then((client:any) => client.apis.default.getTemplates())
            .then((Response: any) => setTemplates(Response.body))
    }, []);
    

    return (
        <>
            <Banner data={data}/>
            <PersonalFilesTable data={data}/>
            <div className="grid grid-cols-1 sm:grid-cols-3 m-3 flex-auto sm:gap-10 space-y-3 sm:space-y-0">
            <DocumentsTable templates={templates}/>
            <SubordinatesTable subords={data.subordinates}/>
            </div>
        </>
     )
}
