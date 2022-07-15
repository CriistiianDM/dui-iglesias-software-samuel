import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import { createTheme, Grid} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';



const theme = createTheme({
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontFamily: 'Raleway, Arial'
     
    },
  });

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      marginLeft: "8em",
    },
  },
  styleTitleGrupos: {
    fontFamily: 'Raleway, Arial',
    color: 'black',
    fontSize: '3.3em !important',
    textAlign: 'center', 
    padding: '0.4em 0.4em', /* para centrar profundizar los textos, reduciendo los espacios. */ 
    /*hyphens: 'auto', */
    /* wordBreak: 'break-all' esta es para responsive pero con las letras quedando a la mitad y lo demás se pone en la siguiente linea, como un salto.  */
    '@media screen and (max-width:600px)': {
      fontSize: '2em !important'
    }
  },
  formControl: {
    display: Grid, 
    margin: theme.spacing(1),
    width: '20em',
    '@media screen and (max-width:280px)': {
      width: '12em'
    }
  },
  paperContainer: {
    height: 'auto',
    width: '100%',
    background: 'white',      
    padding: '0.7em 0.7em', 
    display: 'grid', 
    gridTemplateRows: '100%', 
    gridTemplateColumns: '100%',
    justifyItems: 'center',
    alignItems: 'center', 
    overflow: 'hidden' /* un objeto se pasa del limite del grid 100%, lo que hace es que lo desaparece para que no se muestre. */

},

}));


const error = () =>{


    <>
    <TextField error id="standard-error" label="Error" defaultValue="1"> </TextField>
    </>

}

export function Grupos(){

    //Styles. 
    const classes = useStyles();
    const theme = createTheme();
    const err = error();    

    theme.typography.h4 = {
        fontSize: '0rem',
        '@media (min-width:400px)': {
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '1.5rem',
        },
      };


    return (

        <>
        <div className={classes.paperContainer}>
        <FormControl className={classes.FormControl}>
        <Typography className={classes.styleTitleGrupos} variant="h2">Sección de grupos</Typography>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField onInput={err} id="outlined-required" label="Requerido" variant="outlined"/>
        </form>
        </FormControl>
        </div>
        </>

    );

}




