//librery or import of react
import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import avatarStyle from '../../css/avatarStyle.css';

export function AvatarAccount(props) {

   let state_avatar_account = props.properties;
   let first_letter = localStorage.getItem('user_name').substring(0,1).toUpperCase();


   return (

       <div className={state_avatar_account['cls-1']}>

             <Avatar className={state_avatar_account['cls-2']}>  
                    <Typography className={state_avatar_account['cls-3']}>{first_letter}</Typography> 
             </Avatar>
             
       </div>

   )


}