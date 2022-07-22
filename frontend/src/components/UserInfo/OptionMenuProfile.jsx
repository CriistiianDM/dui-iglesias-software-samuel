//librery or import of react
import { IconButton, Icon, Typography, Button } from '@material-ui/core';
import React from 'react';
import option_menu_profile from '../../css/option_menu_profile.css';


//18 personal information

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : option menu profile component
*/
export function OptionMenuProfile(props) {

    let state_option_menu_profile = props.properties;

    //set data to view
    let [data_array, set_data_array] = React.useState({
        loading: false,
        data: []
    });

    React.useEffect(() => {
        getData(data_array, set_data_array);
    }, []);

    return (

        <div className={state_option_menu_profile['cls-1']}>

            <div className={state_option_menu_profile['cls-2']}>

                <Button className={state_option_menu_profile['cls-3']}>

                    <div className={state_option_menu_profile['cls-4']}>
                        <Icon className={state_option_menu_profile['cls-6']}>edit</Icon>

                        <Typography className={state_option_menu_profile['cls-5']}>Modificar Info</Typography>
                    </div>

                </Button>

                <Button className={state_option_menu_profile['cls-3']}>

                    <div className={state_option_menu_profile['cls-4']}>
                        <Icon className={state_option_menu_profile['cls-6']}>save_as</Icon>

                        <Typography className={state_option_menu_profile['cls-5']}>Guardar</Typography>
                    </div>

                </Button>

                <Button className={state_option_menu_profile['cls-3']}>

                    <div className={state_option_menu_profile['cls-4']}>
                        <Icon className={state_option_menu_profile['cls-6']}>delete</Icon>

                        <Typography className={state_option_menu_profile['cls-5']}>Borrar Usuario</Typography>
                    </div>

                </Button>

                <Button className={state_option_menu_profile['cls-3']}>

                    <div className={state_option_menu_profile['cls-4']}>
                        <Icon className={state_option_menu_profile['cls-6']}>settings</Icon>

                        <Typography className={state_option_menu_profile['cls-5']}>Configuracion</Typography>
                    </div>

                </Button>


            </div>

            <div className={state_option_menu_profile['cls-7']}>

                <Typography className={state_option_menu_profile['cls-5']}>INFORMACION PERSONAL</Typography>

                <div className={state_option_menu_profile['cls-10']}>

                    {   (!data_array.loading)?
                        (state_option_menu_profile['info-personal']).map((value) => (
                            <div key={value.title} className={state_option_menu_profile['cls-8']}>
                                <Typography className={state_option_menu_profile['cls-5']}>{value.title}</Typography>
                                <input value={value.content} disabled className={state_option_menu_profile['cls-9']} />
                            </div>
                        ))
                        :
                        ( Object.entries(data_array.data)).map((value,index) => (
                            (index !== 0 && index <= 12)? (
                            <div key={index} className={state_option_menu_profile['cls-8']}>
                                <Typography className={state_option_menu_profile['cls-5']}>{value[0]}</Typography>
                                <input value={value[1]} disabled className={state_option_menu_profile['cls-9']} />
                            </div>
                            ) : null
                        ))

                    }

                </div>

                <Typography className={state_option_menu_profile['cls-5']}>INFORMACION ECLESIASTICA</Typography>
                <div className={state_option_menu_profile['cls-10']}>

                    {
                        (!data_array.loading)? 
                        (state_option_menu_profile['info-eclesiastica']).map((value) => (
                            <div key={value.title} className={state_option_menu_profile['cls-8']}>
                                <Typography className={state_option_menu_profile['cls-5']}>{value.title}</Typography>
                                <input value={value.content} disabled className={state_option_menu_profile['cls-9']} />
                            </div>
                        ))
                        :
                        ( Object.entries(data_array.data)).map((value,index) => (
                            (index > 14 && index !== 24 && index !== 18)? (
                            <div key={index} className={state_option_menu_profile['cls-8']}>
                                <Typography className={state_option_menu_profile['cls-5']}>{value[0]}</Typography>
                                <input value={value[1]} disabled className={state_option_menu_profile['cls-9']} />
                            </div>
                            ) : null
                        ))
                    }

                </div>
                <Typography className={state_option_menu_profile['cls-5']}>PERFIL OCUPACIONAL</Typography>
                <div className={state_option_menu_profile['cls-10']}>

                    {
                        (state_option_menu_profile['info-ocupacional']).map((value) => (
                            <div key={value.title} className={state_option_menu_profile['cls-8']}>
                                <Typography className={state_option_menu_profile['cls-5']}>{value.title}</Typography>
                                <input value={value.content} disabled className={state_option_menu_profile['cls-9']} />
                            </div>
                        ))
                    }


                </div>
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