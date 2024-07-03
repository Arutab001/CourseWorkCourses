import React from 'react';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";

const SliderCards = (props) => {

    const {key, name, description, image} = props;

    return (
        <Card sx={{display: "flex"}} key={props.key}>
            <Box sx={{display: "flex", flexDirection: "collumn"}}>
                <CardContent sx={{flex: "0 1 auto"}}>
                    <Typography component="div" varian="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        {props.description}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ widht: 300}}
                image={props.image}
                alt={props.name} />
        </Card>
    );
};

export default SliderCards;