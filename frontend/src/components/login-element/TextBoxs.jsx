//libreary or imports
import React from "react";
import login_style from '../../css/login_style.css';

/**
  *  @author : Juan Sebastian Camino Muñoz<juan.camino@correounivalle.edu.co>
  *  @decs  : configuracion de las cajas de texto del login/
*/
export function TextBoxs(props) {

    let state_textboxs  = props.properties;
    
    return (
        <>
         <div className={state_textboxs['cls-4']}>
           <div className={state_textboxs['cls-5']}>
            caja1
           </div>
           <div className={state_textboxs['cls-6']}>
            caja2
           </div>
         </div>
        </>
    );
}