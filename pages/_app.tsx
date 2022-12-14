import '../styles/globals.css'
import Layout from "../components/layout";
import type {AppProps} from 'next/app'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {cyan, grey} from "@mui/material/colors";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#004F98'
        },
        secondary: {
            main: cyan[500]
        },
        text: {
            primary: grey[400]
        }
    },
});
export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}
