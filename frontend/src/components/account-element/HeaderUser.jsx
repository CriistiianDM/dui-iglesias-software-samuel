//librery or import
import React from 'react';
import logoIglesia  from '../../images/imagesHome/logo_iglesia.png';
import headerUserAccounts from '../../css/header-user-account.css';

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : HeaderUser de la aplicacion /Account
*/
export function HeaderUser(props) {

    let state_header_user = props.properties;

    return (

       <div className={state_header_user['cls-1']}>

          <div target="_blank" href="https://ipuc.org.co" className={state_header_user['cls-2']}> 
             <img className={state_header_user['cls-3']} alt="" src={logoIglesia} /> 
          </div>

          
          
          <div className={state_header_user['cls-4']}>
              Account de la aplicacion
          </div>

       </div>

    );

}