import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Login = () => {

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    placeItems: "center",
                    minWidth: "200px",
                    minHeight: "100vh"
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        width: "30%",
                        boxShadow: 3
                    }}
                >
                    <Stack direction={"column"}>
                        <Box>
                            <Typography>LogIn</Typography>
                        </Box>
                        <Box>
                            // Input fields
                        </Box>
                        <Box>
                            // Buttons
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Login;