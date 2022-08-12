//librery or import
import { Icon, Typography } from "@material-ui/core";
import React from "react";
import styleGroup from "../../css/style_group.css";
import logoIglesia from '../../images/imagesHome/logo_iglesia.png';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Montserrat_ExtraBold from '../../static/Montserrat-ExtraBold.ttf';

//bienvenida a casa github copilot, te heche de menos, de verdad que te heche de menos, te quiero mucho


//estilos de los componentes
const useStyles = makeStyles((theme) => ({

    titleGroupAux: {
        //espacio entre el titulo y el texto
        marginTop: '1em',
        fontSize: '4em',
        color: 'hsl(198deg 32% 16%)',
        fontWeight: '600',
        fontFamily: Montserrat_ExtraBold,
    },
    iconStyleGroup: {
        height: '0.8em',
        color: 'hsl(198deg 32% 16%)',
        fontSize: '15em',
    },
    textGroupAux: {
        paddingBottom: '1em',
        color: 'hsl(198deg 32% 16%)',
        fontSize: '2em',
        fontWeight: '500',
        fontFamily: Montserrat_ExtraBold,
    }

}));




/**
 * @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 * @des grupo de la aplicacion /Account
 * @param {json} props 
 * @returns 
 */
export function Groups(props) {

    //variable de estado
    let state_group = props.properties;
    const classes = useStyles();

    //use state para obtener los datos del json
    const [data_array, set_data_array] = React.useState({
        loading: false,
    });

    //como un fressby va y vuelve - es una cansion githubcopilot
    return (

        <div className={state_group['cls-1']}>
            <Typography className={classes.titleGroupAux}> Tus Grupos </Typography>
            {
                (!data_array.loading) ? (
                    <div className={state_group['cls-9']}>
                        <Icon className={classes.iconStyleGroup}>groups</Icon>
                        <Typography className={classes.textGroupAux}> No Perteneces a Ningun Grupo </Typography>
                    </div>
                ) : null
            }
        </div>
    )

}