import React from 'react';
import '../App.css';
import {Box, Hidden, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Box sx={{display: "flex", flexDirection: "column", paddingLeft: "5vw"}}>
                    <Typography variant="h3" component="div"><Link to="/"><p
                        style={{color: "white", borderBottom: "1px solid white", width: "100%"}}>ItArt</p></Link>
                    </Typography>
                    <Typography variant="h5" component="div" sx={{color: "white"}}>Основа < br/> вашего < br/> будущего</Typography>
                </Box>
                <Hidden only={['xs', 'md']}>
                    <Box sx={{display: "flex", flexDirection: "column", paddingTop: '10vh'}}>
                        <Typography variant="h6" component="div" sx={{color: "white"}}>Front End</Typography>
                        <Typography variant="h6" component="div" sx={{color: "white"}}>Python</Typography>
                        <Typography variant="h6" component="div" sx={{color: "white"}}>Artificial
                            intelligence</Typography>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", paddingTop: '10vh'}}>
                        <Typography variant="h6" component="div" sx={{color: "white"}}>Android</Typography>
                        <Typography variant="h6" component="div" sx={{color: "white"}}>Full Stack C#</Typography>
                        <Typography variant="h6" component="div" sx={{color: "white"}}>Unity</Typography>
                    </Box>
                </Hidden>
                <Box sx={{display: "flex", flexDirection: "column", paddingTop: '10vh', paddingRight: '5vw'}}>
                    <Typography variant="h6" component="div" sx={{color: "white"}}>Cringe Inc.</Typography>
                    <Typography variant="h6" component="div" sx={{color: "white"}}>+1234567890</Typography>
                    <Typography variant="h6" component="div" sx={{color: "white"}}>evangelionenjoyerzxc@gmail.com</Typography>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;