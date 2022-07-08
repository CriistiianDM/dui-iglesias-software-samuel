//librery or import of react
import { Typography } from '@material-ui/core';
import React from 'react';
import welcomeAccountStyle from '../../css/welcomeAccount.css';


export function WelcomeAccount(props) {

    //estados boleanos para validar los campos
    const [user_valid_data, setUserValid] = React.useState({
         user_name: localStorage.getItem('user_name'),
    });

    let state_Welcome_account = props.properties;
    let welcome_name =  `${(state_Welcome_account['estado'])? 'Bienvenido' : ''} ${user_valid_data.user_name}`;

    return (

        <div className={state_Welcome_account['cls-1']}>
            <Typography variant='body1' className={state_Welcome_account['cls-2']}> 
                    {welcome_name}
            </Typography>
        </div>

    )
}




