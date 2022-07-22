//librery or import of react
import { IconButton, Icon, Typography, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, List, ListItem, ListItemAvatar, ListItemText, PersonIcon, AddIcon, Avatar} from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
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

    const [openCargos,setOpenCargos] = useState(false);
    const [openConfig,setOpenConfig] = useState(false);
    const [vectorCargos,setCargos] = useState([])

    let handleCargos = (event) => {
         setOpenCargos(true);
         fetch_data_cargo();
         console.log(searchCargos)
      }
    
    let searchCargos 
    let vectCargos

    async function fetch_data_cargo(){
        console.log((data_array.data)['doc'])
        const response_fetch = await fetch(`https://demon789-4.herokuapp.com/zcvg/${(data_array.data)['doc']}`);
        const data_fetch = await response_fetch.json();
        searchCargos= data_fetch;
        vectCargos = searchCargos.split(',')
        setCargos(vectCargos)    
    }
    function SimpleDialog(props) {
      
        return (

            <List sx={{ pt: 0 }}>
              {vectorCargos ?  vectorCargos.map((vectCargo) => {
                console.log(vectCargo)
               return(
                <ListItem button key={vectCargo}>
                  <ListItemText primary={vectCargo} />
                </ListItem>
                );
              }):'vector vacio'}
            </List>
        );
      }


    return (

        <div className={state_option_menu_profile['cls-1']}>

            <div className={state_option_menu_profile['cls-2']}>

                <Button className={state_option_menu_profile['cls-3']}>

                    <div className={state_option_menu_profile['cls-4']}>
                        <Icon className={state_option_menu_profile['cls-6']}>edit</Icon>

                        <Typography className={state_option_menu_profile['cls-5']}>Modificar Info</Typography>
                    </div>

                </Button>
                <Button onClick={handleCargos} className={state_option_menu_profile['cls-3']}>

                    <div className={state_option_menu_profile['cls-4']}>
                        <Icon className={state_option_menu_profile['cls-6']}>assignment</Icon>
        
                        <Typography className={state_option_menu_profile['cls-5']}>Cargos</Typography>
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

                <Button onClick={() => setOpenConfig(true)} className={state_option_menu_profile['cls-3']}>

                    <div className={state_option_menu_profile['cls-4']}>
                        <Icon className={state_option_menu_profile['cls-6']}>settings</Icon>

                        <Typography className={state_option_menu_profile['cls-5']}>Configuracion</Typography>
                    </div>

                </Button>


            </div>

            <div>
            <Dialog
                open={openCargos}
                onClose={() =>setOpenCargos(false)}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                >
                    <DialogTitle id="dialog-title">{"Gestion de Cargos"}</DialogTitle>

                    <DialogContent>       
                            <SimpleDialog></SimpleDialog>    
                    <DialogActions>
                        <Button onClick={() =>setOpenCargos(false)} color="primary">
                         añadir cargo
                        </Button>
                    </DialogActions>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() =>setOpenCargos(false)} color="primary">
                        Cerrar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div>
                <Dialog
                open={openConfig}
                onClose={() =>setOpenConfig(false)}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                >
                    <DialogTitle id="dialog-title">{"Gestion de Cargos"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="dialog-description">
                            Configuraciones
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() =>setOpenConfig(false)} color="primary">
                     Cerrar
                    </Button>
                    </DialogActions>
                </Dialog>
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