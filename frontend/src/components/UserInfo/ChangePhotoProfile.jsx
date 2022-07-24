//librery or import of react
import { Avatar, Button, Icon, Typography } from '@material-ui/core';
import React from 'react';
import avatarStyle from '../../css/avatarStyle.css';



export function ChangePhotoProfile(props) {

    let state_avatar_account = props.properties;

    //set data to view
    let [data_array, set_data_array] = React.useState({
        loading: false,
        data: []
    });

    React.useEffect(() => {
        getData(data_array, set_data_array);
    }, []);

    return (

        <div className={state_avatar_account['cls-1']}>

            <Button className={state_avatar_account['cls-2']}>

                <Avatar className={state_avatar_account['cls-5']}>
                    <Typography className={state_avatar_account['cls-3']}>
                        {
                            (!data_array.loading)? 'C'
                            : ((data_array.data)['first_name'].charAt(0))
                        }
                    </Typography>
                </Avatar>

            </Button>

            <div className={state_avatar_account['cls-6']}>
                <Icon className={state_avatar_account['cls-7']}>add_a_photo</Icon>
            </div>


        </div>

    )


}



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : get data from local storage
*/
function getData(data_array, set_data_array) {

    
    const timer = setInterval(() => {

    let data = localStorage.getItem('user_info_eye');

    if (data != null) {
        clearInterval(timer);
        console.log( Object.entries(JSON.parse(data)).forEach((value) => {
            console.log(value);
        }));
        set_data_array({...data_array, loading: true, data: JSON.parse(data)});
    } 

    console.log('get data');
    }, 1000);

    return timer;

}