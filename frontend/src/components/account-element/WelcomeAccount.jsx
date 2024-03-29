//librery or import of react
import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import welcomeAccountStyle from '../../css/welcomeAccount.css';


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : WelcomeAccount Component
*/
export function WelcomeAccount(props) {


    //estados boleanos para validar los campos
    const [user_valid_data, setUserValid] = React.useState({
         user_name: localStorage.getItem('user_name'),
         loading: false,
         data: []
    });

    //useEffect para obtener el nombre y apellido del usuario 
    useEffect(() => {
      update_user_name(user_valid_data, setUserValid);
      if (!state_Welcome_account['estadoName']) {
      getData(user_valid_data, setUserValid);
      }
    } , []);
 

    let state_Welcome_account = props.properties;
    let welcome_name =  `${(state_Welcome_account['estado'])? 'Bienvenido' : ''} 
                         ${(state_Welcome_account['estadoName'])? user_valid_data.user_name : 
                           (!user_valid_data.loading)? 'Cargando...': `${(user_valid_data.data)['first_name']} ${(user_valid_data.data)['first_last_name']}`} `;


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
  *  @decs  : actualizar nombre de usuario con timer
*/
function update_user_name(user, setUser) {

  let letter_before = '';
  let letter_after = '';

  const timer = setInterval(() => {


    setUser({...user, user_name: localStorage.getItem('user_name')});
    //console.log(user, 'setUser 12333');
    
    letter_before = (user.user_name).substring(0, 1).toUpperCase();
    letter_after = localStorage.getItem('user_name').substring(0, 1).toUpperCase();
    //console.log(letter_before, letter_after, 'salida before after welcome');

    if (localStorage.getItem('consult_refresh') === 'true') {
      //console.log('consult_refresh true');
      clearInterval(timer);
    }

  }, 100);

  return timer;

}



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : get data from local storage
*/
function getData(data_array, set_data_array) {

    
  const timer = setInterval(() => {

  let data = localStorage.getItem('user_info_eye');

  if (data != null) {
      clearInterval(timer);
      //console.log('data not null');
      set_data_array({...data_array, loading: true, data: JSON.parse(data)});
  } 

  //console.log('get data');
  }, 1000);

  return timer;

}