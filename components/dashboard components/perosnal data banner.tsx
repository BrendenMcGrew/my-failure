import {Card} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Banner({data}) {
    return(
        <>
            <Card className="max-w-full m-3 p-3 grid col-auto grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 space-y-3 lg:justify-items-center">
                <div className="mt-3">
                    <span>Full Name: </span>
                    <Typography>
                        {data.name}
                    </Typography>
                </div>
                <div>
                    <span>Rank: </span>
                    <Typography>
                        {data.rank}
                    </Typography>
                </div>
                <div>
                    <span>Organization: </span>
                    <Typography>
                        {data.org}
                    </Typography>
                </div>
                <div>
                    <span>Office Symbol: </span>
                    <Typography>
                        DOUV
                    </Typography>
                </div>
                <div>
                    <span>Duty Phone: </span>
                    <Typography>
                        888-8888
                    </Typography>
                </div>
                <div>
                    <span>Supervisor: </span>
                    <Typography>
                        {data.supervisor}
                    </Typography>
                </div>
            </Card>
        </>
    )
}

function getPersonalData() {

}
