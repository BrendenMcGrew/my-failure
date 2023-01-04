import * as React from "react"
import {Link, TextField} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import AFlogo from 'public/USAF_logo.png'
import Image from "next/image";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [token, setToken] = useState('')
    useEffect(() => {
        fetch( 'http://localhost:6969/api/get_token', {
    	    method: 'POST',
	    headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },    
            body: new URLSearchParams({
	        'pass': 'baba booey',
		'user': 'Luffy'
	    })
	  }).then((res) => res.json())
	    .then((data) => {
	        setToken(data.token)
            })
    }, []);
    useEffect(() => {
        sessionStorage.setItem('token', token);
    }, [token]);
    
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
                <TextField id="outlined-basic" label="Username" variant="outlined"/>
                <TextField
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
                <Button variant="contained" href='/dashboard'>Login</Button>
                <Link href="/">Need an account? Make one here</Link>
            </div>
        </>
    )
}
