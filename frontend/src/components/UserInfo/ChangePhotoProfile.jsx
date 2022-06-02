//librery or import of react
import { Avatar, Button, Icon, Typography } from '@material-ui/core';
import React from 'react';
import avatarStyle from '../../css/avatarStyle.css';



export function ChangePhotoProfile(props) {

    let state_avatar_account = props.properties;


    return (

        <div className={state_avatar_account['cls-1']}>

            <Button className={state_avatar_account['cls-2']}>
                
                <Avatar  className={state_avatar_account['cls-5']}>
                    <Typography className={state_avatar_account['cls-3']}>C</Typography> 
                </Avatar>
                
            </Button>

            <div className={state_avatar_account['cls-6']}>
                <Icon>add_a_photo</Icon>
            </div>


        </div>

    )


}