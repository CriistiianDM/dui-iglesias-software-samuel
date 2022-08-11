//importar librerias
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, IconButton, CircularProgress, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core/";
import Montserrat_ExtraBold from '../../static/Montserrat-ExtraBold.ttf';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useNavigate } from 'react-router-dom';
//token de autenticacion
const { generateToken } = require('../_____/_____');

//estilos de los componentes
const useStyles = makeStyles((theme) => ({

    titleSection: {
        marginTop: theme.spacing(3),
        color: 'hsl(198deg 32% 16%)',
        textAlign: 'center',
        fontSize: '2.5em',
        fontWeight: 'bold',
        fontFamily: Montserrat_ExtraBold
    },
    titleSectionBottom: {
        marginTop: theme.spacing(3),
        color: 'hsl(198deg 32% 16%)',
        textAlign: 'center',
        fontSize: '1em',
        fontWeight: '300',
        fontFamily: Montserrat_ExtraBold
    },
    formControlBox: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        gridTemplateColumns: '100%',
        gridRowGap: '0.9em',
        width: '80%',
        height: '80%',
    },
    buttonSubmit: {
        backgroundColor: '#ff725e',
        color: '#fff',
        fontWeight: 'bold',
        height: '3em',
        fontSize: '1em',
        //hover
        '&:hover': {
            backgroundColor: '#ff725e',
        },
    },
    textField: {
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
            borderColor: 'hsl(198deg 32% 16%) !important'
        },
        //cambiar el color de la letra del label
        '& .MuiFormLabel-root.Mui-focused': {
            color: 'hsl(198deg 32% 16%) !important'
        }

    },
    input: {
        backgroundColor: 'hsl(0deg 0% 92%)',
    },
    coloAux: {
        color: 'hsl(198deg 32% 16%)',
    },
    boxIcon: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        justifyItems: 'center',
        alignItems: 'center',
        height: '1em',
    }

}));



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : login de la aplicacion /
*/
export function NewLogin(props) {

    const properties = (props.properties).properties;
    const classes = useStyles();

    localStorage.setItem('user_name', `Cargando...`);

    //estados boleanos para validar los campos
    const [user_valid_data, setUserValid] = React.useState({
        user_login: '',
        password_login: '',
        loading: false,
        dialog_open: false,
        error_user: false,
        error_password: false,
        error_message_band_user: false,
        error_message_band_password: false,
        error_message_user: 'Solo numeros de 10 a 15 digitos',
        error_message_password: 'Solo letras y numeros de 8 a 35 digitos'
    });

    const navigate = useNavigate();

    let handle_dialog_open = () => {
        setUserValid({ ...user_valid_data, dialog_open: false });
    }

    let handleChange = (event) => {
        validate_data_info(event, user_valid_data, setUserValid);
    }

    let handleSubmit = (event) => {
        validate_data_all(user_valid_data, setUserValid, navigate);
    }

    return (

        <div className={properties['cls-3']}>

            <div className={properties['cls-4']}>
                <Typography className={classes.titleSection}>Iniciar sesión</Typography>
                <div className={classes.formControlBox} noValidate autoComplete="off">
                    <TextField id='user_loginbody' error={user_valid_data.error_user} helperText={(user_valid_data.error_message_band_user) ? user_valid_data.error_message_user : ''} onChange={handleChange} InputProps={{ className: classes.input }} className={classes.textField} type='number' label="Usuario" variant="outlined" />
                    <TextField id='passwd_loginbody' error={user_valid_data.error_password} helperText={(user_valid_data.error_message_band_password) ? user_valid_data.error_message_password : ''} onChange={handleChange} InputProps={{ className: classes.input }} className={classes.textField} type='password' label="Contraseña" variant="outlined" />
                    <Button onClick={handleSubmit} className={classes.buttonSubmit} type="submit" color="primary" variant="contained">
                        {(user_valid_data.loading) ?
                            <CircularProgress
                                size={24}
                                color="inherit"
                            /> : 'Iniciar'}
                    </Button>
                </div>
                <div className={classes.boxIcon}>
                    <IconButton target="_blank" href="https://www.facebook.com/IPUC.IglesiaPentecostalUnidadeColombiaOficial" aria-label="menu">
                        <FacebookIcon className={classes.coloAux} fontSize="large" />
                    </IconButton>
                    <IconButton target="_blank" href="https://www.instagram.com/ipucoficial/" aria-label="menu">
                        <InstagramIcon className={classes.coloAux} fontSize="large" />
                    </IconButton>
                </div>
                <Typography className={classes.titleSectionBottom}>Olvidé mi contraseña</Typography>
            </div>
            <Dialog
                open={user_valid_data.dialog_open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Error al inciar sesion"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        El usuario o la contraseña son incorrectos, si el problema persiste comuniquese con el administrador
                        juan.camino@correounivalle.edu.co con ASUNTO: Error al iniciar sesion Iglesia digital
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
  *  TODO: en los datos de prueba cree cedula de identidad de 9 digitos, no olvidar subirlo a 10 digitos
  *  @decs  : validar informacion de la caja de texto
*/
function validate_data_info(element, user_valid_data, setUserValid) {

    //expresion regular para validar el usuario
    let regex;
    let arraya_text_error = ['Solo numeros de 10 a 15 digitos', 'Solo letras y numeros de 8 a 35 digitos'];
    let array_valid = ['error_user', 'error_password',
        'error_message_band_user', 'error_message_band_password',
        'user_login', 'password_login',
        'error_message_user', 'error_message_password'];
    let index = 0;
    let index_aux = 2;
    let index_aux_2 = 4;
    let index_aux_3 = 6;

    //validar si el elemento es el usuario o la contraseña
    if (element.target.id === 'user_loginbody') {
        regex = /^[0-9]{9,15}$/;
    }
    else {
        regex = /^[aA-zZ0-9]{8,35}$/;
        index = 1;
        index_aux = 3;
        index_aux_2 = 5;
        index_aux_3 = 7;
    }

    //console.log(regex.exec(element.target.value), element.target.title , element.target.value);

    //validar si la informacion es correcta
    if ((element.target.value).length === 0) {
        setUserValid({
            ...user_valid_data,
            [array_valid[index_aux]]: false,
            [array_valid[index]]: false,
            [array_valid[index_aux_2]]: ''
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
            [array_valid[index_aux]]: true,
            [array_valid[index_aux_3]]: arraya_text_error[index]
        });
    }


}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : validar si ambos campos estan llenos y si no estan llenos mostrar un mensaje de error
*/
function validate_data_all(user_valid_data, setUserValid, navigate) {

    //poner el loadin en true
    //setUserValid({...user_valid_data, loading: true});

    if (!user_valid_data.error_user && !user_valid_data.error_password
        && user_valid_data.user_login.length > 0 && user_valid_data.password_login.length > 0) {

        fetch_data_login(user_valid_data, setUserValid, navigate);
    }
    else {
        setUserValid({
            ...user_valid_data,
            error_user: true,
            error_password: true,
            error_message_band_user: true,
            error_message_band_password: true,
            error_message_user: 'Los campos estan vacios o no cumplen con las condiciones',
            error_message_password: 'Los campos estan vacios o no cumplen con las condiciones'
        });
    }

    //setUserValid({...user_valid_data, loading: false});
}

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : fecht de la ruta /zlgz/:doc/:passwd para verificar el usuario y contraseña
*/
async function fetch_data_login(user_valid_data, setUserValid, navigate) {

    try {

        setUserValid({ ...user_valid_data, loading: true });
        const response = await fetch(`https://demon789-4.herokuapp.com/zlgz/${user_valid_data.user_login}/${user_valid_data.password_login}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': generateToken()
            }
        });

        const data = await response.json();
        console.log(data, 'teste', generateToken(), 'teste');

        if (data[0] !== undefined) {
            console.log(data, 'el usuario existe');

            //fetch
            const response_fetch = await fetch(`https://demon789-4.herokuapp.com/zcvg/${user_valid_data.user_login}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': generateToken()
                }
            });
            const data_fetch = await response_fetch.json();

            // guardar el usuario en el localstorage
            localStorage.setItem('user_login', user_valid_data.user_login);
            //console.log(data_fetch, 'data_fetch');

            if (JSON.stringify(data_fetch).split(',').length > 1) {
                console.log(data_fetch, 'el usuario existe');
                localStorage.setItem('cargo', JSON.stringify(data_fetch));
                //guardar el data_fetch en el localstorage
                navigate('/cargo')
            }
            else {
                console.log(data_fetch, 'el usuario no existe');
                navigate('/creyente')
            }

            //console.log( data_fetch , 'data_fetch');
            setUserValid({ ...user_valid_data, loading: false });
        }
        else {
            console.log(data, 'el usuario no existe');
            setUserValid({ ...user_valid_data, loading: false, dialog_open: true });
        }


    } catch (error) {
        console.log(error);
    }


}