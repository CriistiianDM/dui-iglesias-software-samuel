import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createTheme, Grid} from '@material-ui/core';



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
          /*margin: theme.spacing(1),*/
          background: "white", 
          color: "white",
          width: '90%',
          flex: "none", 
          marginBottom: "2vh", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
        },
    },
    styleTitleSistemas: {
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
    styleTitle: {
        fontFamily: 'Raleway, Arial',
        color: 'black',
        fontSize: '2.1em !important',
        textAlign: 'center', 
        padding: '0.3em 0.3em', /* para centrar profundizar los textos, reduciendo los espacios. */ 
        /*hyphens: 'auto', */
        /* wordBreak: 'break-all' esta es para responsive pero con las letras quedando a la mitad y lo demás se pone en la siguiente linea, como un salto.  */
        '@media screen and (max-width:600px)': {
          fontSize: '1em !important'
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
      width: 'auto',
      background: 'auto',      
      padding: '0.7em 0.7em', 
      margin: "auto", 
      display: 'flex',
      flexWrap: "wrap",
      justifyContent: "space-between",    
      justifyItems: 'center',
      alignItems: 'center', 
      overflow: 'hidden' /* un objeto se pasa del limite del grid 100%, lo que hace es que lo desaparece para que no se muestre. */
  
  },
  
  }));


  /**
 * @Author: Juan Felipe Osorio Zapata - 2022752
 * A function that returns a form with the fields of the table.
 */
export function Comite(){

    const classes = useStyles(); 
    const theme = createTheme();



    theme.typography.h4 = {
        fontSize: '0rem',
        '@media (min-width:400px)': {
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '1.5rem',
        },
      };

      theme.typography.h1 = {
        fontSize: '0rem',
        '@media (min-width:400px)': {
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '1.5rem',
        },
      };

      return (

        <>

        <formControl className={classes.FormControl}>
        <h1 className={classes.styleTitleSistemas}>Cómite</h1>
        </formControl>

        <div className={classes.paperContainer}>

            <div className={classes.root}>
            <TextField id="outlined-required" label="ID" variant="outlined"/>
            </div>

            <div className={classes.root}>
            <TextField id="outlined-required" label="Nombre" variant="outlined"/>
            </div>

            <div className={classes.root}>
            <TextField id="outlined-required" label="Telefono" variant="outlined"/>
            </div>

            <div className={classes.root}>
            <TextField id="outlined-required" label="Correo" variant="outlined"/>
            </div>

            <div className={classes.root}>
            <TextField id="outlined-required" label="Sexo" variant="outlined"/>
            </div>


        </div>
        
        
        </>



      );



}

