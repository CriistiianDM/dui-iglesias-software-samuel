//librerary or import of react
import { Button , Typography } from '@material-ui/core';
import React from 'react';
import settingStyle from '../../css/settingStyle.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


export function SettingAccounts(props) {

   let state_Setting_accounts = props.properties;

   return (
    
     <div className={state_Setting_accounts['cls-1']}>
          <Button className={state_Setting_accounts['cls-2']}>
              <div className={state_Setting_accounts['cls-3']}>
                 <PersonAddIcon className={state_Setting_accounts['cls-4']} />
                 <Typography> HOLA</Typography>
              </div>
          </Button>
          <Button className={state_Setting_accounts['cls-2']}>2</Button>
          <Button className={state_Setting_accounts['cls-2']}>3</Button>
     </div>

   )

}