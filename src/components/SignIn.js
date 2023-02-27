import { Box, Button, TextField } from '@material-ui/core';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { lightGreen, red } from '@mui/material/colors';
import signInImage from '../images/SignInImage.png';

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [emailErrorS, setEmailError] = useState("");
    const [passwordErrorS, setPasswordError] = useState("");

    const navigate = useNavigate();

    const homePage = () => {
        navigate("/pokedex")
    }

    useEffect((e) => {
        if (passwordErrorS || emailErrorS) {
            alert(JSON.stringify({ emailError: emailErrorS, passwordError: passwordErrorS }));
        }
    }, [passwordErrorS, emailErrorS])

    const handleEmailInputChange = function (e) {
        console.log("Hi from handleEmailInputChange");
        setEmail(e.target.value);
    }

    const handlePasswordInputChange = function (e) {
        console.log("Hi from handlePasswordInputChange");
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleRememberMeInputChange = function (e) {
        console.log("Hi from handleRememberMeInputChange");
        setRememberMe(!rememberMe);
    }

    const handleSubmit = function (e) {
        let emailError = "";
        let passwordError = "";

        if (!email) {
            emailError = "Email can't be empty";
            setEmailError(emailError);
        }

        if (password === "") {
            passwordError = "Password can't be empty";
            setPasswordError(passwordError);
        } else if (password.length < 8) {
            console.log(password.length)
            passwordError = "Password should be at least 8 characters";
            setPasswordError(passwordError);
        }

        if (emailError || passwordError) {
            setEmailError(emailError);
            setPasswordError(passwordError);

            e.preventDefault();
        } else {
            //alert(JSON.stringify({email: email, password: password, rememberMe: rememberMe}));
            homePage();
        }
    }

    return (

        <Card sx={{ width: 345, marginTop: '20px', border: '15px solid', borderRadius: '10px', borderColor: red[500] }}>
            <CardHeader sx={{ backgroundColor: red[300] }}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {"P"}
                    </Avatar>
                }
                titleTypographyProps={{ variant: 'h4', alig: 'left', textTransform: 'uppercase' }}
                title={"Pokedex"}
                subheader={"SignIn"}
            />
            <CardMedia
                sx={{
                    width: '350px',
                    height: '300px',
                    backgroundColor: lightGreen[100]
                }}
                image={signInImage}
                title={"name"}
            />

            <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'top', backgroundColor: red[300] }} >

                <Box display="flex" justifyContent="center" mt={4}>
                    <form onSubmit={handleSubmit}>
                        <TextField sx={{ backgroundColor: red[300] }}
                            label="email"
                            value={email}
                            onChange={handleEmailInputChange}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={handlePasswordInputChange}
                            margin="normal"
                            variant="outlined"
                        />
                        <Box mt={2}>
                            <Button variant="contained" color="primary" type="submit">
                                Sign in
                            </Button>
                        </Box>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={handleRememberMeInputChange}
                                    name="rememberMe"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                    </form>
                </Box>


            </CardContent>
        </Card>
    );
}
export default SignIn;
