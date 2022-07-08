//librery or import of reacr
import React from 'react';
import userList from '../../css/user_list.css';
import { Icon, IconButton, TextField } from '@material-ui/core';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

export function UserList(props) {

    let state_user_list = props.properties;
   

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

                (state_user_list['usuarios']).map((user) => (

                    <div  key={user.id} className={state_user_list['cls-6']}>

                        <IconButton>
                            <RemoveRedEyeIcon className={state_user_list['cls-7']} />
                        </IconButton>
                        <div className={state_user_list['cls-7']}>{user.firstName}</div>
                        <div className={state_user_list['cls-7']}>{user.lastName}</div>
                        <div className={state_user_list['cls-7']}>{user.id}</div>
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
function create_data_user(data) {

    return {
        id: data.id,
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
    }


}