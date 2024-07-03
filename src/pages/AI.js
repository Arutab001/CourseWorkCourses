import React from 'react';
import { Typography, Grid, Paper } from "@mui/material";
import Footer from "../tags/Footer";

const AIDevPage = () => {
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
                Роль AI-разработчика
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Что делает AI-разработчик?
                        </Typography>
                        <Typography variant="body1">
                            AI-разработчик занимается созданием и развитием систем и приложений, использующих искусственный интеллект для выполнения задач, которые требуют человеческого интеллекта. Это может включать в себя машинное обучение, обработку естественного языка, компьютерное зрение и другие аспекты AI.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Использование технологий
                        </Typography>
                        <Typography variant="body1">
                            AI-разработчики работают с различными инструментами и библиотеками, такими как TensorFlow, PyTorch, scikit-learn и другие, для создания моделей машинного обучения и решения задач искусственного интеллекта. Они также используют языки программирования, включая Python и другие, для реализации AI-приложений.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Разработка и инновации
                        </Typography>
                        <Typography variant="body1">
                            AI-разработчики создают и тестируют алгоритмы, разрабатывают модели машинного обучения, работают над оптимизацией и улучшением производительности систем искусственного интеллекта. Они также следят за последними трендами в области AI и применяют инновации в своей работе.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Заключение
                        </Typography>
                        <Typography variant="body1">
                            AI-разработчики играют ключевую роль в создании и развитии технологий искусственного интеллекта. Их умение создавать интеллектуальные системы приводит к новым возможностям в различных областях, от медицины до автоматизации и многого другого.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default AIDevPage;
