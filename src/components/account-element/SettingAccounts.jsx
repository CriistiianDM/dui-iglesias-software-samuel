//librerary or import of react
import { Button, Typography } from '@material-ui/core';
import React from 'react';
import settingStyle from '../../css/settingStyle.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Icon from '@material-ui/core/Icon';

export function SettingAccounts(props) {

   let state_Setting_accounts = props.properties;

   //console.log( (state_Setting_accounts['botones']).map( (boton) => (boton.id) )  );

   return (

      <div className={state_Setting_accounts['cls-1']}>

         {
            (state_Setting_accounts['botones']).map((boton) => (

               <Button key={boton.id} className={state_Setting_accounts['cls-2']} id={boton.id}>

                  <div className={state_Setting_accounts['cls-3']}>

                     <Icon  className={state_Setting_accounts['cls-4']}>{boton.icon}</Icon>

                     <div className={state_Setting_accounts['cls-5']}>

                        <Typography  className={state_Setting_accounts['cls-6']}>
                           {boton.title}
                        </Typography>

                        <Typography  className={state_Setting_accounts['cls-7']}>
                           {boton.content}
                        </Typography>

                     </div>

                  </div>

               </Button>

            ))

         }

      </div>

   )

}