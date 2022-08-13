//librery or import of react
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { AvatarAccount } from '../account-element/AvatarAccount';
import { WelcomeAccount } from '../account-element/WelcomeAccount';
import { FooterAccount } from '../account-element/FooterAccount';
import { Groups } from '../person-normal/Groups';
//token de autenticacion
const { generateToken } = require('../_____/_____');


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : page de la aplicacion /person-normal
*/
export function PersonNormal(props) {

  //useEffect para obtener el nombre y apellido del usuario
  React.useEffect(() => {
    get_user_name(localStorage.getItem('user_login'));
  }, []);


  //variable de estado
  let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
  let state_avatar_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[0];
  let state_Welcome_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[1];
  let state_footer_accounts = Object.values(Object.values(Object.entries(props)[0][1])[5])[4];
  let state_group = Object.values(Object.values(Object.entries(props)[0][1])[7])[0];


  //useEstado
  const [header_user, setHeaderUser] = React.useState({
    state_header_user: Object.values(Object.values(Object.entries(props)[0][1])[0])[1],
    nombre_persona: localStorage.getItem('user_name'),
  });

  return (

    <>
      <HeaderUser properties={header_user} />
      <div className={state_header_user['cls-6']}></div>
      <div className={state_group['cls-1']}>
      <AvatarAccount properties={state_avatar_account} />
      <WelcomeAccount properties={state_Welcome_account} />
      </div>
      <Groups properties={state_group} />
      <FooterAccount properties={state_footer_accounts} />
    </>

  )

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : fecht de la ruta znlp/:doc y retorna el nombre y apellido del usuario
*/
async function get_user_name(user_id) {

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
    localStorage.setItem('consult_refresh', 'true');
  } catch (error) {
    console.log(error);
  }

}