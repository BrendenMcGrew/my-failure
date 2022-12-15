import {Card} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Banner() {
    return(
        <>
            <Card className="max-w-full m-3 p-3 grid col-auto grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 space-y-3 lg:justify-items-center">
                <div className="mt-3">
                    <span>Full Name: </span>
                    <Typography>
                        John Doe Snuffy
                    </Typography>
                </div>
                <div>
                    <span>Rank: </span>
                    <Typography>
                        A1C
                    </Typography>
                </div>
                <div>
                    <span>Organization: </span>
                    <Typography>
                        552 ACNS
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
                        Doe John Smith
                    </Typography>
                </div>
            </Card>
        </>
    )
}

function getPersonalData() {

}
