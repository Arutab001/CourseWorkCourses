import React, {useEffect, useRef, useState} from 'react';
import {
    CardContent,
    Container,
    Grid,
    Card,
    Typography,
    Box,
    makeStyles,
    Hidden,
    useTheme,
    useMediaQuery
} from "@mui/material";
import SmallBox from "../tags/smallBox";
import GridItemHome from "../tags/GridItemHome";
import Carousell from '../tags/Carousel'
import pep1 from "../images/Peapule1.jpg";
import pep2 from "../images/peapule2.jpg";
import pep3 from "../images/peapule3.jpg";
import pep4 from "../images/peapule4.jpg";
import Footer from "../tags/Footer";
import {useInView} from "react-intersection-observer";

const useStyles = (theme) => ({
    gridItem: {
        [theme.breakpoints.down('sm')]: {
            height: "100px", // Увеличиваем высоту на маленьких экранах
            marginBottom: theme.spacing(2), // Добавляем отступ вниз
        },
        [theme.breakpoints.down('md')]: {
            height: "100vh",
            marginBottom: theme.spacing(2),
        }
    },
});


const Home = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));



    const [show, setShowContainer] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setShowContainer(true);
        }, 1500);
    }, []);

    const [ref, inView] = useInView({
        threshold: 0,
    })


    return (
        <Container maxWidth="false" style={{paddingLeft: "0px", paddingRight: "0px"}}>
            <Container sx={{marginTop: '9vh', marginBottom: '7vh'}}>
                <Grid container spacing={2} rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid item xs={12} sm={6} className={classes.gridItem}>
                        <Card>
                            <CardContent sx={{
                                backgroundColor: '#27282c',
                                border: 1,
                                color: 'white',
                                borderColor: 'rgba(210,209,209,0.26)',
                                height: "37.1vh",
                                paddingBottom: "5vh",
                                borderRadius: '1px 1px'
                            }}>
                                <Typography variant="h6" component="p">ItArt - основа ваших знаний и дальнейшего
                                    развития в сфере айти. После прохождения наших курсов, мы обеспечиваем вам
                                    трудоустройство в крупнейших айти кампаниях Беларуси на различные
                                    специальности <br/>
                                    <Hidden only={['xs', 'md']}>Мы выпустили уже 0 отличных специалистов, которые продолжают свое развитие во многих
                                        айти кампаниях по всему миру </Hidden>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Hidden only={['xs', 'sm']}>
                        <Grid item md={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <CardContent sx={{
                                        backgroundColor: '#27282c',
                                        color: 'white',
                                        border: 1,
                                        borderColor: 'rgba(210,209,209,0.26)',
                                        borderRadius: '1px 1px'
                                    }}>
                                        <Typography variant="h7" component="p">Измените свою жизнь, став экспертом в
                                            области IT, с нашими высокоэффективными курсами!</Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={6}>
                                    <CardContent sx={{
                                        backgroundColor: '#27282c',
                                        color: 'white', border: 1,
                                        borderColor: 'rgba(210,209,209,0.26)'
                                    }}>
                                        <Typography variant="h7" component="p"> Станьте лидером в мире IT-инноваций с
                                            обучением,
                                            которое вдохновляет на достижение
                                            большего!</Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={6}>
                                    <CardContent sx={{
                                        backgroundColor: '#27282c',
                                        color: 'white', border: 1,
                                        borderColor: 'rgba(210,209,209,0.26)'
                                    }}>
                                        <Typography variant="h7" component="p"> Развивайте свой потенциал в IT с
                                            программами,
                                            адаптированными к современным
                                            требованиям рынка! </Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={6}>
                                    <CardContent sx={{
                                        backgroundColor: '#27282c',
                                        color: 'white',
                                        border: 1,
                                        borderColor: 'rgba(210,209,209,0.26)'
                                    }}>
                                        <Typography variant="h7" component="p"> Улучшите свои личные навыки
                                            программирования
                                            и
                                            кодинга,
                                            получите
                                            конкурентное преимущество на рынке
                                            труда вместе с нами!</Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
            <Hidden only={['xs', 'sm']}>
                <Container
                    maxWidth='false'
                    sx={{
                        marginTop: "5vh",
                        height: '60vh',
                        padding: "8%",
                        backgroundImage: "radial-gradient(26.76% 85.52% at 86.73% -12.86%,#c241ff 6.65%,#6b57ff 100%)",
                    }}
                    style={{width: '100vw'}}>

                    <Grid container spacing={10} direction="row" justifyContent="flex-start"
                          collumnspacing={{xs: 1, sm: 2, md: 3}}>
                        <SmallBox
                            header="Не зазубривание"
                            content="Мы не продаем курсы в формате видео, только live-общение и практика с ментором"/>
                        <SmallBox
                            header="Высокие рекомендации"
                            content="Большое количество наших выпускников смогли основать свою  айти кампанию"/>
                        <SmallBox
                            header="До 6 проектов"
                            content="По окончании курса вы сами сделаете себе в портофило до 6 проектов с нами"/>
                        <SmallBox
                            header="Поиск работы"
                            content="Активная помощь в поиске работы как в СНГ, так и ЕС, и США"/>
                    </Grid>
                </Container>
            </Hidden>
            <Container maxWidth="false" sx={{backgroundColor: 'white'}} ref={ref}
                       style={{opacity: inView ? 1 : 0, transition: 'opacity 2.5s ease-in-out'}}>
                {inView ? <Container>
                        <Typography variant="h4" compoent="h4" align="center"
                                    sx={{color: "black", marginBottom: "5vh", paddingTop: "5vh"}}>
                            Дистанционное обучение
                        </Typography>
                        <Container sx={{padding: "1%", boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)'}}>
                            <Grid container spacing={12}>
                                <GridItemHome
                                    name="прямая трансляция в ZOOM"
                                    text="Прямые трансляции будут в 2 смены, подключайтесь в любое удобное для вас время в онлайн-комнату, где будет проходить занятие. Вы сможете хажавать любые вопросы опытным специалистам в сфере IT"
                                    image={pep1}
                                />
                                <GridItemHome
                                    name="Упор на практику"
                                    text="Даем структурированные знания, востребованные сегодня на рынке труда. Никакой воды в обучении: только 15% теории и 85% практики. А также дополнительные 100% заботы от преподавателей сверху."
                                    image={pep2}
                                /><GridItemHome
                                name="Поддержка и забота"
                                text="За каждой группой закреплен опытный аккаунт-менеджер, который помогает в решении актуальных задач / вопросов по телефону, онлайн и лично. А преподаватели всегда готовы помочь на занятии и онлайн в Telegram."
                                image={pep3}
                            /><GridItemHome
                                name="Помощь в поиске работы"
                                text="Помогаем составить грамотное резюме. Учим, как готовиться к собеседованиям и успешно их проходить. Сотрудничаем с IT компаниями по трудоустройству."
                                image={pep4}
                            />


                            </Grid>
                        </Container>
                    </Container> :
                    <div></div>}
                <Container sx={{paddingBottom: '15vh'}}>
                    <Hidden only={['xs', 'sm']}>
                        <Typography variant="h4" compoent="h4" align="center"
                                    sx={{color: "black", marginTop: "5vh", marginBottom: "5vh"}}>
                            Наши выпускники
                        </Typography>

                        <Carousell/>
                    </Hidden>
                </Container>

            </Container>

            <Footer/>
        </Container>
    );
};

export default Home;