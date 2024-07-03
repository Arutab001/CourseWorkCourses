import React from 'react';
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const GridItemHome = (props) => {

    const {name, text, image} = props

    return (
        <Grid item xs={12} sm={4} md={8}>
            <Card sx={{display: "flex", height: "45vh", width: "80vw",
                color: 'black', border: 1,
                borderColor: 'rgba(210,209,209,0.26)'}}>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <CardContent sx={{flex: "1 0 auto"}}>
                        <Typography component="div" variant="h5">
                            {props.name}
                        </Typography>
                        <Typography component="div" variant="subtitle1">
                            {props.text}
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{width: 450}}
                    image={props.image}
                />
            </Card>
        </Grid>
    );
};

export default GridItemHome;