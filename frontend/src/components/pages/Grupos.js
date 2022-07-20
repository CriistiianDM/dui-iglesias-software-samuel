import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Select, Input, InputLabel, FormHelperText, createTheme, Grid, FormControl } from '@material-ui/core';


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
        position: '100px', 
        justifyItems: 'center', 
      },
  },
  archivo: {
    '& > *': {
      margin: theme.spacing(1.5),
      width: '25ch',
      background: 'auto', 
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
    height: '190px',
    width: 'auto',
    position: 'auto',
    background: 'auto',
    webkitBoxShadow: '-2px 0px 9px 1px rgba(0,0,0,0.89)', 
    boxShadow: '-1px 0px 10px 2px rgba(0,0,0,0.89);',       
    padding: '0.8em 0.8em', 
    margin: "auto",
    marginBottom: 'auto',  
    display: 'flex',
    justifyContent: "space-between",    
    justifyItems: 'center',
    alignItems: 'center', 
    overflow: 'hidden' /* un objeto se pasa del limite del grid 100%, lo que hace es que lo desaparece para que no se muestre. */

},
  divBoton: {
    position: 'center', 
    display: 'flex',
    textAlign: 'center', 
    justifyContent: 'center', 
    justifyItems: 'center', 
    margin: 'auto',
  },
  boton: {
    width: 'auto',
    height: 'auto',
    backgroundImage: 'linear-gradient(to right top, #aac1e4, #9cbaeb, #8eb3f1, #81acf7, #74a4fd)',
    boxShadow: '-1px 0px 10px 2px rgba(0,0,0,0.89);',       
    borderRadius: '20px', 
    textAlign: 'center', 
    justifyContent: 'center', 
    justifyItems: 'center', 
  },

}));



export function Grupos(){

    //Styles. 
    // <TextField type="file" id="outlined-required" variant="outlined"/>
    const classes = useStyles();
    const theme = createTheme();
    const navigate = useNavigate();

    theme.typography.h4 = {
        fontSize: '0rem',
        '@media (min-width:400px)': {
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '1.5rem',
        },
      };


    //función evento para navegar posterior a rellenar datos de grupo. 
    const onClickk = () => {

        //alert("Hola"); 
        navigate("/cargo"); 

    }


    return (

        <>
        <formControl className={classes.FormControl}>
        <h1 className={classes.styleTitleSistemas}>Grupos</h1>
        </formControl>

        <div className={classes.paperContainer}>

            <div className={classes.root}>
            <TextField id="outlined-required" label="Nombre" variant="outlined"/>
            </div>

            <div className={classes.root}>
            <TextField id="outlined-multiline-static" label="Descripción" multiline rows={3.5} variant="outlined"/>            
            </div>

            <div className={classes.root}>
            <Input className={classes.archivo} accept="image/*" type="file" id="outlined-required" variant="filled" ></Input>
            </div>

            <div className={classes.root}>
            <FormControl variant="filled">
                    <InputLabel htmlFor="">Tipo De Identificacion</InputLabel>
                    <Select label="Tipo de Documento" variant="filled" native>
                        <option aria-label="None" value="" />
                        <option value="1">Cedula de Ciudadania</option>
                        <option value="2">Cedula de Extranjeria</option>
                        <option value="3">Tarjeta de Identidad</option>
                        <option value="4">Pasaporte</option>
                    </Select>
                </FormControl>
            </div>

        </div>

            <div className={classes.divBoton}>
            <Button onClick={onClickk} className={classes.boton} variant="contained" color="primary">
            Enviar
            </Button>
            </div>

            <br></br>
        </>


    );

}




