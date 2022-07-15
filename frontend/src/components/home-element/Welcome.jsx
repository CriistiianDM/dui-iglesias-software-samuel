//librery or import
import React from 'react';
import WelcomeStyle from '../../css/welcome-home.css'
import { Typography , Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Welcome de la aplicacion /
*/
export function Welcome(props) {

    let state_welcome = props.properties;

    return (

        <>
            <div className={state_welcome['cls-1']}>

                <Typography variant='body1' className={state_welcome['cls-2']}>
                    IGLESIA PENTECOSTAL UNIDA DE COLOMBIA
                </Typography>

                <Typography component='span' variant='body2' className={state_welcome['cls-3']}>
                    
                    Bienvenido a la iglesia Pentecostal Unida de Colombia, Para interactuar
                    con la iglesia, por favor inicia sesion.

                    <p> <Link to='/login'><Button className={state_welcome['cls-4']} > Inicia sesion!!!</Button></Link> </p>

                </Typography>

                
            </div>
        </>

    )
}