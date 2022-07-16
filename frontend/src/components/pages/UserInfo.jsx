//librery or import
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { ChangePhotoProfile } from '../UserInfo/ChangePhotoProfile';
import { WelcomeAccount } from '../account-element/WelcomeAccount';
import { OptionMenuProfile } from '../UserInfo/OptionMenuProfile';
import { FooterAccount } from '../account-element/FooterAccount';


export function UserInfo(props) {


    let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
    let state_avatar_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[5];
    let state_Welcome_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[6];
    let state_Setting_accounts = Object.values(Object.values(Object.entries(props)[0][1])[6])[0];
    let state_footer_accounts = Object.values(Object.values(Object.entries(props)[0][1])[5])[4];

    //useEstado
    const [header_user, setHeaderUser] = React.useState({
        state_header_user: Object.values(Object.values(Object.entries(props)[0][1])[0])[1],
        nombre_persona: localStorage.getItem('user_name'),
    });

    return (

        <>
            <HeaderUser properties={header_user} />
            <div className={state_header_user['cls-6']}></div>
            <ChangePhotoProfile properties={state_avatar_account} />
            <WelcomeAccount properties={state_Welcome_account} />
            <OptionMenuProfile properties={state_Setting_accounts} />
            <FooterAccount properties={state_footer_accounts} />
        </>
    )

}