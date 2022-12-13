import Navbar from "./navbar";

export default function Layout({ children }: any) {
    return (
        <>
            <Navbar></Navbar>
            <main>{children}</main>
        </>
    )
}
