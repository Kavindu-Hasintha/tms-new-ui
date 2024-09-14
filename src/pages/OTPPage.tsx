import React, {FC, useEffect, useState} from "react";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";

const OTPPage: FC = (props: any) => {
    const [ isForgotPassword, setIsForgotPassword ] = useState(true);
    const [ changePassword, setChangePassword ] = useState(true);

    function handleForgotEmail() {

    }

    function handleOTPCode() {

    }

    function handleNewPassword() {

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
                            variant="h5"
                            sx={{
                                fontWeight: "medium"
                            }}
                        >
                            {isForgotPassword ? "Forgot Password" : "Confirm Your Email"}
                        </Typography>

                        <Stack
                            direction={"column"}
                            spacing={2}
                            sx={{
                                display: isForgotPassword ? "flex" : "none"
                            }}
                        >
                            <TextField id="standard-basic" label="Enter your email" variant="standard" />
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                    textTransform: "none"
                                }}
                                onClick={handleForgotEmail}
                            >
                                Verify email address
                            </Button>
                        </Stack>

                        <TextField id="standard-basic" label="OTP code" variant="standard" />

                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                textTransform: "none"
                            }}
                            onClick={handleOTPCode}
                        >
                            Submit
                        </Button>

                        <Stack
                            direction={"column"}
                            spacing={2}
                            sx={{
                                display: changePassword ? "flex" : "none"
                            }}
                        >
                            <TextField id="standard-basic" label="New password" variant="standard" type="password" />
                            <TextField id="standard-basic" label="Re-enter password" variant="standard" type="password" />

                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: "none"
                                }}
                                onClick={handleNewPassword}
                            >
                                Save new password
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default OTPPage;