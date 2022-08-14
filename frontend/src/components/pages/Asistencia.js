import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import { createTheme, Grid } from '@material-ui/core';
import { HeaderUser } from '../account-element/HeaderUser';
import { FooterAccount } from '../account-element/FooterAccount';
import Montserrat_ExtraBold from '../../static/Montserrat-ExtraBold.ttf';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';


const { generateToken } = require('../_____/_____');
const { verificar_inicio_sesion } = require('./login_acces_verify');


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
      width: '100%',
      flex: "none",
      marginBottom: "2vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    //crear media queries para que se adapte a los dispositivos moviles
    '@media screen and (max-width:600px)': {
      width: '100%',
      marginBottom: "1vh",
    }
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
    color: 'hsl(198deg 32% 16%)',
    fontSize: '5em !important',
    textAlign: 'center',
    padding: '0.3em 0.3em', /* para centrar profundizar los textos, reduciendo los espacios. */
    /*hyphens: 'auto', */
    /* wordBreak: 'break-all' esta es para responsive pero con las letras quedando a la mitad y lo demás se pone en la siguiente linea, como un salto.  */
    '@media screen and (max-width:600px)': {
      fontSize: '3em !important'
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
    padding: '0.3em 0.3em',
    margin: "auto",
    display: 'grid',
    gridAutoRows: 'auto',
    gridTemplateColumns: 'auto',
    gridGap: '0.5em',
    justifyContent: "space-between",
    justifyItems: 'center',
    alignItems: 'center',
    overflow: 'hidden' /* un objeto se pasa del limite del grid 100%, lo que hace es que lo desaparece para que no se muestre. */
    //añadir media queris para que se adapte a dispositivos moviles
  },
  //crear estilos para el boton de registrar
  styleButton: {
    //cambiar el color del boton por un zapote suave
    color: '#ff725e',
    background: '#ff725e',
    //centrar el boton
    //cambiar la posicion del boton al centro
    alignItems: 'center',
    //disminuir ancho del boton
    width: '7em',
    boxShadow: '0px 0px 10px #ff725e',
    //disminuir el alto del boton
    height: '3em',
    color: 'white',
    fontSize: '1.2em',
    fontWeight: 'bold',
    padding: '0.5em 0.5em',
    margin: '0.5em 0.5em',
    //hover
    '&:hover': {
      background: '#ff725e',
    },
    '@media screen and (max-width:280px)': {
      fontSize: '0.8em'
    }
  }, textField: {
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
      borderColor: 'hsl(198deg 32% 16%)'
    },
    //cambiar el color de la letra del label
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'hsl(198deg 32% 16%) '
    }

  },
  input: {
    backgroundColor: 'hsl(0deg 0% 92%)',
  }

}));

//@autor: juan felipe zapata
//crear una función que dependiendo de una entrada distinga entre numeros y letras
function validate(value, rules) {
  let isValid = true;
  if (!rules) {
    return true;
  }
}


/**
* @Author: Juan Felipe Osorio Zapata - 2022752
* A function that returns a form with the fields of the table.
*/
export function Asistencia(props) {

  const classes = useStyles();
  const theme = createTheme();
  const date = new Date();
  const navigate = useNavigate();

  let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
  let state_footer_accounts = Object.values(Object.values(Object.entries(props)[0][1])[5])[4];

  //crear una variable useState para guardar los datos de los campos del formulario
  const [form, setForm] = React.useState({
    date_attendence: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
    kid: 0,
    men: 0,
    vist: 0,
    woman: 0,
  });

  const [data_array, set_data_array] = React.useState({
    dialog_open: false,
    dialog_error_open: false
  })

  const [data_aux,set_data_aux] = React.useState({
     disabled: true
  })

  //useEstado
  const [header_user, setHeaderUser] = React.useState({
    state_header_user: Object.values(Object.values(Object.entries(props)[0][1])[0])[1],
    nombre_persona: localStorage.getItem('user_name'),
  });

  //handle para el submit
  const handleSubmit = (e) => {
    //llamar la funcion de postAsistencia
    postAsistencia(form, data_array, set_data_array);
  }

  const handleChange = (event) => {
    //expresion regular para validar numeros con validación de numeros exec 
    //muestrame por un console.log la fecha de hoy 
    //dame la fecha de hoy

    //imprimir los id de los campos del formulario
    console.log(event.target.id);

    //expresion regular para validar numeros con validación de numeros exec
    const regex = /^[0-9]*$/;
    if (regex.test(event.target.value)) {
      console.log("event", event.target.value);
      setForm({
        ...form,
        [event.target.id]: event.target.value
      });
    }
  }

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

  const handle_dialog_open = () => {
    set_data_array({
      ...data_array,
      dialog_open: false
    })
  }

  //useEffect para cargar la imagen de perfil
  React.useEffect(() => {
    verificar_inicio_sesion(navigate, '/asistencia');
    validate_button_submit('/asistencia',data_aux,set_data_aux)
  }, []);

  return (

    <>
      {
        (localStorage.getItem('permiso_cargo') === 'Administrador' ||
          localStorage.getItem('permiso_cargo') === 'pastor' ||
          localStorage.getItem('permiso_cargo') === 'asistente administrativo') ?
          <>
            <HeaderUser properties={header_user} />
            <div className={state_header_user['cls-6']}>
            </div>
            <div className={classes.styleTitle}>Registro Asistencia</div>
            <div className={classes.paperContainer}>
              <div className={classes.root}>
                <TextField
                  onChange={handleChange}
                  InputProps={{ className: classes.input }}
                  className={classes.textField}
                  id="kid" label="Niños" type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>

              <div className={classes.root}>
                <TextField
                  InputProps={{ className: classes.input }}
                  className={classes.textField}
                  onChange={handleChange}
                  id="men" label="Hombres" type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>

              <div className={classes.root}>
                <TextField
                  InputProps={{ className: classes.input }}
                  className={classes.textField}
                  onChange={handleChange}
                  id="woman" label="Mujeres" type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>

              <div className={classes.root}>
                <TextField
                  InputProps={{ className: classes.input }}
                  className={classes.textField}
                  onChange={handleChange}
                  id="vist" label="Visitantes" type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
              <Button disabled={data_aux.disabled} onClick={handleSubmit} className={classes.styleButton} variant="contained" color="secondary">
                Enviar
              </Button>
            </div>
            <Dialog
              open={data_array.dialog_open}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{`${(!data_array.dialog_error_open) ? 'Registro Exitoso' : 'Error Al Insertar'}`}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {(!data_array.dialog_error_open) ? 'El registro se ha realizado exitosamente' : 'Error al insertar el registro'}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handle_dialog_open} color="primary">
                  Cerrar
                </Button>
              </DialogActions>
            </Dialog>

            <FooterAccount properties={state_footer_accounts} />
          </> : null
      }
    </>


  );



}


/**
  *  @author : Juan Felipe Osorio Zapata <juan.felipe.osorio@correounivalle.edu.co>
  *  @decs  : post para enviar los datos de asistencia. 
  * 
*/
async function postAsistencia(data_array, data_a, set_a) {

  try {

    const response = await fetch('https://demon789-4.herokuapp.com/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': generateToken()

      },
      body: JSON.stringify(data_array)
    });

    const json = await response.json();

    if (json.message === 'ok') {

      set_a({
        ...data_a,
        dialog_open: true
      })

    }
    else {
      set_a({
        ...data_a,
        dialog_open: true,
        dialog_error_open: true
      })
    }

  } catch (error) {
    set_a({
      ...data_a,
      dialog_open: true,
      dialog_error_open: true
    })

    console.log(error);

  }
}



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : validar si se puede activar el boton o no.
*/
function validate_button_submit(rute,data_aux,set_data_aux) {

  //arreglo con los id de los jtexfield
  const id_array = [

    { id: 'kid' },
    { id: 'men' },
    { id: 'woman' },
    { id: 'vist' },

  ]

  //expresion regular para valdiar numeros
  const regex = /^[0-9]+$/;
  let index = 0

  const timer = setInterval(() => {

    (id_array).map( (item) => {
      
      if (regex.exec($(`#${item.id}`).val()) !== null) {
        
        if($(`#${item.id}`).val() > 0) {
          index++
        }
        
      }

    })

    if (index > 0) {

      set_data_aux({
        ...data_aux,
        disabled: false
      })

    } else {

      set_data_aux({
        ...data_aux,
        disabled: true
      })

    }

    index = 0

    if (window.location.pathname !== rute) {
      //limpiar el timer
      clearInterval(timer);
    }


  })

  return timer

}