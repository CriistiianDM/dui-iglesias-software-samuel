//libreria
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Montserrat_ExtraBold from '../../static/Montserrat-ExtraBold.ttf';
import styleGroup from '../../css/style_peoplegroup.css';
import { Typography, Button } from '@material-ui/core';
import { Icon, IconButton, CircularProgress } from '@material-ui/core';

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

  console.log(state_group, 'state_group', data_group_array);

  //use state
  const [data_array, set_data_array] = React.useState({
      loading: true,
  });

  return (
    <>
      <Typography className={classes.titleNameGroup}>{(data_group_array['nombre_grupo']).toUpperCase()}</Typography>
      <div className={state_group['cls-1']}>
        <Button className={classes.buttonAddPeopleGroup}>Añadir Persona</Button>
      </div>
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
          (data_array.loading) ? (<CircularProgress
            size={24}
            color="inherit"
          />) :
            (data).map((user) => (

              <div key={user.id} className={state_user_list['cls-6']}>
                <div className={state_user_list['cls-7']}>{user.first_name}</div>
                <div className={state_user_list['cls-7']}>{user.first_last_name}</div>
                <div className={state_user_list['cls-7']}>{user.doc}</div>
                <div className={state_user_list['cls-7']}>{user.position}</div>
              </div>

            ))

        }

        <div className={state_user_list['cls-8']}>
          <div className={state_user_list['cls-7']}> 3 registros </div>
          <IconButton> <Icon className={state_user_list['cls-7']}>keyboard_arrow_left</Icon> </IconButton>
          <IconButton> <Icon className={state_user_list['cls-7']}>keyboard_arrow_right</Icon></IconButton>
        </div>

      </div>
    </>
  )
}