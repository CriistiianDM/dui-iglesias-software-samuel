//import librerarys react
import React from 'react';
import create_user_form from '../../css/create_user_form.css';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, TextField, Select,
    InputLabel, FormControl,
    FormHelperText,
    Typography,
    CircularProgress,
    Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText
} from '@material-ui/core';
import $ from 'jquery';


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


    const [data_array, setdata_array] = React.useState({
        doc: '',
        doc_from: 'colombia',
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
        experience_json: '{}',
        id_church_now: '1',
        disabled_all: false,
        loading_submit: true,
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
        disabled_0: false,
        disabled_1: false,
        loading: false,
        region_band_0: true, //13
        region_band_1: true, //20
        city_band_0: true,//14
        city_band_1: true,//21
        diabled_submit: false,
        permit_submit: false,
        country_data: '',
        region_data_0: '',
        region_data_1: '',
        city_data_0: '',
        city_data_1: '',
        dialog_open: false,
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
        message_band_18: 'formato json incorrecto',
        doc_from_aux: ''
    });

    React.useEffect(() => {
        timer_consult_verify(data_array, setdata_array)
        //validar_on_off_button()
    }, []);

    //handle change
    const handleChange = (event) => {
        validateForm(event, data_array, setdata_array);
    }

    const handleSubmit = (event) => {
        console.log('data actual', $('#tipo-identificacion-2-5').val());
        //submit_form(event, data_array, setdata_array)
    }

    let handle_dialog_open = () => {
        setdata_array({ ...data_array, dialog_open: false });
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
                    <TextField disabled={data_array.disabled_0} error={data_array.error_band_0} helperText={(data_array.error_band_0) ? data_array.message_band_0 : ''} onBlur={handleChange} id='i-p-0-0' type='number' label="Identificacion" variant="filled" />
                    <TextField disabled={data_array.disabled_all} error={data_array.error_band_1} helperText={(data_array.error_band_1) ? data_array.message_band_1 : ''} onChange={handleChange} id='first-name-1-1' type='text' label="Primer Nombre" variant="filled" />
                    <TextField disabled={data_array.disabled_all} error={data_array.error_band_2} helperText={(data_array.error_band_2) ? data_array.message_band_2 : ''} onChange={handleChange} id='second-name-1-2' label="Segundo Nombre" variant="filled" />
                    <TextField disabled={data_array.disabled_all} error={data_array.error_band_3} helperText={(data_array.error_band_3) ? data_array.message_band_3 : ''} onChange={handleChange} id='last-name-1-3' label="Primer Apellido" variant="filled" />
                    <TextField disabled={data_array.disabled_all} error={data_array.error_band_4} helperText={(data_array.error_band_4) ? data_array.message_band_4 : ''} onChange={handleChange} id='second-name-1-4' label="Segundo Apellido" variant="filled" />
                    <FormControl disabled={data_array.disabled_all} error={data_array.error_band_5} variant="filled">
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
                        disabled={data_array.disabled_all}
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
                    <TextField disabled={data_array.disabled_1} error={data_array.error_band_7} helperText={(data_array.error_band_7) ? data_array.message_band_7 : ''} onBlur={handleChange} id='tipo-email-4-7' type='email' label="Email" variant="filled" />
                    <TextField disabled={data_array.disabled_all} error={data_array.error_band_8} helperText={(data_array.error_band_8) ? data_array.message_band_8 : ''} onChange={handleChange} id='tipo-tel1-0-8' type='number' label="Telefono 1" variant="filled" />
                    <TextField disabled={data_array.disabled_all} error={data_array.error_band_9} helperText={(data_array.error_band_9) ? data_array.message_band_9 : ''} onChange={handleChange} id='tipo-tel2-0-9' type='number' label="Telefono 2" variant="filled" />
                    <FormControl disabled={data_array.disabled_all} error={data_array.error_band_10} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Genero</InputLabel>
                        <Select onClick={handleChange} id='tipo-genero-5-10' label="Tipo de Documento" variant="filled" native labelId="wer77777888js">
                            <option aria-label="None" value="" />
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </Select>
                    </FormControl>
                    <TextField disabled={data_array.disabled_all} error={data_array.error_band_11} helperText={(data_array.error_band_11) ? data_array.message_band_11 : ''} onChange={handleChange} id='tipo-direccion-6-11' type='text' label="Direccion" variant="filled" />
                </form>

                <div className={state_user_form['cls-7']}>
                    <Typography className={state_user_form['cls-8']}> Lugar de Nacimiento </Typography>
                </div>

                <form className={state_user_form['cls-2']} noValidate autoComplete="off">
                    <FormControl disabled={!data_array.loading} error={data_array.error_band_12} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Pais</InputLabel>
                        <Select onChange={handleChange} id='tipo-pais1-7-12' label="Tipo de Documento" variant="filled" native labelId="w6666667er">
                            <option aria-label="None" value="" />
                            {

                                (!data_array.loading) ?
                                    (<></>) :
                                    (data_array.country_data).map((item, index) => (
                                        (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl disabled={data_array.region_band_0} error={data_array.error_band_13} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Region</InputLabel>
                        <Select onChange={handleChange} id='tipo-region1-7-13' label="Tipo de Documento" variant="filled" native labelId="w66666er">
                            <option aria-label="None" value="" />
                            {
                                (data_array.region_band_0) ?
                                    (<></>) :
                                    (data_array.region_data_0).map((item, index) => (
                                        (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )))
                            }
                        </Select>
                    </FormControl>
                    <FormControl disabled={data_array.city_band_0} error={data_array.error_band_14} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Cuidad</InputLabel>
                        <Select onChange={handleChange} id='tipo-cali1-7-14' label="Tipo de Documento" variant="filled" native labelId="we44444r">
                            <option aria-label="None" value="" />
                            {
                                (data_array.city_band_0) ?
                                    (<></>) :
                                    (data_array.city_data_0).map((item, index) => (
                                        (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )))
                            }
                        </Select>
                    </FormControl>
                </form>

                <div className={state_user_form['cls-7']}>
                    <Typography className={state_user_form['cls-8']}> Informacion Eclesial </Typography>
                </div>

                <form className={state_user_form['cls-2']} noValidate autoComplete="off">
                    <TextField
                        disabled={data_array.disabled_all}
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
                        disabled={data_array.disabled_all}
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
                        disabled={data_array.disabled_all}
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
                </form>

                <div className={state_user_form['cls-7']}>
                    <Typography className={state_user_form['cls-8']}> Lugar de Bautizmo </Typography>
                </div>

                <form className={state_user_form['cls-2']} noValidate autoComplete="off">
                    <FormControl disabled={!data_array.loading} error={data_array.error_band_19} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Pais</InputLabel>
                        <Select onChange={handleChange} id='tipo-pais2-7-19' label="Tipo de Documento" variant="filled" native labelId="waa111er">
                            <option aria-label="None" value="" />
                            {

                                (!data_array.loading) ?
                                    (<></>) :
                                    (data_array.country_data).map((item, index) => (
                                        (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl disabled={data_array.region_band_1} error={data_array.error_band_20} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Region</InputLabel>
                        <Select onChange={handleChange} id='tipo-region2-7-20' label="Tipo de Documento" variant="filled" native labelId="weddr">
                            <option aria-label="None" value="" />
                            {
                                (data_array.region_band_1) ?
                                    (<></>) :
                                    (data_array.region_data_1).map((item, index) => (
                                        (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )))
                            }
                        </Select>
                    </FormControl>
                    <FormControl disabled={data_array.city_band_1} error={data_array.error_band_21} variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="wer">Cuidad</InputLabel>
                        <Select onChange={handleChange} id='tipo-cuidad2-7-21' label="Tipo de Documento" variant="filled" native labelId="wer1222">
                            <option aria-label="None" value="" />
                            {
                                (data_array.city_band_1) ?
                                    (<></>) :
                                    (data_array.city_data_1).map((item, index) => (
                                        (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )))
                            }
                        </Select>
                    </FormControl>
                </form>


            </div>

            <Button onClick={handleSubmit} disabled={data_array.diabled_submit} className={state_user_form['cls-12']}>
                {
                    (data_array.diabled_submit) ? 'Desactivado' :
                        (data_array.loading_submit) ? 'Guardar' : (<CircularProgress
                            size={24}
                            color="inherit"
                        />)
                }
            </Button>


            <Dialog
                open={data_array.dialog_open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Usuario Registrado"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        El usuario se ha registrado correctamente.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handle_dialog_open} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>

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
    //console.log(data_array, 'data_array');
    //expresssion regular 
   // console.log(e.target.value, e.target.id, validateFormate(e, type));

    if ((e.target.value) === null || (e.target.value).length === 0) {
        setdata_array({ ...data_array, [error]: false });
    }
    else if (validateFormate(e, type)) {
        //console.log('valido help',getNameState((e.target.id).split('-')[3]), e.target.value);
        console.log('data vija', data_array);
        setdata_array({
            ...data_array, [error]: false,
            [getNameState((e.target.id).split('-')[3])]: e.target.value
        });
        console.log('data nueva', data_array);
        validateDocument(e, data_array, setdata_array, error);
        validate_country_region_city(e, data_array, setdata_array);
        validate_button_register(e, data_array, setdata_array);
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
        '8': /^{[0-9-aA-zZ:,"\s{}]*}$/,
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
  *  @decs  : Validar si el documento o email ya existe
*/
async function validateDocument(e, data_array, setdata_array, error) {

    try {

        if (e.target.id === 'i-p-0-0' || e.target.id === 'tipo-email-4-7') {
            setdata_array({ ...data_array, [`${(e.target.id === 'i-p-0-0') ? 'disabled_0' : 'disabled_1'}`]: true });
            let response = await fetch(`https://demon789-4.herokuapp.com/${(e.target.id === 'i-p-0-0') ? 'zsdcr' : 'zsdemp'}/${e.target.value}`);
            let data = await response.json();

            if (data[0] === undefined) {

                setdata_array({
                    ...data_array,
                    [`${(e.target.id === 'i-p-0-0') ? 'disabled_0' : 'disabled_1'}`]: false,
                    [error]: false,
                    [getNameState((e.target.id).split('-')[3])]: e.target.value
                });

            }
            else {
                setdata_array({ ...data_array, [`${(e.target.id === 'i-p-0-0') ? 'disabled_0' : 'disabled_1'}`]: false, [error]: true });
            }
            //alert('validar');

        }


    } catch (error) {
        console.log(error);
    }



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
        '18': 'experience_json'
    }

    return state[index];

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : verficar con timer que se haya termiando la comsulta
*/
function timer_consult_verify(data_array, setdata_array) {


    const timer = setInterval(() => {

        if (localStorage.getItem('countries_band') === 'false') {
            console.log('termino');
            setdata_array({ ...data_array, loading: true, country_data: JSON.parse(localStorage.getItem('countries')) });
            clearInterval(timer);
        }

    }, 1000);

    return timer;
}

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Validar que si selciono un pais activar el campo de region y luego ciduad
*/
async function validate_country_region_city(e, data_array, setdata_array) {

    if (e.target.id === 'tipo-pais1-7-12' || e.target.id === 'tipo-pais2-7-19') {
        //Cristiank -- "vamos campeon,que no son tiempos de estres, 
        //              son tiempos demostar nuestra voluntad inquenbrantable
        //              de sacar nuestra familia adelante"
        console.log('test', data_array.country_data[(e.target.value) - 1]);
        //get para obtener las regiones de un pais
        let response = await fetch(`https://demon789-4.herokuapp.com/zcrcp/2/${e.target.value}`);
        let data = await response.json();
        console.log('validar', data);
        setdata_array({
            ...data_array,
            [(e.target.id === 'tipo-pais1-7-12') ? 'doc_from' : 'doc_from_aux']: (data_array.country_data[(e.target.value) - 1]).name,
            [(e.target.id === 'tipo-pais1-7-12') ? 'region_data_0' : 'region_data_1']: data,
            [(e.target.id === 'tipo-pais1-7-12') ? 'region_band_0' : 'region_band_1']: false
        });
    }

    //cuidades de una region
    if (e.target.id === 'tipo-region1-7-13' || e.target.id === 'tipo-region2-7-20') {
        //get para obtener las ciudades de una region
        let response = await fetch(`https://demon789-4.herokuapp.com/zcrcp/3/${e.target.value}`);
        let data = await response.json();
        console.log('validar city', data);
        setdata_array({
            ...data_array,
            [(e.target.id === 'tipo-region1-7-13') ? 'city_data_0' : 'city_data_1']: data,
            [(e.target.id === 'tipo-region1-7-13') ? 'city_band_0' : 'city_band_1']: false
        });
    }
}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  TODO : No funciona
  *  @decs  : Validar si puede dar click en el boton de registrar
*/
function validate_button_register(e, data_array, setdata_array) {

    //for each para validar que todos los campos esten llenos
    let index = 0;
    let campos_validos_llenos = 0;

    for (const data in data_array) {

        if (index <= 20) {

            if (data !== 'second_name' && data !== 'second_last_name' && data !== 'phone_2' && data !== 'id_church_now' && data !== 'experience_json') {

                if (data_array[data] !== '') {
                    campos_validos_llenos++;
                    console.log(campos_validos_llenos, data, data_array[data]);
                }

            }

        }
        else {
            break;
        }

        index++;
    }
   
    console.log('campos validos llenos', campos_validos_llenos);
    if (campos_validos_llenos >= 16) {
        console.log('entro a con 18');
        setdata_array({ ...data_array, diabled_submit: false });
        campos_validos_llenos = null;
    }
}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Subtmitear el formulario
*/
async function submit_form(e, data_array, setdata_array) {

    try {

        if (!data_array.disabled_submit) {
            //e.preventDefault();
            setdata_array({
                ...data_array,
                loading_submit: false,
                disabled_all: true,
                disabled_0: true,
                disabled_1: true,
                loading: false,
                region_band_0: true, //13
                region_band_1: true, //20
                city_band_0: true,//14
                city_band_1: true,//21
                permit_submit: true
            });
            
            let response = await fetch(`https://demon789-4.herokuapp.com/zincrp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(data_array)
            });
            let data = await response.json();
            console.log('submit', data);
            setdata_array({
                ...data_array,
                loading_submit: true,
                disabled_all: false,
                disabled_0: false,
                disabled_1: false,
                loading: true,
                region_band_0: true, //13
                region_band_1: true, //20
                city_band_0: true,//14
                city_band_1: true,//21
                permit_submit: false,
                dialog_open: true
            });
        }
    }
    catch (error) {
        console.log(error);
    }

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @author : Juan Sebastian Camino Muñoz<juan.camino@correounivalle.edu.co>
  *  @author : Juan Felipe osorio <juan.felipe.osorio@correounivalle.edu.co>
  *  @decs  : Validar si puede dar click en el boton de registrar
*/
function validar_on_off_button() {

    //timer del otro
    let timer_on_off = setInterval(() => {

     //alert('hola');
      
    } , 6000);


    return timer_on_off;


}



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @author : Juan Sebastian Camino Muñoz<juan.camino@correounivalle.edu.co>
  *  @author : Juan Felipe osorio <juan.felipe.osorio@correounivalle.edu.co>
  *  @decs  : retonar un json con los id de los input del formulario
*/
function get_id_inputs_form() {
    
    let id_inputs_form = {
        '0': 'i-p-0-0',
        '1': 'first-name-1-1',
        '2': 'first_last_name',
        '3': 'second_last_name',
        '4': 'email',
        '5': 'phone_1',
        '6': 'phone_2',
        '7': 'id_church_now',
        '8': 'id_church_now_2',
        '9': 'id_church_now_3',
        '10': 'id_church_now_4',
        '11': 'id_church_now_5',
        '12': 'id_church_now_6',
        '13': 'id_church_now_7',
        '14': 'id_church_now_8',
        '15': 'id_church_now_9',
        '16': 'id_church_now_10',
        '17': 'id_church_now_11',
        '18': 'id_church_now_12',
        '19': 'id_church_now_13',
        '20': 'id_church_now_14',
        '21': 'id_church_now_15'

    }
       

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