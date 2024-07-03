import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./tags/Header";
import FrontEnd from "./pages/Front-End";
import {ThemeProvider} from "@mui/material";
import theme from "./pages/theme";
import {createStore} from "redux";
import {Provider} from "react-redux";
import userReducer from './tags/reduser'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(userReducer);

root.render(
    <React.StrictMode>
        <Router>
        <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
        </Provider>

        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
