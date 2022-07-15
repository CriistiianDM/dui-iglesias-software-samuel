//libreary or imports
import React from "react";
import { Button, IconButton } from '@material-ui/core';
import header_home from '../../css/header_home.css';
import logoIglesia  from '../../images/imagesHome/logo_iglesia.png';
import MenuIcon from '@material-ui/icons/Menu';

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : header de la pagina /
*/
export function Header(props) {

    let state_header = props.properties;
    
    return (
        <>

         <header className={state_header['cls-1']}>

            <Button target="_blank" href="https://ipuc.org.co" className={state_header['cls-2']}> 
                <img className={state_header['cls-3']} alt="" src={logoIglesia} /> 
            </Button>
           
            <IconButton  className={state_header['cls-4']} aria-label="menu">
                <MenuIcon fontSize="large"  />
            </IconButton>

         </header>

        </>
    )
}