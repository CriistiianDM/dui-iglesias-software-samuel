//librery or import
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { AvatarAccount } from '../account-element/AvatarAccount';
import { WelcomeAccount } from '../account-element/WelcomeAccount';
import { SettingAccounts } from '../account-element/SettingAccounts';


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Account de la aplicacion /account
*/
export function Account(props) {
    
     let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
     let state_avatar_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[0];
     let state_Welcome_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[1];
     let state_Setting_accounts = Object.values(Object.values(Object.entries(props)[0][1])[5])[2];
      

    return (
       <>
         <HeaderUser properties={state_header_user} />
         <div className={state_header_user['cls-6']}></div>
         <AvatarAccount properties={state_avatar_account} />
         <WelcomeAccount properties={state_Welcome_account} />
         <SettingAccounts properties={state_Setting_accounts} />
       </>
    );

}