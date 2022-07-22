//librery or import
import React from 'react';
import logoIglesia from '../../images/imagesHome/logo_iglesia.png';
import headerUserAccounts from '../../css/header-user-account.css';
import { Avatar, Button, MenuItem, ListItemIcon, Divider } from '@material-ui/core';




/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : HeaderUser de la aplicacion /Account
*/
export function HeaderUser(props) {

  let state_header_user = (props.properties).state_header_user;
  let [user, setUser] = React.useState({
    first_letter: (props.properties).nombre_persona,
  });
  //let first_letter = localStorage.getItem('user_name').substring(0,1).toUpperCase();

  //useEffect para cargar la imagen de perfil
  React.useEffect(() => {
    update_user_name(user, setUser)
    console.log(user, 'user salidad 21');
  }, []);

 


  return (

    <div className={state_header_user['cls-1']}>

      <div target="_blank" href="https://ipuc.org.co" className={state_header_user['cls-2']}>
        <img className={state_header_user['cls-3']} alt="" src={logoIglesia} />
      </div>

      <Button  className={state_header_user['cls-4']}>  <Avatar className={state_header_user['cls-5']}> {user.first_letter} </Avatar> </Button>

    </div>

  );

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : actualizar nombre de usuario con timer
*/
function update_user_name(user, setUser) {

  let letter_before = '';
  let letter_after = '';

  const timer = setInterval(() => {


    setUser({...user, first_letter: localStorage.getItem('user_name').substring(0,1).toUpperCase()});
    console.log(user, 'setUser');
    
    letter_before = (user.first_letter).substring(0, 1).toUpperCase();
    letter_after = localStorage.getItem('user_name').substring(0, 1).toUpperCase();
    console.log(letter_before, letter_after, 'salida before after');


    if (localStorage.getItem('consult_refresh') === 'true') {
      console.log('consult_refresh true');
      clearInterval(timer);
    }


  }, 100);

  return timer;

}
