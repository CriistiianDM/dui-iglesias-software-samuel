//librery or import of react
import { IconButton, Icon, Typography, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, List, ListItem, ListItemAvatar, ListItemText, PersonIcon, AddIcon, Avatar} from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import option_menu_profile from '../../css/option_menu_profile.css';

export function OptionMenuProfile(props) {

    let state_option_menu_profile = props.properties;

    const [openCargos,setOpenCargos] = useState(false);
    const [openConfig,setOpenConfig] = useState(false);
    

    let handleCargos = (event) => {
         setOpenCargos(true);
         fetch_data_cargo();
         console.log(searchCargos)
      }
    
    let searchCargos 
    let vectCargos

    async function fetch_data_cargo(){
        const response_fetch = await fetch(`https://demon789-4.herokuapp.com/zcvg/123456729`);
        const data_fetch = await response_fetch.json();
        searchCargos= data_fetch;
        vectCargos = searchCargos.split(',')
        console.log(searchCargos)
        console.log( vectCargos)
    }
    function SimpleDialog(props) {
        const { onClose, selectedValue, open } = props;
      
        const handleClose = () => {
          onClose(selectedValue);
        };
      
        const handleListItemClick = (value) => {
          onClose(value);
        };
      
        return (
          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <List sx={{ pt: 0 }}>
              {vectCargos.map((vectCargo) => (
                <ListItem button onClick={() => handleListItemClick(vectCargo)} key={vectCargo}>
                  <ListItemText primary={vectCargo} />
                </ListItem>
              ))}
            </List>
          </Dialog>
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
                >
                    <SimpleDialog></SimpleDialog>
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

                    {
                        (state_option_menu_profile['info-personal']).map((value) => (
                            <div key={value.title} className={state_option_menu_profile['cls-8']}>
                                <Typography className={state_option_menu_profile['cls-5']}>{value.title}</Typography>
                                <input value={value.content} disabled className={state_option_menu_profile['cls-9']} />
                            </div>
                        ))
                    }

                </div>

                <Typography className={state_option_menu_profile['cls-5']}>INFORMACION ECLESIASTICA</Typography>
                <div className={state_option_menu_profile['cls-10']}>

                    {
                        (state_option_menu_profile['info-eclesiastica']).map((value) => (
                            <div key={value.title} className={state_option_menu_profile['cls-8']}>
                                <Typography className={state_option_menu_profile['cls-5']}>{value.title}</Typography>
                                <input value={value.content} disabled className={state_option_menu_profile['cls-9']} />
                            </div>
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