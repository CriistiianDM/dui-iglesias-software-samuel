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
        doc: '',
        doc_from: '',
        doc_type: '',
        first_name: '',
        second_name: '',
        first_last_name: '',
        second_last_name: '',
        birth_date: '',
        email: '',
        phone_1: '',
        phone_2: '',
        gender: '',
        address: '',
        type_person: 'normal',
        place_birth: '',
        baptism_date: '',
        baptism_place_id: '',
        holy_spirit_date: '',
        date_init_church: '',
        experience_json: '',
        id_church_now: '',
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
        message_band_0: 'solo Numeros de 9 a 15 caracteres',
        message_band_1: 'solo Letras de 3 a 50 caracteres',
        message_band_2: 'solo Letras de 3 a 50 caracteres',
        message_band_3: 'solo Letras de 3 a 50 caracteres',
        message_band_4: 'solo Letras de 3 a 50 caracteres',
        message_band_5: 'seleciona una opcion',
        message_band_7: 'verificar si email esta bien escrito',
        message_band_8: 'solo numeros de 9 a 15 caracteres',
        message_band_9: 'solo numeros de 9 a 15 caracteres',
        message_band_11: 'verificar si la direccion esta bien escrita',
        message_band_18: 'formato json incorrecto'
    });

    //handle change
    const handleChange = (event) => {
        validateForm(event, data_array, setdata_array);
    }


    const classes = useStyles();
    //render
    return (

        <div className={state_user_form['cls-1']}>

            <div className={state_user_form['cls-9']}>

                <div className={state_user_form['cls-10']}>
                    <Typography className={state_user_form['cls-11']}> Creacion De Usuario </Typography>
                </div>

                <div className={state_user_form['cls-7']}>
                    <Typography className={state_user_form['cls-8']}> Informacion Personal </Typography>
                </div>

                <form className={state_user_form['cls-2']} noValidate autoComplete="off">
                    <TextField error={data_array.error_band_0} helperText={(data_array.error_band_0) ? data_array.message_band_0 : ''} onBlur={handleChange} id='i-p-0-0' type='number' label="Identificacion" variant="filled" />
                    <TextField error={data_array.error_band_1} helperText={(data_array.error_band_1) ? data_array.message_band_1 : ''} onChange={handleChange} id='first-name-1-1' type='text' label="Primer Nombre" variant="filled" />
                    <TextField error={data_array.error_band_2} helperText={(data_array.error_band_2) ? data_array.message_band_2 : ''} onChange={handleChange} id='second-name-1-2' label="Segundo Nombre" variant="filled" />
                    <TextField error={data_array.error_band_3} helperText={(data_array.error_band_3) ? data_array.message_band_3 : ''} onChange={handleChange} id='last-name-1-3' label="Primer Apellido" variant="filled" />
                    <TextField error={data_array.error_band_4} helperText={(data_array.error_band_4) ? data_array.message_band_4 : ''} onChange={handleChange} id='second-name-1-4' label="Segundo Apellido" variant="filled" />
                    <FormControl error={data_array.error_band_5} variant="filled">
                        <InputLabel htmlFor="">Tipo De Identificacion</InputLabel>
                        <Select onChange={handleChange} id='tipo-identificacion-2-5' label="Tipo de Documento" variant="filled" native>
                            <option aria-label="None" value="" />
                            <option value="CC">Cedula de Ciudadania</option>
                            <option value="CE">Cedula de Extranjeria</option>
                            <option value="TI">Tarjeta de Identidad</option>
                            <option value="PS">Pasaporte</option>
                        </Select>
                    </FormControl>
                    <TextField
                        id="date-f-3-6"
                        label="Fecha de Nacimiento"
                        onChange={handleChange}
                        error={data_array.error_band_6}
                        helperText={(data_array.error_band_6) ? data_array.message_band_6 : ''}
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField error={data_array.error_band_7} helperText={(data_array.error_band_7) ? data_array.message_band_7 : ''} onChange={handleChange} id='tipo-email-4-7' type='email' label="Email" variant="filled" />
                    <TextField error={data_array.error_band_8} helperText={(data_array.error_band_8) ? data_array.message_band_8 : ''} onChange={handleChange} id='tipo-tel1-0-8' type='number' label="Telefono 1" variant="filled" />
                    <TextField error={data_array.error_band_9} helperText={(data_array.error_band_9) ? data_array.message_band_9 : ''} onChange={handleChange} id='tipo-tel2-0-9' type='number' label="Telefono 2" variant="filled" />
                    <FormControl error={data_array.error_band_10} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Genero</InputLabel>
                        <Select onClick={handleChange} id='tipo-genero-5-10' label="Tipo de Documento" variant="filled" native labelId="wer">
                            <option aria-label="None" value="" />
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </Select>
                    </FormControl>
                    <TextField error={data_array.error_band_11} helperText={(data_array.error_band_11) ? data_array.message_band_11 : ''} onChange={handleChange} id='tipo-direccion-6-11' type='text' label="Direccion" variant="filled" />
                </form>

                <div className={state_user_form['cls-7']}>
                    <Typography className={state_user_form['cls-8']}> Lugar de Nacimiento </Typography>
                </div>

                <form className={state_user_form['cls-2']} noValidate autoComplete="off">
                    <FormControl error={data_array.error_band_12} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Pais</InputLabel>
                        <Select onChange={handleChange} id='tipo-pais1-7-12' label="Tipo de Documento" variant="filled" native labelId="wer">
                            <option aria-label="None" value="" />
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </Select>
                    </FormControl>
                    <FormControl error={data_array.error_band_13} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Region</InputLabel>
                        <Select onChange={handleChange} id='tipo-region1-7-13' label="Tipo de Documento" variant="filled" native labelId="wer">
                            <option aria-label="None" value="" />
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </Select>
                    </FormControl>
                    <FormControl error={data_array.error_band_14} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Cuidad</InputLabel>
                        <Select onChange={handleChange} id='tipo-cali1-7-14' label="Tipo de Documento" variant="filled" native labelId="wer">
                            <option aria-label="None" value="" />
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </Select>
                    </FormControl>
                </form>

                <div className={state_user_form['cls-7']}>
                    <Typography className={state_user_form['cls-8']}> Informacion Eclesial </Typography>
                </div>

                <form className={state_user_form['cls-2']} noValidate autoComplete="off">
                    <TextField
                        id="date-bautizo-3-15"
                        label="Fecha de Bautizmo"
                        type="date"
                        error={data_array.error_band_15}
                        helperText={(data_array.error_band_15) ? data_array.message_band_15 : ''}
                        onChange={handleChange}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date-iglesia-3-16"
                        label="Ingreso a la iglesia"
                        error={data_array.error_band_16}
                        helperText={(data_array.error_band_16) ? data_array.message_band_16 : ''}
                        type="date"
                        onChange={handleChange}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date-santo-3-17"
                        label="FECHA RECEPCIÓN ESPÍRITU SANTO"
                        error={data_array.error_band_17}
                        helperText={(data_array.error_band_17) ? data_array.message_band_17 : ''}
                        type="date"
                        onChange={handleChange}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date-fQQ-8-18"
                        onChange={handleChange}
                        label="Habilidades - JSON"
                        error={data_array.error_band_18}
                        helperText={(data_array.error_band_18) ? data_array.message_band_18 : ''}
                        type='text'
                        className={classes.textField}
                    />
                </form>

                <div className={state_user_form['cls-7']}>
                    <Typography className={state_user_form['cls-8']}> Lugar de Bautizmo </Typography>
                </div>

                <form className={state_user_form['cls-2']} noValidate autoComplete="off">
                    <FormControl error={data_array.error_band_19} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Pais</InputLabel>
                        <Select onChange={handleChange} id='tipo-pais2-7-19' label="Tipo de Documento" variant="filled" native labelId="wer">
                            <option aria-label="None" value="" />
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </Select>
                    </FormControl>
                    <FormControl error={data_array.error_band_20} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Region</InputLabel>
                        <Select onChange={handleChange} id='tipo-region2-7-20' label="Tipo de Documento" variant="filled" native labelId="wer">
                            <option aria-label="None" value="" />
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </Select>
                    </FormControl>
                    <FormControl error={data_array.error_band_21} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Cuidad</InputLabel>
                        <Select onChange={handleChange} id='tipo-cuidad2-7-21' label="Tipo de Documento" variant="filled" native labelId="wer">
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
function validateForm(e, data_array, setdata_array) {

    let type = (e.target.id).split('-')[2];
    let error = `error_band_${(e.target.id).split('-')[3]}`;
     console.log(data_array,'data_array');
    //expresssion regular 
    console.log(e.target.value, e.target.id, validateFormate(e, type));

    if ((e.target.value) === null || (e.target.value).length === 0) {
        setdata_array({ ...data_array, [error]: false  });
    }
    else if (validateFormate(e, type)) {
        console.log('valido');
        setdata_array({ ...data_array, [error]: false , 
                     [getNameState((e.target.id).split('-')[3])]: e.target.value  
                    });
    }
    else {
        setdata_array({ ...data_array, [error]: true });
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
        '6': /^[0-9-a-zA-Z\s#\-]{10,255}$/,
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

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Validar si el documento ya existe
*/
async function validateDocument(e, data_array, setdata_array) {

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : retornar el nombre de state a cambiar
*/
function getNameState(index) {

    const state = {
        '0': 'doc',
        '1': 'first_name',
        '2': 'second_name',
        '3': 'first_last_name',
        '4': 'second_last_name',
        '5': 'doc_type',
        '6': 'birth_date',
        '7': 'email',
        '8': 'phone_1',
        '9': 'phone_2',
        '10': 'gender',
        '11': 'address',
        '14': 'place_birth',
        '15': 'baptism_date',
        '21': 'baptism_place_id',
        '17': 'holy_spirit_date',
        '16': 'date_init_church',
        '19': 'experience_json'
    }

    return state[index];

}



/*
doc_0: '',
doc_from: '',
first_name_1: '',
second_name_2: '',
first_last_name_3: '',
second_last_name_4: '',
birth_date_5: '',
email_6: '',
phone_7: '',
phone_8: '',
gender_9: '',
address_9: '',
type_person: 'normal',
place_birth: '',
baptism_date: '',
baptism_place_id: '',
holy_spirit_date: '',
date_init_church: '',
experience_json: '',
id_church_now: '',
*/

///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;