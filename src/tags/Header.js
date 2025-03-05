import React, {useState, useEffect} from 'react';
import '../App.css';
import {BrowserRouter as Router, Link, NavLink, Route, Routes} from "react-router-dom";
import FrontEnd from "../pages/Front-End";
import App from "../App"; // Создайте файл стилей для компонента
import Home from "../pages/Home";
import Specialities from "../pages/Specialities";
import {Box, TextField} from "@mui/material";
import BackEnd from "../pages/BackEnd";
import LogIn from "../LogIn";
import { connect } from 'react-redux';
import header from "../tags/Header.css";
import AI from "../pages/AI";
import MobileDeveloper from "../pages/MobileDeveloper";
import FullStackCSharpPage from "../pages/FullStack";
import UnityGameDevPage from "../pages/DataAnalisys";
import Footer from "./Footer";


const Header = () => {
    const [scrollDirection, setScrollDirection] = useState('up');

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                setScrollDirection('down');
            } else {
                // Скролл вверх
                setScrollDirection('up');
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const {onChange, value} = "";


    return (
        <header className={`.header ${scrollDirection === 'up' ? 'scrolling-down' : ''}`}>
            <Box className="scrolling-tag">
                <div className="header_left">

                </div>
                <div>
                    <Link to="/specialities"> Специальности </Link>
                </div>
                <div className="header_center">
                    <Link to="/"><p className="Logo">ItArt</p></Link>
                </div>
                <div>
                    Про нас
                </div>
                <div className="header_right">
                    

                </div>
            </Box>

                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/specialities" element={<Specialities/>}/>
                    <Route path="/front-end" element={<FrontEnd/>}/>
                    <Route path="/back-end" element={<BackEnd />}/>
                    <Route path="/ai" element={<AI />}/>
                    <Route path="/mobile" element={<MobileDeveloper />} />
                    <Route path="/full-stack" element={<FullStackCSharpPage />} />
                    <Route path="/unity" element={<UnityGameDevPage />} />

                </Routes>

        </header>
    );
};

export default Header;
