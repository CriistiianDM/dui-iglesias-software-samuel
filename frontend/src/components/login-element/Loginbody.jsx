//libreary or imports
import React from "react";
import login_style from '../../css/login_style.css';
import TextField from '@material-ui/core/TextField';
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

/**
  *  @author : Juan Sebastian Camino Muñoz<juan.camino@correounivalle.edu.co>
  *  @decs  : configuracion de las cajas de texto del login/
*/
export function Loginbody(props) {

    //estados boleanos para validar los campos
    const [user_valid_data, setUserValid] = React.useState({
       error_user: false,
       error_password: false,
       error_message_user: 'Solo numeros de 10 a 15 digitos',
       error_message_password: 'Solo letras y numeros de 8 a 35 digitos'
    });


    let state_textboxs  = props.properties;
    
    let handleChange = (event) => {
     validate_data_info(event, user_valid_data , setUserValid);
    }

    return (
      <>
        <Typography className={state_textboxs['cls-6']} variant="h2" properties={state_textboxs}>
                Inicio de Sesion
        </Typography>
        <form noValidate autoComplete="off" className={state_textboxs['cls-4']}>
           <TextField error={user_valid_data.error_user} helperText={user_valid_data.error_message_user} onChange={handleChange} title='user' type='number' className={state_textboxs['cls-5']} label="Usuario" variant="outlined" />
           <TextField className={state_textboxs['cls-5']} type='password' label="contraseña" variant="outlined" />
        </form>
        <Button disabled={true} className={state_textboxs['cls-7']} type="submit" color="primary" variant = "contained">
          enviar
        </Button>
      </>
    );
}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : validar informacion de la caja de texto
*/
function validate_data_info(element, user_valid_data, setUserValid) {
   
   //expresion regular para validar el usuario
   let regex;

   //validar si el elemento es el usuario o la contraseña
   if (element.target.title === 'user') {
     regex = /^[0-9]{10,15}$/;
     console.log('user');
   }
   else {
     regex = /^[aA-zZ0-9]{4,8}$/;
   }

   console.log(regex.exec(element.target.value), element.target.value);

    if (regex.exec(element.target.value) != null) {
      console.log('valido');
      setUserValid({...user_valid_data, error_user: false});
    }
    else {
      setUserValid({...user_valid_data, error_user: true});
    }
}