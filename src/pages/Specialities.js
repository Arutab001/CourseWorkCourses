import {BrowserRouter as Router, Route, Routes, Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    ImageListItem,
    Typography
} from "@mui/material";
import programmer from '../images/programmer2.jpg'
import FrontEndImg from '../images/frontEnd.jpg'
import PythonImg from '../images/_66592dbd-1e02-4dd5-aa3b-ff6c60a20e5b.jpg'
import AIImg from '../images/_fa45dc86-34b0-418b-8fa0-05f12149ec30.jpg'
import AndroidImg from '../images/Android.jpg'
import FullStackImg from '../images/FullStack.jpg'
import UnityImg from '../images/Unity.jpg'
import SpecContainer from "./SpecContainer";
import Footer from "../tags/Footer";

function Specialties() {
    const location = useLocation();

    return (
        <Container sx={{
            color: "#000000",
            fontFamily: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
            marginTop: '5vh',

        }}
            >
            <Grid container spacing={2} sx={{paddingRight: '1vw', color: 'white', marginLeft: 0, paddingBottom: '5vh', border: "1px solid black", borderRadius: "5px 5px"}} >
                <Grid item xs={6}>
                    <Typography variant="h4" component="h4" sx={{marginBottom: '5vh', }}>Гарантируем трудоустройтсво - или
                        вернем
                        деньги</Typography>
                    <Typography variant="h5" component="h5">Всем, кто купит курс с трудоустройством, мы поможем с
                        поиском работы
                        по новой специальности. Если у вас не получится найти работу, мы вернём деньги за
                        курс.</Typography></Grid>
                <Grid item xs={6}>
                    <CardMedia
                        component="img"
                        width="345"
                        height="300"
                        image={programmer}
                        title="Programmer"
                        style={{
                            borderRadius: '8px',
                            border: '0.5px solid black'
                        }}

                    />
                </Grid>
            </Grid>
            <Typography variant="h4" component="h4" sx={{color: 'white', display: "flex", justifyContent: "center", margin: "5vh"}}>Наши предложения </Typography>
            <Grid container spacing={10} sx={{backgroundColor: 'white', padding: "5vh 5vw 5vh 0vw"}} style={{width: "101vw"}}>
                <SpecContainer
                    name="Front End"
                    description="Начальные курсы верстки сайтов на react"
                    price={499}
                    image={FrontEndImg}
                    linkto="/front-end"
                />
                <SpecContainer
                    name="Python"
                    description="Курс по программированию на популярнейшем яп Python"
                    price={799}
                    image={PythonImg}
                    linkto="/back-end"
                />
                <SpecContainer
                    name="Artificiant Intelligence"
                    description="Вступите в ногу со временем и начните создавать свои ИИ"
                    price={999}
                    image={AIImg}
                    linkto="/AI"
                />
                <SpecContainer
                    name="Android"
                    description="Курсы по разработке приложений на смартфоны "
                    price={499}
                    image={AndroidImg}
                    linkto="/mobile"
                />
                <SpecContainer
                    name="Full Stack C#"
                    description="Научитесь разрабатывать свои сервисы на С#"
                    price={749}
                    image={FullStackImg}
                    linkto="/full-stack"
                />
                <SpecContainer
                    name="Unity"
                    description="Научитесь основам разработки игр с нашим курсом на Unity"
                    price={799}
                    image={UnityImg}
                    linkto="/unity"
                />
            </Grid>
            <Outlet/>
            <Footer />
        </Container>
    );
}


export default Specialties;
