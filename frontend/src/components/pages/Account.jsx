//librery or import
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { AvatarAccount } from '../account-element/AvatarAccount';
import { WelcomeAccount } from '../account-element/WelcomeAccount';
import { SettingAccounts } from '../account-element/SettingAccounts';
import { UserList } from '../account-element/UserList';
import { FooterAccount } from '../account-element/FooterAccount';

//token de autenticacion
const { generateToken } = require('../_____/_____')

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Account de la aplicacion /account
*/
export function Account(props) {

  //variables  
  let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
  let state_avatar_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[0];
  let state_Welcome_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[1];
  let state_Setting_accounts = Object.values(Object.values(Object.entries(props)[0][1])[5])[2];
  let state_user_accounts = Object.values(Object.values(Object.entries(props)[0][1])[5])[3];
  let state_footer_accounts = Object.values(Object.values(Object.entries(props)[0][1])[5])[4];
  let state_group = ((props.properties)['personal-information'])['0'];

  //useEstado
  const [header_user, setHeaderUser] = React.useState({
    state_header_user: Object.values(Object.values(Object.entries(props)[0][1])[0])[1],
    nombre_persona: localStorage.getItem('user_name'),
  });


  //useEffect para cargar la imagen de perfil
  React.useEffect(() => {
    get_user_name(localStorage.getItem('user_login'),header_user, setHeaderUser);
  }, []);

  return (
    <>
      <HeaderUser properties={header_user} />
      <div className={state_header_user['cls-6']}></div>
      <div className={state_group['cls-1']}>
      <AvatarAccount properties={state_avatar_account} />
      <WelcomeAccount properties={state_Welcome_account} />
      <SettingAccounts properties={state_Setting_accounts} />
      </div>
      <UserList properties={state_user_accounts} />
      <FooterAccount properties={state_footer_accounts} />
    </>
  );

}




/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : fecht de la ruta znlp/:doc y retorna el nombre y apellido del usuario
*/
async function get_user_name(user_id,header_user, setHeaderUser) {

  try {

    //fetch de la ruta znlp/:doc
    localStorage.setItem('consult_refresh', 'false');
    let response = await fetch(`https://demon789-4.herokuapp.com/znlp/${user_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': generateToken()
      }
    });

    let data = await response.json();
    //console.log(data, 'data');
    localStorage.setItem('user_name', `${data[0].first_name} ${data[0].first_last_name}`);
    setHeaderUser({...header_user, nombre_persona: localStorage.getItem('user_name')});
    localStorage.setItem('consult_refresh', 'true');
  } catch (error) {
    console.log(error);
  }

}