//librery or import
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { ChangePhotoProfile } from '../UserInfo/ChangePhotoProfile';
import { WelcomeAccount } from '../account-element/WelcomeAccount';
import { OptionMenuProfile } from '../UserInfo/OptionMenuProfile';
import { FooterAccount } from '../account-element/FooterAccount';
import { useNavigate } from 'react-router-dom';


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : vista user info
*/
export function UserInfo(props) {


    let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
    let state_avatar_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[5];
    let state_Welcome_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[6];
    let state_Setting_accounts = Object.values(Object.values(Object.entries(props)[0][1])[6])[0];
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


    return (

        <>
            <HeaderUser properties={header_user} />
            <div className={state_header_user['cls-6']}></div>
            <ChangePhotoProfile properties={state_avatar_account} />
            <WelcomeAccount properties={state_Welcome_account} />
            <OptionMenuProfile properties={state_Setting_accounts} />
            <FooterAccount properties={state_footer_accounts} />
        </>
    )

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

        console.log('hola');

    }, 100);

    return timer;

}