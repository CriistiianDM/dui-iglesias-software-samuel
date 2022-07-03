//libreary or imports
import React from "react";
import login_style from '../../css/login_style.css';
import TextField from '@material-ui/core/TextField';
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

/**
  *  @author : Juan Sebastian Camino Muñoz<juan.camino@correounivalle.edu.co>
  *  @author : Cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : configuracion de las cajas de texto del login/
*/
export function Loginbody(props) {

    //estados boleanos para validar los campos
    const [user_valid_data, setUserValid] = React.useState({
       user_login: '',
       password_login: '',
       error_user: false,
       error_password: false,
       error_message_band_user: false,
       error_message_band_password: false,
       error_message_user: 'Solo numeros de 10 a 15 digitos',
       error_message_password: 'Solo letras y numeros de 8 a 35 digitos'
    });


    let state_textboxs  = props.properties;
    
    let handleChange = (event) => {
     validate_data_info(event, user_valid_data , setUserValid);
    }

    let handleSubmit = (event) => {
      validate_data_all(user_valid_data);
    }

    return (
      <>
        <Typography className={state_textboxs['cls-6']} variant="h2" properties={state_textboxs}>
                Inicio de Sesion
        </Typography>
        <form noValidate autoComplete="off" className={state_textboxs['cls-4']}>
           <TextField id='user_loginbody' error={user_valid_data.error_user} helperText={(user_valid_data.error_message_band_user)? user_valid_data.error_message_user : ''} onChange={handleChange}  type='number' className={state_textboxs['cls-5']} label="Usuario" variant="outlined" />
           <TextField id='passwd_loginbody' error={user_valid_data.error_password} helperText={(user_valid_data.error_message_band_password)? user_valid_data.error_message_password : ''} onChange={handleChange}  className={state_textboxs['cls-5']} type='password' label="contraseña" variant="outlined" />
        </form>
        <Button onClick={handleSubmit} className={state_textboxs['cls-7']} type="submit" color="primary" variant = "contained">
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
   let array_valid = ['error_user', 'error_password', 
                      'error_message_band_user', 'error_message_band_password', 
                      'user_login', 'password_login'];
   let index = 0;
   let index_aux =  2;
   let index_aux_2 = 4;

   //validar si el elemento es el usuario o la contraseña
   if (element.target.id === 'user_loginbody') {
     regex = /^[0-9]{10,15}$/;
   }
   else {
     regex = /^[aA-zZ0-9]{8,35}$/;
     index = 1;
     index_aux = 3;
     index_aux_2 = 5;
   }

   console.log(regex.exec(element.target.value), element.target.title , element.target.value);

    //validar si la informacion es correcta
    if ((element.target.value).length === 0) {
      setUserValid({
        ...user_valid_data,
        [array_valid[index_aux]]: false,
        [array_valid[index]]: false
      });
    }
    else if (regex.exec(element.target.value) != null) {
      setUserValid({
        ...user_valid_data,
        [array_valid[index_aux]]: false,
        [array_valid[index]]: false,
        [array_valid[index_aux_2]]: element.target.value
      });
    }
    else {
      setUserValid({
        ...user_valid_data, 
        [array_valid[index]]: true,
        [array_valid[index_aux]]: true 
      });
    }


}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : validar si ambos campos estan llenos y si no estan llenos mostrar un mensaje de error
*/
function validate_data_all(user_valid_data) {

  console.log(user_valid_data);
  if (!user_valid_data.error_user && !user_valid_data.error_password) {
    return true;
  }
  else {
    return false;
  }
}