import React from 'react';
import {Card, CardContent, CardHeader, Container, Grid, Typography} from "@mui/material";

const SmallBox = (props) => {

    const {header, content} = props;

    return (
        <Grid item xs={12} sm={4} md={3}>
            <Card
                sx={{maxWidth: 300
                    }}
                style={{width: '100%', height: '150%'}}>
                <CardContent sx={{ height: '100%'}}>
                    <Typography varian="h1" component="h1" sx={{fontWeight: 'bold', borderBottom: '1.5px solid black'}}>
                        {props.header}
                    </Typography>
                    <Typography variant="body" component="div" sx={{ height: '10vh', color: "gray", fontWeight: 'normal' }}>
                        {props.content}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default SmallBox;