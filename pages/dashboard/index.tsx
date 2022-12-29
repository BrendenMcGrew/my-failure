import Banner from "../../components/dashboard components/perosnal data banner";
import DocumentsTable from "../../components/dashboard components/documents table";
import PersonalFilesTable from "../../components/dashboard components/personal files table";
export default function Dashboard() {
    return(
        <>
            <Banner/>
            <PersonalFilesTable/>
            <DocumentsTable/>
        </>
    )
}
