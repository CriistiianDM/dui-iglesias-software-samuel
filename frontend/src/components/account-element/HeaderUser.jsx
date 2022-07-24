//librery or import
import React from 'react';
import logoIglesia from '../../images/imagesHome/logo_iglesia.png';
import headerUserAccounts from '../../css/header-user-account.css';
import { useState } from 'react';
import { Avatar, Button, Menu, MenuItem } from '@material-ui/core'
import { Navigate, useNavigate } from "react-router-dom";


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


  const [userButton,setUserButton] = useState([false])

  let handle_user_IconMenu = (event) => {
    setUserButton(true);
 }

 const [anchorEl, setAnchorEl] = React.useState(null);
 const open = Boolean(anchorEl);

 let handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };

 let navigate = useNavigate();
 
 let handleClose = () => {
   navigate("/", { replace: true })
   setAnchorEl(null);
   
 };
  return (

    <div className={state_header_user['cls-1']}>

      <div target="_blank" href="https://ipuc.org.co" className={state_header_user['cls-2']}>
        <img className={state_header_user['cls-3']} alt="" src={logoIglesia} />
      </div>

      <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick} 
      className={state_header_user['cls-4']}>  <Avatar className={state_header_user['cls-5']}> {user.first_letter} </Avatar> </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
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