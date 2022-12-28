import Banner from "../../components/dashboard components/perosnal data banner";
import Table from "../../components/dashboard components/personal files table"
import DocumentsTable from "../../components/dashboard components/documents table";
export default function Dashboard() {
    return(
        <>
            <Banner/>
            <Table/>
            <DocumentsTable/>
        </>
    )
}
