//import librerarys react
import React from 'react';
import create_user_form from '../../css/create_user_form.css';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, TextField, Select,
    InputLabel, FormControl,
    FormHelperText
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


    const classes = useStyles();
    //render
    return (

        <div className={state_user_form['cls-1']}>

            <form className={state_user_form['cls-2']} noValidate autoComplete="off">
                <TextField type='number' label="Identificacion" variant="filled" />
                <TextField type='text' label="Primer Nombre" variant="filled" />
                <TextField label="Segundo Nombre" variant="filled" />
                <TextField label="Primer Apellido" variant="filled" />
                <TextField label="Segundo Apellido" variant="filled" />
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
                <TextField
                    id="date"
                    label="Fecha de Nacimiento"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField type='email' label="Email" variant="filled" />
                <TextField type='number' label="Telefono 1" variant="filled" />
                <TextField type='number' label="Telefono 2" variant="filled" />
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="wer">Genero</InputLabel>
                    <Select label="Tipo de Documento" variant="filled" native labelId="wer">
                        <option aria-label="None" value="" />
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </Select>
                </FormControl>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="">Lugar De Nacimiento</InputLabel>
                    <Select label="Tipo de Documento" variant="filled" native>
                        <option aria-label="None" value="" />
                        <option value="M">Cali</option>
                        <option value="F">Bogota</option>
                    </Select>
                    <FormHelperText>Selecione la cuidad</FormHelperText>
                </FormControl>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="">Direccion</InputLabel>
                    <Select label="Tipo de Documento" variant="filled" native>
                        <option aria-label="None" value="" />
                        <option value="M">Cali</option>
                        <option value="F">Bogota</option>
                    </Select>
                    <FormHelperText>Selecione la cuidad</FormHelperText>
                </FormControl>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="">lugar de bautismo</InputLabel>
                    <Select label="Tipo de Documento" variant="filled" native>
                        <option aria-label="None" value="" />
                        <option value="M">Cali</option>
                        <option value="F">Bogota</option>
                    </Select>
                    <FormHelperText>Selecione la cuidad</FormHelperText>
                </FormControl>
                <TextField
                    id="date"
                    label="Fecha de Bautizmo"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="Ingreso a la iglesia"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="FECHA RECEPCIÓN ESPÍRITU SANTO"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="Habilidades - JSON"
                    type='text'
                />
            </form>

            <Button className={state_user_form['cls-12']} >Guardar</Button>

        </div>
    );

}