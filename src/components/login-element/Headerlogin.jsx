//libreary or imports
import React from "react";
import logoIglesia  from '../../images/imagesHome/logo_iglesia.png';
import login_style from '../../css/login_style.css';
import header_home from '../../css/header_home.css';

/**
  *  @author : Juan Sebastian Camino <juan.camino@correounivalle.edu.co>
  *  @decs  : header de la pagina /
*/
export function Headerlogin(props) {

    let state_headerlogin = props.properties;
    
    return (
        <>

         <header className={state_headerlogin['cls-1']}>

            <div className={state_headerlogin['cls-2']}> 
                <img className={state_headerlogin['cls-3']} alt="" src={logoIglesia} /> 
            </div>

         </header>

        </>
    );
}