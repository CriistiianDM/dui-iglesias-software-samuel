//librery or import of react
import { Typography } from '@material-ui/core';
import React from 'react';
import welcomeAccountStyle from '../../css/welcomeAccount.css';


export function WelcomeAccount(props) {

    //estados boleanos para validar los campos
    const [user_valid_data, setUserValid] = React.useState({
         user_name: 'Cristian Camino Osorio',
    });

    //useEffect para obtener el nombre y apellido del usuario
    React.useEffect(() => {
        console.log(localStorage.getItem('user_login'), 'user_id');
        get_user_name(localStorage.getItem('user_login'), user_valid_data, setUserValid);
    }, []);

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


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : fecht de la ruta znlp/:doc y retorna el nombre y apellido del usuario
*/
async function get_user_name(user_id, user_valid_data, setUserValid) {
     
      try {

        //fetch de la ruta znlp/:doc
        let response = await fetch(`http://localhost:4500/znlp/${user_id}`);
        let data = await response.json();
        console.log(data, 'data');
        setUserValid({...user_valid_data, user_name: data[0].first_name + ' ' + data[0].first_last_name});
        console.log(data, 'data un nene lloraba');


      } catch (error) {
        console.log(error);
      }
     
}

