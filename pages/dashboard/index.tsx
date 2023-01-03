import Banner from "../../components/dashboard components/perosnal data banner";
import Table from "../../components/dashboard components/personal files table"
import DocumentsTable from "../../components/dashboard components/documents table";
import SubordinatesTable from "../../components/dashboard components/subordinates table";

export default function Dashboard() {
    return (
        <>
            <Banner/>
            <Table/>
            <div className="grid sm:grid-cols-3 m-3 flex-auto sm:gap-10">
                <DocumentsTable/>
                <SubordinatesTable/>
            </div>
        </>
    )
}
