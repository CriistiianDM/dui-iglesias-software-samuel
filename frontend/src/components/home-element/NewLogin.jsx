//importar librerias
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button,IconButton } from "@material-ui/core/";
import Montserrat_ExtraBold from '../../static/Montserrat-ExtraBold.ttf';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


//estilos de los componentes
const useStyles = makeStyles((theme) => ({

    titleSection: {
        marginTop: theme.spacing(3),
        color: 'hsl(198deg 32% 16%)',
        textAlign: 'center',
        fontSize: '2.5em',
        fontWeight: 'bold',
        fontFamily: Montserrat_ExtraBold
    },
    titleSectionBottom: {
        marginTop: theme.spacing(3),
        color: 'hsl(198deg 32% 16%)',
        textAlign: 'center',
        fontSize: '1em',
        fontWeight: '300',
        fontFamily: Montserrat_ExtraBold
    },
    formControlBox: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        gridTemplateColumns: '100%',
        gridRowGap: '0.9em',
        width: '80%',
        height: '80%',
    },
    buttonSubmit: {
        backgroundColor: '#ff725e',
        color: '#fff',
        fontWeight: 'bold',
        height: '3em',
        fontSize: '1em',
        //hover
        '&:hover': {
            backgroundColor: '#ff725e',
        },
    },
    textField: {
        height: '3em',
        color: 'hsl(198deg 32% 16%)',
        backgroundColor: 'hsl(0deg 0% 92%)',
        //cambiar el color del placeholder
        '&::placeholder': {
            color: 'hsl(198deg 32% 16%)',
        },
        fontFamily: Montserrat_ExtraBold,
        //cambiar el color del borde cuando se selecciona el input
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'hsl(198deg 32% 16%) !important'
        },
        //cambiar el color de la letra del label
        '& .MuiFormLabel-root.Mui-focused': {
            color: 'hsl(198deg 32% 16%) !important'
        }

    },
    input: {
        backgroundColor: 'hsl(0deg 0% 92%)',
    },
    coloAux: {
        color: 'hsl(198deg 32% 16%)',
    },
    boxIcon: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        justifyItems: 'center',
        alignItems: 'center',
        height: '1em',
    }

}));



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : login de la aplicacion /
*/
export function NewLogin(props) {

    const properties = (props.properties).properties;
    const classes = useStyles();

    return (

        <div className={properties['cls-3']}>

            <div className={properties['cls-4']}>
                <Typography className={classes.titleSection}>Iniciar sesión</Typography>
                <div className={classes.formControlBox} noValidate autoComplete="off">
                    <TextField InputProps={{ className: classes.input }} className={classes.textField}  type='number' label="Usuario" variant="outlined" />
                    <TextField InputProps={{ className: classes.input }} className={classes.textField} type='password' label="Contraseña" variant="outlined" />
                    <Button className={classes.buttonSubmit} type="submit" color="primary" variant="contained">
                        Iniciar
                    </Button>
                </div>
                <div className={classes.boxIcon}>
                    <IconButton target="_blank" href="https://www.facebook.com/IPUC.IglesiaPentecostalUnidadeColombiaOficial" aria-label="menu">
                        <FacebookIcon className={classes.coloAux} fontSize="large" />
                    </IconButton>
                    <IconButton target="_blank" href="https://www.instagram.com/ipucoficial/" aria-label="menu">
                        <InstagramIcon className={classes.coloAux} fontSize="large" />
                    </IconButton>
                </div>
                <Typography className={classes.titleSectionBottom}>Olvidé mi contraseña</Typography>
            </div>

        </div>

    );

}
