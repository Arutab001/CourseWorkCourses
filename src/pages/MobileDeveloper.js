import React from 'react';
import { Typography, Grid, Paper } from "@mui/material";
import Footer from "../tags/Footer";

const AndroidDevPage = () => {
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
                Роль разработчика на Android
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Что делает разработчик на Android?
                        </Typography>
                        <Typography variant="body1">
                            Разработчик на Android создает мобильные приложения и решения, специализированные для операционной системы Android. Они работают над различными аспектами приложений, от пользовательского интерфейса до функциональности, чтобы создать удобные и полезные приложения для устройств на базе Android.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Использование технологий
                        </Typography>
                        <Typography variant="body1">
                            Разработчики на Android используют Java или Kotlin для написания кода приложений. Они также работают с Android SDK, Android Studio и другими инструментами разработки для создания, отладки и тестирования приложений под устройства на базе Android.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Разработка и оптимизация
                        </Typography>
                        <Typography variant="body1">
                            Разработчики на Android заботятся о производительности, оптимизации и совместимости своих приложений с различными устройствами. Они проводят тестирование, внедряют лучшие практики разработки и улучшают пользовательский опыт.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Заключение
                        </Typography>
                        <Typography variant="body1">
                            Разработчики на Android играют важную роль в создании приложений для огромной базы пользователей устройств на базе Android. Их умение создавать инновационные и удобные приложения определяет пользовательский опыт на этой платформе.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default AndroidDevPage;
