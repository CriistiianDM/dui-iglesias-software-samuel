//librery or import
import React  from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { ChangePhotoProfile } from '../UserInfo/ChangePhotoProfile';

export function UserInfo(props) {


    let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
    let state_avatar_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[5];

    return (
 
         <>
          <HeaderUser properties={state_header_user} />
          <div className={state_header_user['cls-6']}></div>
          <ChangePhotoProfile properties={state_avatar_account} />
         </>
    )
    
}