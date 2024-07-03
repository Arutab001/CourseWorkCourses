import React from 'react';
import {Typography, Button, Grid, Paper} from "@mui/material";
import Footer from "../tags/Footer";

const FrontEndPage = () => {
    const rootStyle = {
        flexGrow: 1,
        padding: '1rem',
    };

    const paperStyle = {
        padding: '1.5rem',
        textAlign: 'center',
        color: 'black',
    };

    const titleStyle = {
        marginBottom: '2.5rem',
        marginTop: '1.5rem',
        color: 'white',
        display: 'flex',
        justifyContent: "center"

    };

    const buttonStyle = {
        marginTop: '1rem',
    };

    return (
        <div style={rootStyle}>
            <Typography variant="h3" style={titleStyle}>
                Роль Front-End Разработчика
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Что делает Front-End Разработчик?
                        </Typography>
                        <Typography variant="body1">
                            Front-End Разработчик занимается созданием пользовательского интерфейса веб-приложений. Он обеспечивает визуальное представление данных и функциональность интерфейса, с которым взаимодействует пользователь.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Использование технологий
                        </Typography>
                        <Typography variant="body1">
                            Front-End Разработчики работают с HTML, CSS и JavaScript для создания интерактивных и отзывчивых пользовательских интерфейсов. Они также могут использовать библиотеки и фреймворки, такие как React, Angular или Vue.js для ускорения процесса разработки.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Оптимизация и адаптация
                        </Typography>
                        <Typography variant="body1">
                            Один из ключевых аспектов работы Front-End Разработчика - это обеспечение отзывчивости и адаптивности веб-приложений под различные устройства и разрешения экранов. Это включает в себя оптимизацию производительности и удобство использования на мобильных устройствах.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Заключение
                        </Typography>
                        <Typography variant="body1">
                            Front-End Разработчики играют важную роль в создании удобного и привлекательного пользовательского интерфейса. Они сочетают технические навыки с дизайнерским мышлением, чтобы обеспечить удовлетворение пользовательских потребностей.
                        </Typography>

                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default FrontEndPage;
