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

    let state_textboxs  = props.properties;
    
    return (
      <>
        <Typography className={state_textboxs['cls-6']} variant="h2" properties={state_textboxs}>
                Inicio de Sesion
        </Typography>
        <form noValidate autoComplete="off" className={state_textboxs['cls-4']}>
           <TextField className={state_textboxs['cls-5']} label="Usuario" variant="outlined">
           </TextField>
           <TextField className={state_textboxs['cls-5']} label="contraseña" variant="outlined">
           </TextField>
        </form>
        <Button className={state_textboxs['cls-7']} type="submit" color="primary" variant = "contained">
          enviar
        </Button>
      </>
    );
}