//librery or import of react
import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import avatarStyle from '../../css/avatarStyle.css';

export function AvatarAccount(props) {

   let state_avatar_account = props.properties;

   return (

       <div className={state_avatar_account['cls-1']}>

             <Avatar className={state_avatar_account['cls-2']}>  
                    <Typography className={state_avatar_account['cls-3']}>C</Typography> 
             </Avatar>
             
       </div>

   )


}