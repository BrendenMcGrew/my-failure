import Banner from "../../components/dashboard components/perosnal data banner";
import DocumentsTable from "../../components/dashboard components/documents table";
import SubordinatesTable from "../../components/dashboard components/subordinates table";
import PersonalFilesTable from "../../components/dashboard components/personal files table";
export default function Dashboard() {
    return (
        <>
            <Banner/>
            <PersonalFilesTable/>
            <div className="grid sm:grid-cols-3 m-3 flex-auto sm:gap-10">
                <DocumentsTable/>
                <SubordinatesTable/>
            </div>
        </>
    )
}
