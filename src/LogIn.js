import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { connect } from 'react-redux';
import { setUser, logoutUser } from "./tags/reduser";
import axios from 'axios';
import Cookies from 'js-cookie';
import UserDataConsoleComponent from "./tags/test";

const LoginDialog = (props) => {
    useEffect(() => {
        console.log('Текущее состояние Redux:', props.currentUser);
    }, []);

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
        console.log(`Логин: ${login}, Пароль: ${password}`);
        setErrorMessage('');
        try {
            const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
                email: login,
                password: password
            });

            const accessToken = Cookies.get('access_token');

            if (response.data) {
                props.setUser({
                    username: login,
                    isLoggedIn: true
                });
                setErrorMessage(''); // Очистить сообщение об ошибке, если авторизация успешна
                handleClose();
            }
        } catch (error) {
            console.error('Auth failed:', error);
            setErrorMessage('Неверный логин или пароль');
        }
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8081/api/v1/auth/register', {
                email: login,
                password: password
            });

            const accessToken = Cookies.get('access_token');

            if (response.data) {
                props.setUser({
                    username: response.data.email,
                    isLoggedIn: true
                });
                setErrorMessage(''); // Очистить сообщение об ошибке, если регистрация успешна
                handleClose();
            }
        } catch (error) {
            console.error('Reg failed', error);
            setErrorMessage('Ошибка при регистрации');
        }
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
