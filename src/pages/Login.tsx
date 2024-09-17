import React, {useState, FC, useEffect} from "react";
import {Box, Button, Snackbar, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../const/Routes.ts";
import MuiAlert from '@mui/material/Alert';
import {RootState, store} from "../redux/store.ts";
import {login} from "../redux/login-signup/login-slice.ts";
import {connect} from "react-redux";

type StateObj = {
    username: string;
    password: string;
}

type AlertColor = 'success' | 'error' | 'info' | 'warning';

const Login: FC = (props: any) => {
    const navigate = useNavigate();
    const [stateObj, setStateObj] = useState<StateObj>({
        username: "",
        password: "",
    });
    const [open, setOpen] = useState(false);
    const [messageType, setMessageType] = useState<AlertColor>('success');
    const [message, setMessage] = useState('');

    function handleInput(event){
        const { name, value } = event.target;
        setStateObj({ ...stateObj, [name]: value });
    };

    function handleLogIn() {
        if (stateObj.username === "" || stateObj.password === "") {
            setOpen(true);
            setMessageType('error');
            setMessage("Please fill both fields");
        } else {
            const request = {
                username: stateObj.username,
                password: stateObj.password,
            }
            props.login(request);
        }
    };

    function handleForgotPassword() {
        navigate('/' + ROUTES.OTP, { replace: true });
    };

    function handleCreateAccount() {
        navigate('/' + ROUTES.SIGNUP, { replace: true });
    };

    function clearInputFields() {
        setStateObj({
            ...stateObj,
            username: "",
            password: ""
        });
    };

    const handleClose = (reason: any) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        if (props.isLoggedIn) {
            clearInputFields();
            navigate('/' + ROUTES.HOME, { replace: true });
        }
        if (props.error !== null) {
            setOpen(true);
            setMessageType('error');
            setMessage(props.error?.reason || "Internal Server Error");
        }
    }, [props.isLoggedIn, props.error]);

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

                        <TextField
                            id="username"
                            label="Username"
                            variant="standard"
                            name={"username"}
                            value={stateObj.username}
                            onChange={handleInput}
                        />
                        <TextField
                            id="pasword"
                            label="Password"
                            variant="standard"
                            name={"password"}
                            value={stateObj.password}
                            onChange={handleInput}
                            type="password"
                        />

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
                <Snackbar
                    open={open}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                    <MuiAlert
                        onClose={handleClose}
                        severity={messageType}
                        variant="filled"
                        sx={{width: '100%'}}
                    >
                        {message}
                    </MuiAlert>
                </Snackbar>
            </Box>
        </React.Fragment>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        isLoading: state.loginSignup.isLoading,
        error: state.loginSignup.error,
        isLoggedIn: state.loginSignup.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (request: any) => dispatch(login(request)),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Login);