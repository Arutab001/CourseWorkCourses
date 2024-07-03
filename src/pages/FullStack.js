import React from 'react';
import { Typography, Grid, Paper } from "@mui/material";
import Footer from "../tags/Footer";

const FullStackCSharpPage = () => {
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
                Роль Full Stack-разработчика на C#
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Что делает Full Stack-разработчик на C#?
                        </Typography>
                        <Typography variant="body1">
                            Full Stack-разработчик на C# занимается созданием и разработкой полнофункциональных веб-приложений, работая как с фронтендом (клиентской стороной), так и с бэкендом (серверной стороной). Они обладают знаниями и опытом как в разработке пользовательского интерфейса, так и в создании серверных приложений.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Фронтенд-разработка
                        </Typography>
                        <Typography variant="body1">
                            Full Stack-разработчики на C# используют технологии, такие как HTML, CSS, JavaScript, а также фреймворки и библиотеки, например, ASP.NET, для создания интерактивных и отзывчивых пользовательских интерфейсов.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Бэкенд-разработка
                        </Typography>
                        <Typography variant="body1">
                            На бэкенде Full Stack-разработчики на C# работают с технологиями, такими как ASP.NET Core, Entity Framework, SQL Server и другими инструментами для создания серверной логики, баз данных и обработки запросов от клиентов.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                        <Typography variant="h5">
                            Заключение
                        </Typography>
                        <Typography variant="body1">
                            Full Stack-разработчики на C# обладают широким спектром навыков, позволяющих им создавать и поддерживать полноценные веб-приложения от их пользовательской части до бизнес-логики и баз данных.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default FullStackCSharpPage;
