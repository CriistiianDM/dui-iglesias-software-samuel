//import librery react
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { CreateUserForm } from '../createuser-element/CreateUserForm';



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : create user de la aplicacion /
*/
export function CreateUser(props) {

    let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
    let state_create_user_form = Object.values(Object.values(Object.entries(props)[0][1])[8])[0];

    //render
    return (
        <>
            <HeaderUser properties={state_header_user} />
            <div className={state_header_user['cls-6']}></div>
            <CreateUserForm properties={state_create_user_form} />
        </>
    );


}