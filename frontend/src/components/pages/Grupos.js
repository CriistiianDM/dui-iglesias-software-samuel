import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Select, Input, InputLabel, FormHelperText, createTheme, Grid, FormControl } from '@material-ui/core';
import $ from 'jquery';
import {
  Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText
} from '@material-ui/core';



const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: 'Raleway, Arial'

  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      /*margin: theme.spacing(1),*/
      background: "white",
      color: "white",
      width: '90%',
      flex: "none",
      marginBottom: "2vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: '100px',
      justifyItems: 'center',
    },
  },
  archivo: {
    '& > *': {
      margin: theme.spacing(1.5),
      width: '25ch',
      background: 'auto',
      color: 'black',
    },
  },
  styleTitleSistemas: {
    fontFamily: 'Raleway, Arial',
    color: 'black',
    fontSize: '3.3em !important',
    textAlign: 'center',
    padding: '0.4em 0.4em', /* para centrar profundizar los textos, reduciendo los espacios. */
    /*hyphens: 'auto', */
    /* wordBreak: 'break-all' esta es para responsive pero con las letras quedando a la mitad y lo demás se pone en la siguiente linea, como un salto.  */
    '@media screen and (max-width:600px)': {
      fontSize: '2em !important'
    }
  },
  styleTitle: {
    fontFamily: 'Raleway, Arial',
    color: 'black',
    fontSize: '2.1em !important',
    textAlign: 'center',
    padding: '0.3em 0.3em', /* para centrar profundizar los textos, reduciendo los espacios. */
    /*hyphens: 'auto', */
    /* wordBreak: 'break-all' esta es para responsive pero con las letras quedando a la mitad y lo demás se pone en la siguiente linea, como un salto.  */
    '@media screen and (max-width:600px)': {
      fontSize: '1em !important'
    }
  },
  formControl: {
    margin: theme.spacing(1),
    width: '20em',
    '@media screen and (max-width:280px)': {
      width: '12em'
    }
  },
  paperContainer: {
    height: 'auto',
    width: '80%',
    background: 'auto',
    webkitBoxShadow: '-2px 0px 9px 1px rgba(0,0,0,0.89)',
    boxShadow: '-1px 0px 10px 2px rgba(0,0,0,0.89);',
    padding: '0.8em 0.8em',
    margin: "auto",
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax( min(100%, 12em), 1fr))',
    gridGap: '0.5em',
    minHeight: '15em',
    gridAutoRows: 'auto',
    justifyContent: "space-between",
    justifyItems: 'center',
    alignItems: 'center',
    overflow: 'hidden' /* un objeto se pasa del limite del grid 100%, lo que hace es que lo desaparece para que no se muestre. */

  },
  divBoton: {
    position: 'center',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    margin: 'auto',
  },
  boton: {
    width: 'auto',
    height: 'auto',
    backgroundImage: '#3f51b5',
    boxShadow: '-1px 0px 10px 2px rgba(0,0,0,0.89);',
    borderRadius: '20px',
    textAlign: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  ancho: {
    display: 'grid !important',
    width: '12em',
    '@media screen and (max-width:280px)': {
      width: '12em'
    }
  }


}));


/**
 * @author Juan Felipe Osorio Zapata <juan.felipe.osorio@correounivalle.edu.co>
 *
 * The above function is a React component that is used to create a form to create a group.
 * @param props - This is the props object that is passed to the component.
 * @returns A component with a form to create a group.
 */
export function Grupos(props) {

  //variables
  let state_user_form = props.properties;
  //hacer un console.log para ver que esta pasando con el state_user_form
  let busquedaJson = Object.values((state_user_form)["jovenLider"])[0]["identificacion"]; //busquedaJson es el json que se va a buscar en el backend
  let navigate = useNavigate();


  //useStates
  const [data_array, setdata_array] = React.useState({
    name: "",
    description: "",
    img_data: "",
    id_person: "",
    error_band_0: false,
    error_band_1: false,
    error_band_2: false,
    error_band_3: false,
    disabled_name: false,
    disabled_all: false,
    dialog_open: false,
    dialog_error: false,
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

  const [img_data, set_img_data] = React.useState();
  const [joven_lider, set_joven_lider] = React.useState({
    loading: true,
    data: [],

  });
  const [data_array_1, setdata_array_1] = React.useState({
    disabled_submit: false,
  });

  //useEffect
  React.useEffect(() => {
    getJovenes(joven_lider, set_joven_lider); //llamada a la funcion getJovenes
    validar_on_off_button(data_array_1, setdata_array_1); //llamada a la funcion validar_on_off_button
  }, []);



  //handle change
  const handleChange = (event) => {
    validateForm(event, data_array, setdata_array, set_img_data);
  }

  let handle_dialog_open = () => {
    setdata_array({ ...data_array, dialog_open: false });
    navigate('/account');
  }

  let handle_dialog_error = () => {
    setdata_array({ ...data_array, dialog_error: false });
    
  }


  //Styles. 
  // <TextField type="file" id="outlined-required" variant="outlined"/>
  const classes = useStyles();
  const theme = createTheme();

  theme.typography.h4 = {
    fontSize: '0rem',
    '@media (min-width:400px)': {
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  };


  //función evento para navegar posterior a rellenar datos de grupo. 
  const onClickk = () => {
    console.log(data_array, 'data_array');
    postGrupo(data_array, img_data, setdata_array);
  }


  return (

    <>

      <FormControl className={classes.FormControl}>
        <h1 className={classes.styleTitleSistemas}>Grupos</h1>
      </FormControl>

      <div className={classes.paperContainer}>

        <div className={classes.root}>

          <TextField disabled={data_array.disabled_name} error={data_array.error_band_0} onBlur={handleChange} id="outlined-required-9-0" label="Nombre" variant="outlined" />
        </div>

        <div className={classes.root}>
          <TextField disabled={data_array.disabled_all} error={data_array.error_band_1} onChange={handleChange} id="outlined-multiline-9-1" required={true} fullWidth={true} maxRows={3} multiline={true} label="Descripción" variant="outlined" />
        </div>

        <div className={classes.root}>
          <Input disabled={data_array.disabled_all} className={classes.archivo} onChange={handleChange} id="outlined-file-10-2" accept="image/*" type="file" variant="filled" />
        </div>


        <div>
          <FormControl className={classes.ancho} variant="filled">
            <InputLabel htmlFor="">Lider Joven</InputLabel>
            <Select id="joven-lider-7-3" onChange={handleChange} label="Tipo de Documento" variant="filled" native>
              <option value="" />
              {
                (joven_lider.loading) ?
                  //un for each para recorrer el json busquedaJson
                  (busquedaJson).map((key, index) => (

                    <option key={index} value={key.identificacion}>{key.nombre}</option>

                  )) :
                  (joven_lider.data).map((key, index) => (

                    <option key={index} value={key.id}>{key.first_name + ` ${key.first_last_name}`}</option>
                  )
                  )
              };
            </Select>
          </FormControl>
        </div>

      </div>

      <div className={classes.divBoton}>
        <Button onClick={onClickk} disabled={data_array_1.disabled_submit} className={classes.boton} variant="contained" color="primary">
          Enviar
        </Button>
      </div>

      <Dialog
        open={data_array.dialog_open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Grupo Registrado"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            El Grupo se ha registrado correctamente.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handle_dialog_open} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={data_array.dialog_error}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Error Al Registrar"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            El Grupo no se ha podido crear, porfavor revise su conexion a internet.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handle_dialog_open} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>


  );

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Validar el formulario de creacion de grupo.
*/
function validateForm(e, data_array, setdata_array, set_img_data) {

  let type = (e.target.id).split('-')[2];
  let error = `error_band_${(e.target.id).split('-')[3]}`;

  //expresssion regular 
  if ((e.target.value) === null || (e.target.value).length === 0) {
    setdata_array({ ...data_array, [error]: false });
  }
  else if (validateFormate(e.target.value, type)) {

    //guardar la img en una variable para poder enviarla al servidor.
    if (e.target.id === "outlined-file-10-2") {
      const fileData = new FormData();
      fileData.append('file_img', e.target.files[0]);
      set_img_data(fileData);
    }

    setdata_array({
      ...data_array,
      [error]: false,
      [getNameState((e.target.id).split('-')[3])]: e.target.value
    });

    
    //validar si el nombre no esta en la base de datos
    if (e.target.id === "outlined-required-9-0") {
      get_name_group(data_array, setdata_array,e,error)
    }

  }
  else {
    setdata_array({ ...data_array, [error]: true });
  }

}


function validateFormate(e, type) {

  //expresssion regular
  var regex = {
    '0': /^[0-9]{9,15}$/,
    '1': /^[aA-zZ]{3,50}$/, //validar texto de 3 a 50 caracteres, sin espacios.
    '2': /^[aA-zZ]{2}$/,
    '3': /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
    '4': /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    '5': /^[a-zA-Z]$/,
    '6': /^[0-9-a-zA-Z\s#\-]{10,255}$/,
    '7': /^[0-9]{1,5}$/,
    '8': /^{[0-9-aA-zZ:,'"]+}$/,
    '9': /^[a-zA-Z\s]{3,50}$/, //Validar espaciados y textos. 
    '10': /^[0-9-aA-zZ\s\/:.]+$/, //Validar espaciados y textos.
  }

  //validar el formato
  if ((regex[type]).exec(e) != null) {
    return true;
  }
  else {
    return false;
  }

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : retornar el nombre de state a cambiar
*/
function getNameState(index) {

  const state = {
    '0': 'name',
    '1': 'description',
    '2': 'img_data',
    '3': 'id_person',
  }

  return state[index];

}


/**
 * @author Juan Felipe Osorio Zapata <juan.felipe.osorio@correounivalle.edu.co>
 * @description : enviar los datos de la consulta de jovenes lideres a la vista. 
 * @param {Object} data 
*/
async function getJovenes(jovenL, setJovenL) {

  try {

    let response = await fetch('https://demon789-4.herokuapp.com/zjlp');
    let data1 = await response.json();
    //guardar en setJovenL el json de la consulta, recordando la información anterior
    setJovenL({
      ...jovenL,
      data: data1,
      loading: false
    });

    console.log(data1);

  } catch (error) {
    console.log(error);
  }

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : post para enviar la info y crear un nuevo grupo
*/
async function postGrupo(data_array, img_data, setdata_array) {

  try {

    setdata_array({ ...data_array, 
                   disabled_all: true,
                   disabled_name: true
                   });
    

    if (img_data !== null) {

    let response = await fetch(`https://demon789-4.herokuapp.com/zfiles`, {
      method: 'POST',
      body: img_data,
      mode: 'cors',
    });
    
   } 
    

    let post_response = await fetch(`https://demon789-4.herokuapp.com/zcrgppipe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(data_array)
    });
  
    let data = await post_response.json();

    if (data.message === "ok") {

      localStorage.setItem('kill_timer_cr', 'true');
      setdata_array({ ...data_array, dialog_open: true });

    }
    else {

      setdata_array({ ...data_array, 
        disabled_all: false,
        disabled_name: false,
        dialog_error: true
      });  
      
    }


  } catch (error) {
   
    //manejar el error
    setdata_array({ ...data_array, 
      disabled_all: false,
      disabled_name: false,
      dialog_error: true
    });

    console.log(error);
  }

}



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @author : Juan Sebastian Camino Muñoz<juan.camino@correounivalle.edu.co>
  *  @author : Juan Felipe osorio <juan.felipe.osorio@correounivalle.edu.co>
  *  @decs  : Validar si puede dar click en el boton de registrar
*/
function validar_on_off_button(data_array_1, setdata_array_1) {

  let array_id = get_id_inputs_form()
  let index = 0

  //timer del otro
  let timer_on_off = setInterval(() => {

    for (const key in array_id) {

      if ((array_id[key]).split(',')[1] === 'true' && validateFormate($(`#${(array_id[key]).split(',')[0]}`).val(), ((array_id[key]).split(',')[0]).split('-')[2]) && $(`#${(array_id[key]).split(',')[0]}`).attr('aria-invalid') === 'false') {
        index++;
      }
  
    }

    if (index === 2) {
      setdata_array_1({
        ...data_array_1,
        disabled_submit: false,
      });
    }
    else {
      setdata_array_1({
        ...data_array_1,
        disabled_submit: true,
      });
    }

    index = 0

    if (localStorage.getItem('kill_timer_cr') === 'true') {
      //enviar falso
      localStorage.setItem('kill_timer_cr', 'false');
      clearInterval(timer_on_off);
    }

  }, 500);


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
    '0': 'outlined-required-9-0,true',
    '1': 'joven-lider-7-3,true'
  }

  return id_inputs_form;

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : get para validar que el nombre del grupo no este repetido
*/
async function get_name_group(data_array, setdata_array,e,error) {

  try {

    setdata_array({
      ...data_array,
     disabled_name: true
    });

    //fetcher para la consulta de grupos
    let response = await fetch(`https://demon789-4.herokuapp.com/znmgr/${e.target.value}`);
    let data = await response.json();
    
    if (data[0] === undefined) {
      setdata_array({
        ...data_array,
        [error]: false,
        [getNameState((e.target.id).split('-')[3])]: e.target.value,
        disabled_name: false 
      });
    }
    else {
      setdata_array({ ...data_array, 
                      [error]: true,
                      [getNameState((e.target.id).split('-')[3])]: '',
                      disabled_name: false 
                    });
    }


  } catch (error) {
    console.log(error);
  }
}