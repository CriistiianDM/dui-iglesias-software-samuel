//librerary or import
import { Typography, Button } from '@material-ui/core';
import React from 'react';
import LoginAcessCss from '../../css/login_acess.css'



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : LoginAcess de la aplicacion /
*/
export function LoginAcess(props) {

  let state_loginAcess = props.properties;

  return (

    <>
      <div className={state_loginAcess['cls-1']}>

        <div className={state_loginAcess['cls-2']}>

          <Typography className={state_loginAcess['cls-3']}> Mision </Typography>

          <Typography variant='body1' className={state_loginAcess['cls-4']} >
            "Id por todo el mundo y predicad el evangelio a toda criatura" <strong>San Marcos 16:15</strong>
          </Typography>

          <Typography className={state_loginAcess['cls-3']}> Vision </Typography>

          <Typography variant='body1' className={state_loginAcess['cls-4']} >
            Alcanzar a todos los que podamos;
            ganar a todos los que alcancemos;
            formar a todos los que ganemos;
            y usar a todos los que formemos.
          </Typography>


        </div>


        <div className={state_loginAcess['cls-2']}>

          <Typography className={state_loginAcess['cls-3']}> Quienes Somos </Typography>

          <Typography component='span' variant='body2' className={state_loginAcess['cls-4']} >

            <p>Conscientes de esta necesidad, nuestra labor se basa fundamentalmente en los principios bíblicos y
              como una expresión de estos, tenemos unos Artículos de Fe que expresan nuestras convicciones
              espirituales. </p>

            <p>Asimismo, contamos con Estatutos que nos permiten ser reconocidos
              como un cuerpo organizado ante las autoridades, y un Reglamento Interno que especifica
              la forma bíblica en que debemos llevar a cabo nuestro trabajo.</p>

            <p>Además, existen Normas Disciplinarias que nos permiten corregir situaciones anómalas de carácter administrativo, 
               ético, moral, familiar y doctrinal.</p>

            <p>Nos reconocemos miembros del cuerpo de Jesucristo, y por lo tanto hermanos en la fe, todos los que profesamos los mandamientos establecidos por el 
               Espíritu Santo en el libro de los Hechos de los Apóstoles, 2: 38-39.</p>

          </Typography>


        </div>



      </div>
    </>

  )
}