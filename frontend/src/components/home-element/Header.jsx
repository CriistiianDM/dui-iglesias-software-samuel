//libreary or imports
import React from "react";
import { Button } from '@material-ui/core';
import header_home from '../../css/header_home.css'

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : header de la pagina /
*/
export function Header(props) {

    let state_header = props.properties;
    
    return (
        <>

         <header className={state_header['cls-1']}>
             <Button> click </Button>
         </header>

        </>
    )
}