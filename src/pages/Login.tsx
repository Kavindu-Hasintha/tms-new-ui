import React from "react";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";

const Login = () => {

    function handleLogIn() {
        console.log("log in...");
    }

    function handleForgotPassword() {
        console.log("forgot password...");
    }

    function handleCreateAccount() {
        console.log("create account...");
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
                            LogIn
                        </Typography>

                        <TextField id="standard-basic" label="Username" variant="standard" />
                        <TextField id="standard-basic" label="Password" variant="standard" type="password" />

                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                textTransform: "none"
                            }}
                            onClick={handleLogIn}
                        >
                            LogIn
                        </Button>

                        <Button
                            sx={{
                                textTransform: "none"
                            }}
                            onClick={handleForgotPassword}
                        >
                            Forgot password ?
                        </Button>

                        <hr/>

                        <Button
                            sx={{
                                textTransform: "none"
                            }}
                            onClick={handleCreateAccount}
                        >
                            Create a new account
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Login;