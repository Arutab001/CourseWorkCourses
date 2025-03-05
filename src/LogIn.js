import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { connect } from 'react-redux';
import { setUser, logoutUser } from "./tags/reduser";
import axios from 'axios';
import UserDataConsoleComponent from "./tags/test";

const LoginDialog = (props) => {

    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setErrorMessage(''); // Очистить сообщение об ошибке при закрытии окна
    };

    const handleLogout = () => {
        props.logoutUser();
        handleClose();
    };

    const handleLogin = async () => {

    };

    const handleRegister = async () => {
       
    };

    return (
        <div>
            {props.currentUser.isLoggedIn ? (
                <div>
                    <p>Здравствуйте, {props.currentUser.username}!
                        <Button variant="outlined" sx={{border: "none", color: "black"}} onClick={handleLogout}>
                            Выйти
                        </Button>
                    </p>
                </div>
            ) : (
                <Button variant="contained" onClick={handleOpen}>
                    Войти
                </Button>
            )}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Авторизация</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Логин"
                        type="text"
                        fullWidth
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Пароль"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errorMessage && (
                        <p style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</p>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Отмена
                    </Button>
                    <Button onClick={handleLogin} color="primary">
                        Войти
                    </Button>
                    <Button onClick={handleRegister}>
                        Зарегистрироваться
                    </Button>
                </DialogActions>
            </Dialog>
            <UserDataConsoleComponent />
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
    setUser: userData => dispatch(setUser(userData)),
    logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
