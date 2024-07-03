import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {logoutUser, setUser} from "../tags/reduser";
import paymentDialog from "./PaymentDialog";
import PaymentDialog from "./PaymentDialog";

const SpecContainer = (props) => {
    
    const [openDialog, setOpenDialog] = useState(false);

    const handleBuyClick = () => {
        setOpenDialog(true)
    }

    const {name, description, price, image, linkto} = props;

    const navigate = useNavigate();

    const isLogginedIn = useSelector(state => props.currentUser.isLoggedIn)

    const NavigateTo = (props) => {
        navigate(props.linkto)
    }


    return (
        <Grid item xs={12} md={4} sd={2}>
            <Card sx={{maxWidth: 345}} style={{
                borderRadius: '8px',
                borderBottom: '2px solid black',
            }}>
                <CardMedia sx={{height: 300}}
                           image={props.image}
                           title={props.name}/>
                <CardContent>
                    <Typography guttenBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {isLogginedIn ? (
                        <Button size="large" onClick={handleBuyClick}>Buy</Button>
                    ) : (
                        <Button size="large" disabled>Buy</Button>
                    )}
                    {openDialog ? (<PaymentDialog open={openDialog} setOpenDialog={setOpenDialog}  />) : (<div></div>)}
                    <Link to={props.linkto}>
                        <Button size="large">Info</Button>
                    </Link>
                    <Typography>{props.price}Byn</Typography>
                </CardActions>
            </Card>
        </Grid>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
});

const mapDispatchToProps = {
    setUser,
    logoutUser,
};


export default connect(mapStateToProps, mapDispatchToProps)(SpecContainer);