import React, {useState} from "react";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../const/Routes.ts";
import {IUserSignup} from "../interfaces/IUserSignup.ts";

const Signup = () => {
    const navigate = useNavigate();
    const [ userData, setUserData ] = useState<IUserSignup>({
        fullName: "",
        email: "",
        username: "",
        password: "",
        rePassword: "",
        address: ""
    });

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    function handleSignup() {
        console.log("data = ", userData);
    }

    function handleGoToLogin() {
        navigate('/' + ROUTES.LOGIN, { replace: true });
    }

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    placeItems: "center",
                    minWidth: "200px",
                    minHeight: "96vh"
                }}
            >
                <Box
                    sx={{
                        marginX: 3,
                        padding: 2,
                        width: { xs: "100%", sm: "400px" },
                        boxShadow: 3,
                        borderRadius: "16px"
                    }}
                >
                    <Stack direction={"column"} spacing={2}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "medium"
                            }}
                        >
                            SignUp
                        </Typography>

                        <TextField
                            id="fullName"
                            label="Full Name"
                            variant="standard"
                            name={"fullName"}
                            value={userData.fullName}
                            onChange={handleInput}
                        />
                        <TextField
                            id="email"
                            label="Email"
                            variant="standard"
                            name={"email"}
                            value={userData.email}
                            onChange={handleInput}
                            type="email"
                        />
                        <TextField
                            id="username"
                            label="Username"
                            variant="standard"
                            name={"username"}
                            value={userData.username}
                            onChange={handleInput}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            variant="standard"
                            name={"password"}
                            value={userData.password}
                            onChange={handleInput}
                            type="password"
                        />
                        <TextField
                            id="rePassword"
                            label="Re-Password"
                            variant="standard"
                            name={"rePassword"}
                            value={userData.rePassword}
                            onChange={handleInput}
                            type="password"
                        />
                        <TextField
                            id="standard-basic"
                            label="Address"
                            variant="standard"
                            name={"address"}
                            value={userData.address}
                            onChange={handleInput}
                        />

                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                textTransform: "none"
                            }}
                            onClick={handleSignup}
                        >
                            SignUp
                        </Button>

                        <hr/>

                        <Button
                            sx={{
                                textTransform: "none"
                            }}
                            onClick={handleGoToLogin}
                        >
                            Already have an account ?
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Signup;