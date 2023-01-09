import { useRouter } from 'next/router'
import PersonalFilesTable from "../../components/dashboard components/personal files table";
import Banner from "../../components/dashboard components/perosnal data banner";
// @ts-ignore
import SwaggerClient from 'swagger-client';
import {useEffect} from "react";

export default function Post () {
    const router = useRouter()
    const { pid } = router.query
    let personInfo;

    useEffect(() => {
        new SwaggerClient({
            url: 'https://dirt.af.mil/api.json',
            authorizations: { tokenAuthn:
                    window.sessionStorage.getItem('token')
            }}).then((client:any) => client.apis.default.getSubInfo({pid}))
            .then((Response: any) => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                personInfo = Response;
            })
    }, []);

    return (
        <>
            <Banner data={{}}/>
            <PersonalFilesTable data={{}}/>
        </>
    )
}
