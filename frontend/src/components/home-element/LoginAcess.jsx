//librerary or import
import { Typography } from '@material-ui/core';
import React from 'react';
import LoginAcessCss from '../../css/login_acess.css'

export function LoginAcess(props) {

  let state_loginAcess = props.properties;

  return (

    <>
      <div className={state_loginAcess['cls-1']}>
        <div className={state_loginAcess['cls-2']}>1</div>
        <div className={state_loginAcess['cls-2']}>1</div>
        <Typography>  Una vez sebas dijo, el amor no me importa, pero en el fondo anhelaba un amor</Typography>
      </div>
    </>

  )
}