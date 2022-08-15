//libreria
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Montserrat_ExtraBold from '../../static/Montserrat-ExtraBold.ttf';
import styleGroup from '../../css/style_peoplegroup.css';
import { Typography, Button } from '@material-ui/core';
import { Icon, IconButton, CircularProgress, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText,
        Select, InputLabel, FormControl } from '@material-ui/core';


//token de autenticacion
const { generateToken } = require('../_____/_____')


//estilos de los componentes
const useStyles = makeStyles((theme) => ({

  titleNameGroup: {
    fontFamily: Montserrat_ExtraBold,
    fontSize: '4em',
    fontWeight: '500',
    color: 'hsl(198deg 32% 16%)',
    textAlign: 'center'
  },
  buttonAddPeopleGroup: {
    fontFamily: Montserrat_ExtraBold,
    fontSize: '1em',
    fontWeight: '500',
    color: '#fff',
    backgroundColor: 'hsl(198deg 32% 16%)',
    textAlign: 'center',
    //hover
    '&:hover': {
      backgroundColor: 'hsl(198deg 32% 16%)',
      color: '#fff',
    }
  },
  formtDataUser: {
    display: 'grid',
    width: '100%',
    height: '100%',
  },
  botonColorAux: {
    color: '#ff725e',
  }
}));



/**
 * @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 * @des vista para añadir personas a un grupo
 * @param {json} props 
 */
export function AddPeopleGroup(props) {

  //variable de estado
  let state_group = (((props.properties).properties).addpeoplegroup)['0'];
  let state_user_list = (((props.properties).properties).avatarStyle)['3']
  const data_group_array = JSON.parse(localStorage.getItem('group_selected'))
  const classes = useStyles();
  const data = JSON.parse(localStorage.getItem('data_user'));

  //console.log(state_group, 'state_group', data_group_array);

  //use state
  const [data_array, set_data_array] = React.useState({
    loading: true,
    dialog_open: false,
    enable_button: true,
    data_user: [],
    group_selected: data_group_array.id,
  });

  //use state
  const [data_array_1, set_data_array_1] = React.useState({
    loading: true,
    dialog_open: false,
    enable_button: true,
    error_dialog: false,
    dialog_open_error: false,
  });

  //use state
  const [data_array_2, set_data_array_2] = React.useState({
    loading: true,
    data: [],
    group_selected: data_group_array.id, 
  });

  //handle para cerrar el dialogo
  const handleClose = () => {
    set_data_array_1({ ...data_array_1, dialog_open: false, dialog_open_error: false });

  }

  //handle para abrir el dialogo
  const handleOpen = () => {
    set_data_array_1({ ...data_array_1, dialog_open: true });
  }

  //handle para seleccionar un grupo
  const handleChange = (e) => {
    fetch_add_user_group(data_array, set_data_array,e,data_array_1, set_data_array_1,data_array_2, set_data_array_2)
  }

  //use effect para traer los usuarios que no estan en el grupo seleccionado
  React.useEffect(() => {
    fetch_data_user_group_selected(data_array_2, set_data_array_2)
    fetch_data_user_group(data_array, set_data_array)
  }, []);

  return (
    <>
      <Typography className={classes.titleNameGroup}>{(data_group_array['nombre_grupo']).toUpperCase()}</Typography>
      { (localStorage.getItem('permiso_cargo') === 'Lider') ?
      <div className={state_group['cls-1']}>
        <Button disabled={data_array.enable_button} onClick={handleOpen} className={classes.buttonAddPeopleGroup}>Añadir Persona</Button>
      </div> : null 
      }
      <div className={state_user_list['cls-1']}>

        <div className={state_user_list['cls-2']}>

          <div className={state_user_list['cls-3']}>
            Miembros del Grupo
          </div>

          <form className={state_user_list['cls-4']} noValidate autoComplete="off">
            <Icon className={state_user_list['cls-5']}>search</Icon>
            <input type="search" className={state_user_list['cls-5']} placeholder="Buscar" />
          </form>

        </div>

        <div className={state_user_list['cls-6']}>
          <div className={state_user_list['cls-7']}>P.Nombre</div>
          <div className={state_user_list['cls-7']}>P.Apellido</div>
          <div className={state_user_list['cls-7']} >Identificacion</div>
          <div className={state_user_list['cls-7']}>Cargo</div>
        </div>


        {
          (data_array_2.loading) ? (<CircularProgress
            size={24}
            color="inherit"
          />) :
            (data_array_2.data).map((user,index) => (

              <div key={index} className={state_user_list['cls-6']}>
                <div className={state_user_list['cls-7']}>{user.first_name}</div>
                <div className={state_user_list['cls-7']}>{user.first_last_name}</div>
                <div className={state_user_list['cls-7']}>{user.doc}</div>
                <div className={state_user_list['cls-7']}>{user.status}</div>
              </div>

            ))

        }

        <div className={state_user_list['cls-8']}>
          <div className={state_user_list['cls-7']}> 3 registros </div>
          <IconButton> <Icon className={state_user_list['cls-7']}>keyboard_arrow_left</Icon> </IconButton>
          <IconButton> <Icon className={state_user_list['cls-7']}>keyboard_arrow_right</Icon></IconButton>
        </div>

      </div>
      <Dialog
        open={data_array_1.dialog_open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Añadir Personas Al Grupo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Por favor seleccione las personas que desea añadir al grupo.
            Nota: Al seleccionar una persona, se agregara automaticamente a la lista de miembros del grupo.
          </DialogContentText>
          <FormControl className={classes.formtDataUser} variant="filled" >
            <InputLabel value="#" htmlFor="wer">Añadir Personas</InputLabel>
            <Select disabled={data_array.enable_button} onChange={handleChange} label="Tipo de Documento" variant="filled" native labelId="w66666er">
              <option aria-label="None" value="" />
              {

                (data_array.data_user).map(
                  (element, index) => (
                    <option aria-label="None" value={`${element.id}`} key={index}>{`${element['first_name']} ${element['first_last_name']}`}</option>
                  )
                )
              }

            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button disabled={data_array.enable_button} onClick={handleClose} className={classes.botonColorAux}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={data_array_1.dialog_open_error}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`${(data_array_1.error_dialog)? "Error Al Añadir la Persona":"Persona añadida con Exito"}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {(data_array_1.error_dialog)? "No se pudo añadir la persona al grupo":"La persona se añadio con exito al grupo"}	
          </DialogContentText>
      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.botonColorAux}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Fetch para traer a los usuarios que no estan el grupo seleccionado
*/
async function fetch_data_user_group(data_array, set_data_array) {

  try {

    const response = await fetch(`https://demon789-4.herokuapp.com/zdpsg/${data_array.group_selected}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': generateToken()
      }
    });

    const data = await response.json();
    //console.log(data, 'data11');
    if (data[0] !== undefined) {
      set_data_array({ ...data_array, enable_button: false, data_user: data });
    }

  } catch (error) {
    set_data_array({ ...data_array, enable_button: true, data_user: [] });
    console.log(error);
  }

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Fetch para enviar al usuario al grupo seleccionado
*/
async function fetch_add_user_group(data_array, set_data_array,e,data_array_1, set_data_array_1,data_array_2, set_data_array_2) {

    try {


      let object = new Object();
      object.person_id = e.target.value
      object.group_id = data_array.group_selected
      object.position_id = 1
      object.status = 'miembro'
      object.logical_erase = false
      //console.log(object, 'object');

      //desabilitar boton
      set_data_array({ ...data_array, enable_button: true });

      const response = await fetch(`https://demon789-4.herokuapp.com/zipg`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': generateToken()
        },
        mode: 'cors',
        body: JSON.stringify(object)
      });

      const data = await response.json();

      if (data.message === 'ok') {
        set_data_array_1({ ...data_array_1, dialog_open: false , error_dialog: false ,dialog_open_error: true});
        fetch_data_user_group(data_array, set_data_array)
        fetch_data_user_group_selected(data_array_2, set_data_array_2)
      }
      else {
        set_data_array_1({ ...data_array_1, dialog_open: false , error_dialog: true ,dialog_open_error: true});
      }


    } catch (error) {
      set_data_array_1({ ...data_array_1, dialog_open: false , error_dialog: true ,dialog_open_error: true});
      console.log(error);
    }
}

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Fetch para traer a los usuarios que estan en el grupo seleccionado
*/
async function fetch_data_user_group_selected(data_array, set_data_array) {

   try {

    const response = await fetch(`https://demon789-4.herokuapp.com/zgallpg/${data_array.group_selected}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': generateToken()
      }
    });

    const data1 = await response.json();

    if (data1[0] !== undefined) {
      set_data_array({ ...data_array, loading: false, data: data1 });
    }
    else {
      set_data_array({ ...data_array, loading: true , data: [] });
    }
    
   } catch (error) {
     console.log(error);
   }

}