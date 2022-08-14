import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { WelcomeAccount } from '../account-element/WelcomeAccount';
import { FooterAccount } from '../account-element/FooterAccount';


export function Pastor(props) {


    let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
    let state_Welcome_account = Object.values(Object.values(Object.entries(props)[0][1])[5])[6];
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
            <WelcomeAccount properties={state_Welcome_account} />
            <FooterAccount properties={state_footer_accounts} />
        </>
    )

}