//libreria
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { FooterAccount } from '../account-element/FooterAccount';
import { PageCongrecasion } from '../congrecasion_vista/PageCongrecasion';
import styles_congregacion from '../../css/styles_congregacion.css';


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Vista para ver la informacion de la iglesia
  *
*/
export function Congregacion(props) {

    //variables  
    let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
    let state_footer_accounts = Object.values(Object.values(Object.entries(props)[0][1])[5])[4];
    let state_group = ((props.properties)['personal-information'])['0'];

    //useEstado
    const [header_user, setHeaderUser] = React.useState({
        state_header_user: Object.values(Object.values(Object.entries(props)[0][1])[0])[1],
        nombre_persona: localStorage.getItem('user_name'),
    });

    return (
        <> 
            {
             (localStorage.getItem('permiso_cargo') === 'Administrador' ||
              localStorage.getItem('permiso_cargo') === 'pastor' ||
              localStorage.getItem('permiso_cargo') === 'asistente administrativo')?
             <>
            <HeaderUser properties={header_user} />
            <div className={state_header_user['cls-6']}></div>
            <div className={state_group['cls-1']}>
            <PageCongrecasion  properties={props} />
            </div>
            <FooterAccount properties={state_footer_accounts} /> 
            </> : null
           }
        </>
    )


}