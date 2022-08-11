//import librery
import React from 'react';
import { Typography, TextField, Button, IconButton } from "@material-ui/core/";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Montserrat_ExtraBold from '../../static/Montserrat-ExtraBold.ttf';

//estilos de los componentes
const useStyles = makeStyles((theme) => ({
     
    titleAppHome: {
        fontSize: '5em',
        fontWeight: '800',
        fontFamily: Montserrat_ExtraBold,
        color: 'hsl(198deg 32% 16%)',
        textAlign: 'start',
    },
    textDescription: {
        alingSelf: 'start',
        fontSize: '1.2em',
        fontWeight: '500',
        fontFamily: Montserrat_ExtraBold,
        color: 'hsl(198deg 32% 16%)',
    },
    sedeTileIgle: {
        fontSize: '1.2em',
        fontWeight: '900',
        fontFamily: Montserrat_ExtraBold,
        color: 'hsl(198deg 32% 16%)',
    }

}));



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Titulo de la aplicacion /
*/
export function TitleApp(props) {

    const properties = (props.properties).properties;
    const classes = useStyles();

    return (

        <div className={properties['cls-6']}>
            <Typography className={classes.titleAppHome}> Iglesia App </Typography>
            <Typography className={classes.textDescription}>Iglesia Pentacostal Unidad de Colombia</Typography>
            <Typography className={classes.sedeTileIgle}>Sede: El Jordán</Typography>
        </div>

    );

}