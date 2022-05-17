//libreary or imports
import React from "react";
import login_style from '../../css/login_style.css';
import TextField from '@material-ui/core/TextField';

/**
  *  @author : Juan Sebastian Camino Muñoz<juan.camino@correounivalle.edu.co>
  *  @decs  : configuracion de las cajas de texto del login/
*/
export function TextBoxs(props) {

    let state_textboxs  = props.properties;
    
    return (
      <>
        <form noValidate autoComplete="off">
           <TextField className={state_textboxs['cls-5']} label="Usuario" fullWidth variant="outlined">
           </TextField>
           <TextField className={state_textboxs['cls-5']} label="contraseña" fullWidth variant="outlined">
           </TextField>
        </form>
      </>
    );
}