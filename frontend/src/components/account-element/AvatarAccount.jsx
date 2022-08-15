//librery or import of react
import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import avatarStyle from '../../css/avatarStyle.css';



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Avatar de la aplicacion /account
*/
export function AvatarAccount(props) {

   let state_avatar_account = props.properties;
   //let first_letter = localStorage.getItem('user_name').substring(0,1).toUpperCase();
   let [user, setUser] = React.useState({
      first_letter: '',
   });

    //useEffect para cargar la imagen de perfil
    React.useEffect(() => {
      update_user_name(user, setUser)
      //console.log(user, 'user salidad 21');
    } , []);


   return (

       <div className={state_avatar_account['cls-1']}>

             <Avatar className={state_avatar_account['cls-2']}>  
                    <Typography className={state_avatar_account['cls-3']}>{user.first_letter}</Typography> 
             </Avatar>
             
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


    setUser({...user, first_letter: localStorage.getItem('user_name').substring(0,1).toUpperCase()});
    //console.log(user, 'setUser');
    
    letter_before = (user.first_letter).substring(0, 1).toUpperCase();
    letter_after = localStorage.getItem('user_name').substring(0, 1).toUpperCase();
    //console.log(letter_before, letter_after, 'salida before after avatar');

    if (localStorage.getItem('consult_refresh') === 'true') {
      //console.log('consult_refresh true');
      clearInterval(timer);
    }


  }, 100);

  return timer;

}