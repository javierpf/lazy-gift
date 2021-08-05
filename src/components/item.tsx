import React from 'react';
import { Card, CardMedia, CardContent, Box, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Rating from '@material-ui/lab/Rating';
import PersonIcon from '@material-ui/icons/Person';

const item = {
    name: "Caña con pomelo",
    picture: "https://tresleones.com.py/wp-content/uploads/2021/05/leon-pomelo-1-895x1024.jpg",
    description: "Sabrosa bebida paraguaya tradicional",
    rate: 5.0,
    priceBracket: 50000,
    peopleCount: 3,
    sellerId: 1,
    category: "Bebidas espirituosas"
}

const useStyles = makeStyles({
    containerBox: {
        display: "block",
        overflow: "hidden",
        backgroundSize: "contain",
        width: 305,
        height: 600
    },
    media: {
        paddingTop: 50,
        display: "flex",
        height: 300,
        backgroundSize: "contain"
    },
    cardTitle: {
        display: "flex",
        justifyContent: "center"
    },
    category: {
        display: "flex",
        justifyContent: "center"
    },
    description: {
        paddingTop: 20,
        display: "flex",
        justifyContent: "center"
    },
    priceRating: {
        display: "flex",
        paddingTop: 20
    },
    rating: {
        display: "flex",
        justifyContent: "flex-end",
        flexGrow: 1
    },
    people: {
        display: "flex"
    },
    peopleNumber: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1
    },
    priceBracket: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1
    }
});
  

const ItemComp = () => {
    const classes = useStyles();
    return <Box className={classes.containerBox}>
        <Card>
            <CardMedia 
                className={classes.media}
                image={item.picture}
                title={item.name}
            />
            <CardContent>
                <Typography variant="h5" className={classes.cardTitle}>{item.name}</Typography>
                <Typography variant="caption" className={classes.category}>in: {item.category}</Typography>
                <Typography variant="body2" className={classes.description}>{item.description}</Typography>  
                <div className={classes.priceRating}>              
                    <LocalAtmIcon fontSize="small"/>
                    <div className={classes.priceBracket}>{item.priceBracket}</div>
                    <div className={classes.people}>
                        <PersonIcon fontSize="small"/>
                    <div className={classes.peopleNumber}>{item.peopleCount}</div>
                </div>
                    <div className={classes.rating}>
                        <Rating name="read-only" size="small" value={item.rate} readOnly/>
                    </div>
                </div>
            </CardContent>
        </Card>
    </Box>
}

export default ItemComp;