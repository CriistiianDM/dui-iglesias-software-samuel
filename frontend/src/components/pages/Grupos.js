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
      color: 'black',
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
    margin: theme.spacing(1),
    width: '20em',
    '@media screen and (max-width:280px)': {
      width: '12em'
    }
  },
  paperContainer: {
    height: 'auto',
    width: '80%',
    background: 'auto',
    webkitBoxShadow: '-2px 0px 9px 1px rgba(0,0,0,0.89)', 
    boxShadow: '-1px 0px 10px 2px rgba(0,0,0,0.89);',       
    padding: '0.8em 0.8em', 
    margin: "auto",
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax( min(100%, 12em), 1fr))',
    gridGap: '0.5em',
    minHeight: '15em',
    gridAutoRows: 'auto',
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
  ancho: {
    display: 'grid !important', 
    width: '12em', 
    '@media screen and (max-width:280px)': {
      width: '12em'
    }
  }

}));



export function Grupos(props){

     //variables
     let state_user_form = props.properties;
     //hacer un console.log para ver que esta pasando con el state_user_form
     let busquedaJson = Object.values((state_user_form)["jovenLider"])[0]["identificacion"]; //busquedaJson es el json que se va a buscar en el backend

     //useStates
     const [data_array, setdata_array] = React.useState({
         error_band_0: false,
         error_band_1: false,
         error_band_2: false,
         error_band_3: false,
         error_band_4: false,
         error_band_5: false,
         error_band_6: false,
         error_band_7: false,
         error_band_8: false,
         error_band_9: false,
         error_band_10: false,
         error_band_11: false,
         error_band_12: false,
         error_band_13: false,
         error_band_14: false,
         error_band_15: false,
         error_band_16: false,
         error_band_17: false,
         error_band_18: false,
         error_band_19: false,
         error_band_20: false,
         error_band_21: false,
         prueba: {
            nombre: 'Hola Cristian',
         }, 
         message_band_0: 'solo Numeros de 9 a 15 caracteres',
         message_band_1: 'solo Letras de 3 a 50 caracteres',
         message_band_2: 'solo Letras de 3 a 50 caracteres',
         message_band_3: 'solo Letras de 3 a 50 caracteres',
         message_band_4: 'solo Letras de 3 a 50 caracteres',
         message_band_5: 'seleciona una opcion',
         message_band_6: '',
         message_band_7: 'verificar si email esta bien escrito',
         message_band_8: 'solo numeros de 9 a 15 caracteres',
         message_band_9: 'solo numeros de 9 a 15 caracteres',
         message_band_10: '',
         message_band_11: 'verificar si la direccion esta bien escrita',
         message_band_12: '',
         message_band_13: '',
         message_band_14: '',
         message_band_15: '',
         message_band_16: '',
         message_band_17: '',
         message_band_18: 'formato json incorrecto',
         message_band_19: '',
         message_band_20: '',
         message_band_21: ''
     });

     console.log(`data Array: ${((data_array).prueba).nombre}`);


 
     //handle change
     const handleChange = (event) => {
         validateForm(event, data_array , setdata_array);
     }

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
        <FormControl className={classes.FormControl}>
        <h1 className={classes.styleTitleSistemas}>Grupos</h1>
        </FormControl>

        <div className={classes.paperContainer}>

            <div className={classes.root}>
            <TextField error={data_array.error_band_0} onChange={handleChange} id="outlined-required-9-0" label="Nombre" variant="outlined"/>
            </div>

            <div className={classes.root}>
            <TextField error={data_array.error_band_1} onChange={handleChange} id="outlined-multiline-9-1" required={true} fullWidth={true} maxRows={3} multiline={true} label="Descripción" variant="outlined"/>            
            </div>

            <div className={classes.root}>
            <Input className={classes.archivo} accept="image/*" type="file" id="outlined-required" variant="filled" ></Input>
            </div>

            <div>
            <FormControl className={classes.ancho} variant="filled">
                    <InputLabel htmlFor="">Lider Joven</InputLabel>
                    <Select  id="joven-lider-0-5" onChange={handleChange} label="Tipo de Documento" variant="filled" native>
                        {
                            //un for each para recorrer el json busquedaJson
                            (busquedaJson).map((key, index) => (
                                  
                                  <option key={index} value={key.identificacion}>{key.nombre}</option>                                

                            ))
                          }
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


function validateForm(e, data_array , setdata_array) {

  let type = (e.target.id).split('-')[2];
  let error = `error_band_${(e.target.id).split('-')[3]}`;

  //expresssion regular 
  console.log(e.target.value, e.target.id ,validateFormate(e, type));

   if ( (e.target.value) === null || (e.target.value).length === 0 ) {
       setdata_array({...data_array, [error]: false});
   }
   else if(validateFormate(e, type)){
       console.log('valido');
       setdata_array({...data_array, [error]: false});
   }
   else {
       setdata_array({...data_array, [error]: true});
   }

}

function validateFormate(e, type) {
           
  //expresssion regular 
  var regex = {
       '0': /^[0-9]{9,15}$/,
       '1': /^[aA-zZ]{3,50}$/, //validar texto de 3 a 50 caracteres, sin espacios.
       '2': /^[aA-zZ]{2}$/,
       '3': /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
       '4': /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
       '5': /^[a-zA-Z]$/,
       '6': /^[0-9-a-zA-Z\s#\-]{10,255}$/,
       '7': /^[0-9]{1,5}$/,
       '8': /^{[0-9-aA-zZ:,'"]+}$/,
       '9': /^[aA-zZ\s]{3,50}$/, //Validar espaciados y textos. 
  }         
 
  //validar el formato
  if ((regex[type]).exec(e.target.value) != null) {
       return true;
  }
  else {
       return false;
  }

}





