import { useRouter } from 'next/router'
import PersonalFilesTable from "../../components/dashboard components/personal files table";
import Banner from "../../components/dashboard components/perosnal data banner";
// @ts-ignore
import SwaggerClient from 'swagger-client';

export default function Post () {
    const router = useRouter()
    const { pid } = router.query
    const personInfo = getPerson(pid);

    return (
        <>
            <Banner data={{}}/>
            <PersonalFilesTable data={{}}/>
        </>
    )
}

function getPerson(personID:any): any {
    new SwaggerClient({
        url: 'https://dirt.af.mil/api.json',
        authorizations: { tokenAuthn:
                window.sessionStorage.getItem('token')
        }}).then((client:any) => client.apis.default.getSubInfo({personID}))
        .then((Response: any) => {
            console.log()
        })
}
