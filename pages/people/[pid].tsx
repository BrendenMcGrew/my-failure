import { useRouter } from 'next/router'
import PersonalFilesTable from "../../components/dashboard components/personal files table";
import Banner from "../../components/dashboard components/perosnal data banner";

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

function getPerson(personID:any): personStuff {
    return {
        FirstName: 'Steve',
        MiddleInitial: 'F',
        LastName: 'Jobs',
        Organization: '69 CSS',
        Rank: 'SrA',
        Office: 'UOD',
        Supervisor: 'Ligma',
    }
}

interface personStuff {
    FirstName: string,
    MiddleInitial: string,
    LastName: string,
    Organization: string,
    Rank: string,
    Office: string,
    Supervisor: string,
}
