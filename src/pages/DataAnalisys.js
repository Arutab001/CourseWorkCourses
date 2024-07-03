import React from 'react';
import { Typography, Grid, Paper } from "@mui/material";
import Footer from "../tags/Footer";

const UnityGameDevPage = () => {
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

    return (
        <div style={rootStyle}>
            <Typography variant="h3" style={titleStyle}>
                Роль разработчика игр на Unity
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Что делает разработчик игр на Unity?
                        </Typography>
                        <Typography variant="body1">
                            Разработчик игр на Unity занимается созданием игровых приложений и контента для различных платформ, используя игровой движок Unity. Они работают над проектированием, программированием игровой логики, созданием арт-активов и обеспечивают взаимодействие пользователя с игрой.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Программирование игровой логики
                        </Typography>
                        <Typography variant="body1">
                            Разработчики игр на Unity используют C# для программирования игровой логики, создания игровых механик, взаимодействия объектов и управления поведением игровых персонажей и элементов.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Создание арт-активов и дизайн игры
                        </Typography>
                        <Typography variant="body1">
                            В разработке игр на Unity, специалисты работают с различными инструментами для создания арт-активов, дизайна игровых уровней, анимаций, спецэффектов и обеспечения визуальной привлекательности игры.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Заключение
                        </Typography>
                        <Typography variant="body1">
                            Разработчики игр на Unity играют важную роль в создании захватывающих и увлекательных игровых проживаний. Их умение работать с игровыми технологиями и инструментами Unity определяет качество и успех игрового продукта.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default UnityGameDevPage;
