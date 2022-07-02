//librery or import of react
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { AvatarAccount } from '../account-element/AvatarAccount';
import { WelcomeAccount } from '../account-element/WelcomeAccount';
import { FooterAccount } from '../account-element/FooterAccount';
import { Groups } from '../person-normal/Groups';

export function PersonNormal(props) {
    
    //variable de estado
    let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
    let state_avatar_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[0];
    let state_Welcome_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[1];
    let state_footer_accounts = Object.values(Object.values(Object.entries(props)[0][1])[5])[4];
    let state_group = Object.values(Object.values(Object.entries(props)[0][1])[7])[0];

    return (

        <>
            <HeaderUser properties={state_header_user} />
            <div className={state_header_user['cls-6']}></div>
            <AvatarAccount  properties={state_avatar_account} />
            <WelcomeAccount properties={state_Welcome_account} />
            <Groups properties={state_group} />
            <FooterAccount properties={state_footer_accounts} />
        </>

    )

}