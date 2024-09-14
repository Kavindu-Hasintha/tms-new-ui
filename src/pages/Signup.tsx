import React from "react";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../const/Routes.ts";

const Signup = () => {
    const navigate = useNavigate();

    function handleSignup() {

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

                        <TextField id="standard-basic" label="Full Name" variant="standard" />
                        <TextField id="standard-basic" label="Email" variant="standard" type="email" />
                        <TextField id="standard-basic" label="Username" variant="standard" />
                        <TextField id="standard-basic" label="Password" variant="standard" type="password" />
                        <TextField id="standard-basic" label="Re-Password" variant="standard" type="password" />
                        <TextField id="standard-basic" label="Address" variant="standard" />

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