//import librery react
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { CreateUserForm } from '../createuser-element/CreateUserForm';
import { FooterAccount } from '../account-element/FooterAccount';
import { useNavigate } from 'react-router-dom';
const { verificar_inicio_sesion } = require('./login_acces_verify');

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : create user de la aplicacion /
*/
export function CreateUser(props) {

    let state_create_user_form = Object.values(Object.values(Object.entries(props)[0][1])[8])[0];
    let state_footer_accounts = Object.values(Object.values(Object.entries(props)[0][1])[5])[4];
    const navigate = useNavigate();

    //useEstado
    const [header_user, setHeaderUser] = React.useState({
        state_header_user: Object.values(Object.values(Object.entries(props)[0][1])[0])[1],
        nombre_persona: localStorage.getItem('user_name'),
    });


    //useEffect para cargar la imagen de perfil
    React.useEffect(() => {
        verificar_inicio_sesion(navigate,'/createuser');
    }, []);


    //render
    return (
        <>
            {
                (localStorage.getItem('permiso_cargo') === 'Administrador' ||
                 localStorage.getItem('permiso_cargo') === 'asistente administrativo')?
                    <>
                        <HeaderUser properties={header_user} />
                        <div className={header_user.state_header_user['cls-6']}></div>
                        <CreateUserForm properties={state_create_user_form} />
                        <FooterAccount properties={state_footer_accounts} />
                    </> : null
            }
        </>
    );


}


