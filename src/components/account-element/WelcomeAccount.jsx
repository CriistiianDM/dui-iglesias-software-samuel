//librery or import of react
import { Typography } from '@material-ui/core';
import React from 'react';
import welcomeAccountStyle from '../../css/welcomeAccount.css';


export function WelcomeAccount(props) {

    let state_Welcome_account = props.properties;
    let welcome_name =  `${(state_Welcome_account['estado'])? 'Bienvenido' : ''} Cristian Camino Osorio`;

    return (

        <div className={state_Welcome_account['cls-1']}>
            <Typography variant='body1' className={state_Welcome_account['cls-2']}> 
                    {welcome_name}
            </Typography>
        </div>

    )
}