//import librerarys react
import React from 'react';
import create_user_form from '../../css/create_user_form.css';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, TextField, Select,
    InputLabel, FormControl,
    FormHelperText,
    Typography
} from '@material-ui/core';

//estilos de material-ui
const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    }
}));




/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : formulario de creacion de usuario
*/
export function CreateUserForm(props) {

    //variables
    let state_user_form = props.properties;

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
        message_band_0: '',
        message_band_1: '',
        message_band_2: '',
        message_band_3: '',
        message_band_4: '',
        message_band_5: '',
        message_band_6: '',
        message_band_7: '',
        message_band_8: '',
        message_band_9: '',
        message_band_10: '',
        message_band_11: '',
        message_band_12: '',
        message_band_13: '',
        message_band_14: '',
        message_band_15: '',
        message_band_16: '',
        message_band_17: '',
        message_band_18: '',
        message_band_19: '',
        message_band_20: '',
    });

    //handle change
    const handleChange = (event) => {
        validateForm(event,0);
    }


    const classes = useStyles();
    //render
    return (

        <div className={state_user_form['cls-1']}>

            <div className={state_user_form['cls-9']}>

            <div className={state_user_form['cls-10']}> 
                <Typography  className={state_user_form['cls-11']}> Creacion De Usuario </Typography>
            </div>

            <div className={state_user_form['cls-7']}> 
                <Typography  className={state_user_form['cls-8']}> Informacion Personal </Typography>
            </div>

            <form className={state_user_form['cls-2']} noValidate autoComplete="off">
                <TextField  error={true} helperText={''} onBlur={handleChange} id='i-p-0'  type='number' label="Identificacion" variant="filled" />
                <TextField onChange={handleChange} id='first-name-1' type='text' label="Primer Nombre" variant="filled" />
                <TextField onChange={handleChange} id='second-name-1' label="Segundo Nombre" variant="filled" />
                <TextField onChange={handleChange} id='last-name-1' label="Primer Apellido" variant="filled" />
                <TextField onChange={handleChange} id='second-name-1' label="Segundo Apellido" variant="filled" />
                <FormControl  variant="filled">
                    <InputLabel htmlFor="">Tipo De Identificacion</InputLabel>
                    <Select onClick={handleChange} id='tipo-identificacion-2' label="Tipo de Documento" variant="filled" native>
                        <option aria-label="None" value="" />
                        <option value="CC">Cedula de Ciudadania</option>
                        <option value="CE">Cedula de Extranjeria</option>
                        <option value="TI">Tarjeta de Identidad</option>
                        <option value="PS">Pasaporte</option>
                    </Select>
                </FormControl>
                <TextField
                    id="date-f-3"
                    label="Fecha de Nacimiento"
                    onChange={handleChange}
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField onChange={handleChange} id='tipo-email-4' type='email' label="Email" variant="filled" />
                <TextField onChange={handleChange} id='tipo-tel1-0' type='number' label="Telefono 1" variant="filled" />
                <TextField onChange={handleChange} id='tipo-tel2-0' type='number' label="Telefono 2" variant="filled" />
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="wer">Genero</InputLabel>
                    <Select onClick={handleChange} id='tipo-genero-5' label="Tipo de Documento" variant="filled" native labelId="wer">
                        <option aria-label="None" value="" />
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </Select>
                </FormControl>
                <TextField onChange={handleChange} id='tipo-direccion-6' type='text' label="Direccion" variant="filled" />
            </form>

            <div className={state_user_form['cls-7']}> 
                <Typography  className={state_user_form['cls-8']}> Lugar de Nacimiento </Typography>
            </div>

            <form className={state_user_form['cls-2']} noValidate autoComplete="off">
            <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="wer">Pais</InputLabel>
                    <Select onChange={handleChange} id='tipo-pais1-7' label="Tipo de Documento" variant="filled" native labelId="wer">
                        <option aria-label="None" value="" />
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </Select>
                </FormControl>       
            <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="wer">Region</InputLabel>
                    <Select onChange={handleChange} id='tipo-region1-7' label="Tipo de Documento" variant="filled" native labelId="wer">
                        <option aria-label="None" value="" />
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </Select>
                </FormControl>       
            <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="wer">Cuidad</InputLabel>
                    <Select onChange={handleChange} id='tipo-cali1-7' label="Tipo de Documento" variant="filled" native labelId="wer">
                        <option aria-label="None" value="" />
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </Select>
                </FormControl>       
            </form>

            <div className={state_user_form['cls-7']}> 
                <Typography  className={state_user_form['cls-8']}> Informacion Eclesial </Typography>
            </div>

            <form className={state_user_form['cls-2']} noValidate autoComplete="off">
                <TextField
                    id="date-bautizo-3"
                    label="Fecha de Bautizmo"
                    type="date"
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date-iglesia-3"
                    label="Ingreso a la iglesia"
                    type="date"
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date-santo-3"
                    label="FECHA RECEPCIÓN ESPÍRITU SANTO"
                    type="date"
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date-fQQ-8"
                    onChange={handleChange}
                    label="Habilidades - JSON"
                    type='text'
                    className={classes.textField}
                />
            </form>

            <div className={state_user_form['cls-7']}> 
                <Typography  className={state_user_form['cls-8']}> Lugar de Bautizmo </Typography>
            </div>

            <form className={state_user_form['cls-2']} noValidate autoComplete="off">
            <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="wer">Pais</InputLabel>
                    <Select onChange={handleChange} id='tipo-pais2-7' label="Tipo de Documento" variant="filled" native labelId="wer">
                        <option aria-label="None" value="" />
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </Select>
                </FormControl>       
            <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="wer">Region</InputLabel>
                    <Select onChange={handleChange} id='tipo-region2-7' label="Tipo de Documento" variant="filled" native labelId="wer">
                        <option aria-label="None" value="" />
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </Select>
                </FormControl>       
            <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="wer">Cuidad</InputLabel>
                    <Select onChange={handleChange} id='tipo-cuidad2-7' label="Tipo de Documento" variant="filled" native labelId="wer">
                        <option aria-label="None" value="" />
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </Select>
                </FormControl>   
            </form>


            </div>

            <Button className={state_user_form['cls-12']} >Guardar</Button>

        </div>
    );

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Validar el formulario de creacion de usuario
*/
function validateForm(e) {

   let type = (e.target.id).split('-')[2];

   //expresssion regular 
   console.log(e.target.value, e.target.id ,validateFormate(e, type));

    if(validateFormate(e, type)){
        console.log('valido');
    }
    else {
        console.log('invalido');
    }

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Validar formatos
*/
function validateFormate(e, type) {
           
   //expresssion regular 
   var regex = {
        '0': /^[0-9]{9,15}$/,
        '1': /^[aA-zZ]{3,50}$/,
        '2': /^[aA-zZ]{2}$/,
        '3': /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        '4': /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        '5': /^[a-zA-Z]$/,
        '6': /^[0-9-a-zA-Z#\-]{10,255}$/,
        '7': /^[0-9]{1,5}$/,
        '8': /^{[0-9-aA-zZ:,'"]+}$/,
   }         
  
   //validar el formato
   if ((regex[type]).exec(e.target.value) != null) {
        return true;
   }
   else {
        return false;
   }

}




///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;