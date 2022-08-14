//import librery react
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { CreateUserForm } from '../createuser-element/CreateUserForm';
import { FooterAccount } from '../account-element/FooterAccount';
import { useNavigate } from 'react-router-dom';

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
        verificar_inicio_sesion(navigate);
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



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  TODO: para una version futura no olvidar verificar si el usuario existe en la base de datos.
  *  @decs  : timer para verficar si inicio sesion o no
*/
function verificar_inicio_sesion(navigate) {

    //expresion regular para verificar numeros
    const regex = /^[0-9]{9,15}$/;
  
    const timer = setInterval(() => {
  
      if (localStorage.getItem('user_login') === null) {
        navigate('/');
      }
      else {
  
        if (!regex.exec(localStorage.getItem('user_login'))) {
          navigate('/');
        }
  
      }
  
  
    }, 100);
  
    return timer;
  
  }