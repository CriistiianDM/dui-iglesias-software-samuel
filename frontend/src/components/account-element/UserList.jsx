//librery or import of reacr
import React from 'react';
import userList from '../../css/user_list.css';
import { Icon, IconButton, TextField, CircularProgress } from '@material-ui/core';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
//token de autenticacion
const { generateToken } = require('../_____/_____');


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : user list component
*/
export function UserList(props) {

    let state_user_list = props.properties;
    const navigate = useNavigate();

    //set data to view
    let [data, setData] = React.useState([]);
    let [data_array, setdata_array] = React.useState({
        loading: true
    });

    React.useEffect(() => {
        create_data_user(data, setData, data_array, setdata_array);

    }, []);

    //handle click on eye icon
    let handleClick = (e) => {
        //console.log(e.target.farthestViewportElement,e,e.target.lastChild);
        handleClickEye(e,navigate);
    }

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
                <div className={state_user_list['cls-7']}>P.Nombre</div>
                <div className={state_user_list['cls-7']}>P.Apellido</div>
                <div className={state_user_list['cls-7']} >Identificacion</div>
                <div className={state_user_list['cls-7']}>Editar</div>
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
                            <IconButton onClick={handleClick}  className='aux-click-boton-eye' >
                                <RemoveRedEyeIcon id={`eyeIcon-${user.doc}`} className={state_user_list['cls-7']} />
                            </IconButton>
                        </div>

                    ))

            }

            <div className={state_user_list['cls-8']}>
                <div className={state_user_list['cls-7']}> 3 registros </div>
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
async function create_data_user(data, setData, data_array, setdata_array) {

    try {
        //fetch data from server
        let response = await fetch('https://demon789-4.herokuapp.com/zaup', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': generateToken()
            }
          });

        let data = await response.json();

        console.log(data);
        setData(data);
        setdata_array({ ...data_array, loading: false });
    } catch (error) {
        console.log(error);
    }


}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : capturar el id del ojo y enviarlo a user_info
*/

async function handleClickEye(e,navigate) {
    //let id = e.target.className;
    //console.log(id);

    let lastChild = e.target.lastChild;
    let id = e.target.farthestViewportElement;
    let id_eye = '';

    if (lastChild === null) {
       //console.log('no hay hijo',id.id);
       id_eye = id.id;
    }
    else if (id !== null) {
        //console.log('hay hijo',lastChild.className, $($(lastChild).parent()).find('.title-info-user-table').attr('id'));
        id_eye = $($(lastChild).parent()).find('.title-info-user-table').attr('id');
    }
    else {
        //console.log('no hay id',e.target.id);
        id_eye = e.target.id;
    }

    console.log(id_eye);

    //send id to user_info
    let response = await fetch(`https://demon789-4.herokuapp.com/zadtus/${(id_eye).split('-')[1]}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': generateToken()
        }
      });

    let data = await response.json();

    if (data[0] !== undefined) {
       localStorage.setItem('user_info_eye', JSON.stringify(data[0]));
       navigate('/userinfo');
    }


    console.log(data);

}