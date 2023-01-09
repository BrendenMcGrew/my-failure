import * as React from "react"
import {Alert, Link, Snackbar, TextField} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import AFlogo from 'public/USAF_logo.png'
import Image from "next/image";
// @ts-ignore
import SwaggerClient from 'swagger-client';
import {useRouter} from 'next/router'

export default function Login() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpenSnackBar] = React.useState(false);

    function tryLogin(username: string, password: string) {
        if (username && password) {

            new SwaggerClient({
		url: 'https://dirt.af.mil/api.json',
            }).then((client: any) => client.execute({
                operationId: "getToken",
                // parameters sends as url parameters, but I can't get body to send anything
                parameters: {
                    user: username,
                    pass: password
                },
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                // this sends creds over query params, on a POST request
                // I can't get it to send anything in request body
            })).then((data: any) => {
                    sessionStorage.setItem('token', data.body.token);
                    router.push('/dashboard');
            }).catch((reason: any) => {
                setOpenSnackBar(true);
            })
        }
    }

    return (
        <>
            <div className="w-1/3 space-y-3 flex items-center justify-center m-auto grid pt-10">
                <Image src={AFlogo} alt={'Air Force Logo'} className='max-w-xs h-auto mb-1 m-auto'/>
                <Typography
                    variant="h4"
                    component="div"
                    className="text-center text-gray-300"
                >
                    U.S. Air Force Login
                </Typography>

                <TextField
                    onChange={(my) => {
                        setUsername(my.target.value);
                    }}
                    id="outlined-basic" label="Username" variant="outlined"
                />
                <TextField
                    onChange={(my) => {
                        setPassword(my.target.value);
                    }}
                    label="Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
            />
                <Link href="/">Forgot Password?</Link>
                <Button variant="contained" onClick={() => {
                    tryLogin(username, password)
                }}>Login</Button>
                <Link href="/">Need an account? Make one here</Link>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    message="Note archived"
                    onClose={() => setOpenSnackBar(false)}
                >
                    <Alert severity="error">Incorrect username or password.</Alert>
                </Snackbar>
            </div>
        </>
    )
}
