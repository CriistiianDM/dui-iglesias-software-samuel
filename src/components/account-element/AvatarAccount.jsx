//librery or import of react
import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import avatarStyle from '../../css/avatarStyle.css';

export function AvatarAccount(props) {

   let state_avatar_account = props.properties;
   //let first_letter = localStorage.getItem('user_name').substring(0,1).toUpperCase();
   let [user, setUser] = React.useState({
      first_letter: '',
   });

    //useEffect para cargar la imagen de perfil
    React.useEffect(() => {
         get_user_name(localStorage.getItem('user_login'), user ,setUser);
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
  *  @decs  : fecht de la ruta znlp/:doc y retorna el nombre y apellido del usuario
*/
async function get_user_name(user_id, user, setUser) {
     
      try {

        //fetch de la ruta znlp/:doc
        let response = await fetch(`http://localhost:4500/znlp/${user_id}`);
        let data = await response.json();
        console.log(data, 'data');
        localStorage.setItem('user_name', `${data[0].first_name} ${data[0].first_last_name}`);
        setUser({...user, first_letter: localStorage.getItem('user_name').substring(0,1).toUpperCase()});
      } catch (error) {
        console.log(error);
      }
     
}