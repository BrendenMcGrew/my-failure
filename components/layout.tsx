import Navbar from "./navbar";
import {useEffect} from "react";

export default function Layout({ children }: any) {

    let isLoggedIn;
    useEffect(() => {
        isLoggedIn = !!window.sessionStorage.getItem('token')
    }, []);
    return (
        <>
            {isLoggedIn && <Navbar/>}
            <main>{children}</main>
        </>
    )
}
