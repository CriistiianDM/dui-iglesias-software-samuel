//librery or import
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Account de la aplicacion /account
*/
export function Account(props) {
    
     let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];

    return (
       <>
         <HeaderUser properties={state_header_user} />
       </>
    );

}