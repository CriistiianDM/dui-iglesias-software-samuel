//librery or import
import React from 'react';
import logoIglesia  from '../../images/imagesHome/logo_iglesia.png';
import headerUserAccounts from '../../css/header-user-account.css';
import { Avatar, Button } from '@material-ui/core';



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : HeaderUser de la aplicacion /Account
*/
export function HeaderUser(props) {

    let state_header_user = props.properties;
    let [user, setUser] = React.useState({
      first_letter: '',
    });
    //let first_letter = localStorage.getItem('user_name').substring(0,1).toUpperCase();
    
    //useEffect para cargar la imagen de perfil
     React.useEffect(() => {
         get_user_name(localStorage.getItem('user_login'), user ,setUser);
          //setUser({...user, first_letter: localStorage.getItem('user_name').substring(0,1).toUpperCase()});
     } , []);

    return (

       <div className={state_header_user['cls-1']}>

          <div target="_blank" href="https://ipuc.org.co" className={state_header_user['cls-2']}> 
             <img className={state_header_user['cls-3']} alt="" src={logoIglesia} /> 
          </div>

          <Button className={state_header_user['cls-4']}>  <Avatar className={state_header_user['cls-5']}> {user.first_letter} </Avatar> </Button>

       </div>

    );

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