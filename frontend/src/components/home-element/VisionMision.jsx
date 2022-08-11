//libreria
import React from 'react';
import { Typography, TextField, Button, IconButton } from "@material-ui/core/";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Montserrat_ExtraBold from '../../static/Montserrat-ExtraBold.ttf';


//estilos de los componentes
const useStyles = makeStyles((theme) => ({

    titleAuxVision: {
        color: '#ff725e',
        fontSize: '1.4em',
        fontWeight: '600',
        fontFamily: Montserrat_ExtraBold,
    },
    textDescriptionAux: {
        color: 'hsl(198deg 32% 16%)',
        fontSize: '1em',
        fontWeight: '500',
        fontFamily: Montserrat_ExtraBold,
    }

}));

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Vision y Mision de la aplicacion /
*/
export function VisionMision(props) {
     
    const properties = (props.properties).properties;
    const classes = useStyles();

    return (
        <div className={properties['cls-7']}>
            <div className={properties['cls-8']}>
                <Typography className={classes.titleAuxVision}>Misión</Typography>
                <Typography className={classes.textDescriptionAux}>Id por todo el mundo y predicad el evangelio a toda criatura" San Marcos 16:15</Typography>
            </div>
            <div className={properties['cls-8']}>
                <Typography className={classes.titleAuxVision}>Visión</Typography>
                <Typography className={classes.textDescriptionAux}>Alcanzar a todos los que podamos; ganar a todos los que alcancemos; formar a todos los que ganemos; y usar a todos los que formemos.</Typography>
            </div>
        </div>
    );
}