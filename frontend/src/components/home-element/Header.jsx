import React from "react";


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : header de la pagina /
*/
export function Header(props) {

    let state_header = props.properties;
    
    return (
        <>

         <header className={state_header['cls-1']}>
             Hola mundo y sebastian
         </header>

        </>
    )
}