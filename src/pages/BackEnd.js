import React from 'react';
import { Typography, Button, Grid, Paper } from "@mui/material";
import Footer from "../tags/Footer";

const PythonDevPage = () => {
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
                Роль Python-разработчика
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Что делает Python-разработчик?
                        </Typography>
                        <Typography variant="body1">
                            Python-разработчик занимается созданием программного обеспечения с использованием языка программирования Python. Он разрабатывает приложения, веб-сервисы, скрипты, аналитические инструменты и многое другое.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Использование технологий
                        </Typography>
                        <Typography variant="body1">
                            Python-разработчики используют Python в сочетании с различными фреймворками, такими как Django, Flask, или FastAPI для создания веб-приложений, API и других программных решений. Они также могут работать с библиотеками для анализа данных, машинного обучения, искусственного интеллекта и автоматизации.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Разработка и оптимизация
                        </Typography>
                        <Typography variant="body1">
                            Python-разработчики создают эффективный и чистый код, обеспечивая функциональность и производительность программ. Они проводят тестирование, оптимизацию и поддержку созданных решений для обеспечения их стабильной работы.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Заключение
                        </Typography>
                        <Typography variant="body1">
                            Python-разработчики играют важную роль в создании разнообразных программных продуктов. Их умение работать с Python и его экосистемой позволяет создавать разнообразные и инновационные решения для различных сфер применения.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default PythonDevPage;
