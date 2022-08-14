import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createTheme, Grid } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import FormHelperText from '@material-ui/core/FormHelperText';
import { useNavigate } from 'react-router-dom';
import Montserrat_ExtraBold from '../../static/Montserrat-ExtraBold.ttf';
const { verificar_inicio_sesion } = require('./login_acces_verify');


const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: Montserrat_ExtraBold,
  },
});



/* Defining the style of the component. */
const useStyles = makeStyles((theme) => ({


  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    alignSelf: 'baseline',
    display: Grid,
    margin: theme.spacing(1),
    width: '80%'
  },
  paperContainer: {
    height: 'auto',
    width: '100%',
    background: 'white',
    padding: '0.5em 0.5em',
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: '100%',
    justifyItems: 'center',
    alignItems: 'center',
    overflow: 'hidden' /* un objeto se pasa del limite del grid 100%, lo que hace es que lo desaparece para que no se muestre. */

  },
  styleTitleCargo: {
    fontFamily: Montserrat_ExtraBold,
    color: 'gray',
    fontSize: '3.3em !important',
    textAlign: 'center',
    padding: '0.4em 0.4em', /* para centrar profundizar los textos, reduciendo los espacios. */
    /*hyphens: 'auto', */
    /* wordBreak: 'break-all' esta es para responsive pero con las letras quedando a la mitad y lo demás se pone en la siguiente linea, como un salto.  */
    '@media screen and (max-width:600px)': {
      fontSize: '2em !important'
    }

  },
  styleTextChoose: {
    fontFamily: Montserrat_ExtraBold,
    color: '#ff725e',
    fontWeight: '650',
    fontSize: '1.5em !important',
    textAlign: 'center',
    '@media screen and (max-width:600px)': {
      fontSize: '1em !important'
    }
  },
  labelFormTextHelp: {
    fontFamily: Montserrat_ExtraBold,
    fontSize: '1em',
    color: '#2c2c2c',
    fontWeight: '350',
  },

}));




/**
 * The Cargo function is used to select the user's role in the church
 * @param props - The props that are passed to the component.
 * @returns The return is a form control with a select and a label.
 */
export function Cargo(props) {

  const state_cargo = ((props.properties).cargo_style)['0'];
  const theme = createTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);


  //capturar el valor del cargo del localStorage
  const cargo = localStorage.getItem('cargo').split(',');


  /**
   * The handleChange function is used to set the Cargo to the value of the event target
   * @param event - The event that triggered the function.
   */
  /*
   const handleChange = (event) => {
     setCargo(event.target.value);
   };
   */
  const handleChange = (event) => {
    const name = event.target.value;
    localStorage.setItem('permiso_cargo', name);

    if (name === 'Administrador' || name === 'pastor' || name === 'asistente administrativo') {
      navigate('/account');
    }

    if (name === 'creyente' || name === 'Lider' || name === 'comite') {
      //siiiii mi amorrrr ufffff
      navigate('/creyente');
    }


  };

  /**
   * The handleClose function sets the open state to false
   */
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * The function handleOpen is called when the button is clicked
   * @param event - The event that triggered the open.
   */
  const handleOpen = (event) => {
    setOpen(true);
  };

  //use Effect para verificar si inicio sesion o no
  React.useEffect(() => {
    verificar_inicio_sesion(navigate, '/cargo');
  }, []);


  return (
    <>
      {
        (localStorage.getItem('user_login') !== 'null') ?
          <div className={state_cargo['cls-2']}>
            <div className={state_cargo['cls-1']}>
              <Typography className={classes.styleTextChoose}>Elige el cargo por el cual deseas ingresar:</Typography>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.labelFormTextHelp} htmlFor="user-native-simple">Cargo</InputLabel>
                <Select
                  native
                  value={open.user}
                  onChange={handleChange}
                  onOpen={handleOpen}
                  inputProps={{
                    name: 'user',
                    id: 'user-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  {cargo.map((cargo, index) => (
                    <option key={index} value={cargo.replace('"', '')}>{cargo.replace('"', '')}</option>
                  ))}
                </Select>
                <FormHelperText className={classes.labelFormTextHelp} id="my-helper-text">Seleciona el cargo</FormHelperText>
              </FormControl>
            </div>
          </div> : null
      }
    </>
  );
}


