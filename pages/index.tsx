import Router from 'next/router'
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";


export default function Home(props: any) {
    useEffect(() => {
        const { pathname } = Router
        if (pathname == '/') {
            Router.push('/login');
        }
    }, [props]);

    return (
        <Typography
            variant="h4"
            component="div"
        >
            Redirecting to login...
        </Typography>
    )
}
