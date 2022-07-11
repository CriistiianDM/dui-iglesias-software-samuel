//librery or import of reacr
import React from 'react';
import userList from '../../css/user_list.css';
import { Icon, IconButton, TextField } from '@material-ui/core';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

export function UserList(props) {

    let state_user_list = props.properties;

    //set data to view
    let [data, setData] = React.useState([]);

    React.useEffect(() => {
          create_data_user(data, setData);
    }, []);
   

    return (

        <div className={state_user_list['cls-1']}>

            <div className={state_user_list['cls-2']}>

                <div className={state_user_list['cls-3']}>
                    USUARIOS
                </div>

                <form className={state_user_list['cls-4']} noValidate autoComplete="off">
                    <Icon className={state_user_list['cls-5']}>search</Icon>
                    <input type="search" className={state_user_list['cls-5']} placeholder="Buscar" />
                </form>

            </div>


            <div className={state_user_list['cls-6']}>
                <div className={state_user_list['cls-7']}>Editar</div>
                <div className={state_user_list['cls-7']}>P.Nombre</div>
                <div className={state_user_list['cls-7']}>P.Apellido</div>
                <div className={state_user_list['cls-7']} >Identificacion</div>
            </div>


            {
                
                (data).map((user) => (

                    <div  key={user.id} className={state_user_list['cls-6']}>
                        <div className={state_user_list['cls-7']}>{user.first_name}</div>
                        <div className={state_user_list['cls-7']}>{user.first_last_name}</div>
                        <div className={state_user_list['cls-7']}>{user.doc}</div>
                        <IconButton>
                            <RemoveRedEyeIcon className={state_user_list['cls-7']} />
                        </IconButton>
                    </div>

                ))

            }

            <div className={state_user_list['cls-8']}>
                <div className={state_user_list['cls-7']}> 6 registros </div>
                <IconButton> <Icon className={state_user_list['cls-7']}>keyboard_arrow_left</Icon> </IconButton>
                <IconButton> <Icon className={state_user_list['cls-7']}>keyboard_arrow_right</Icon></IconButton>
            </div>

        </div>

    )


}

// FUNCTIONAL COMPONENT



/**
 * @author cristian duvan machado <cristian.machado@correounivalle.edu.co>
 * @description : enviar los datos de la consulta a la vista
 * @param {Object} data 
 */
async function create_data_user(data, setData) {

   try {
      //fetch data from server
      let response = await fetch('http://localhost:4500/zaup');
      let data = await response.json();
      console.log(data);
      setData(data);
   } catch (error) {
       console.log(error);
   }


}