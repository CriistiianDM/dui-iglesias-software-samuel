//librery or import of react
import { IconButton, Icon, Typography, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core';
import React from 'react';
import option_menu_profile from '../../css/option_menu_profile.css';

export function OptionMenuProfile(props) {

    let state_option_menu_profile = props.properties;

    let handle_dialog_open = () => {
         var cargos_Interface = false; 
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
                <Button onClick={() => { alert('clicked');}}className={state_option_menu_profile['cls-3']}>

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

                <Button className={state_option_menu_profile['cls-3']}>

                    <div className={state_option_menu_profile['cls-4']}>
                        <Icon className={state_option_menu_profile['cls-6']}>settings</Icon>

                        <Typography className={state_option_menu_profile['cls-5']}>Configuracion</Typography>
                    </div>

                </Button>


            </div>

            <div>
                <Dialog
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Error al inciar sesion"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            El usuario o la contraseña son incorrectos, si el problema persiste comuniquese con el administrador
                            juan.camino@correounivalle.edu.co con ASUNTO: Error al iniciar sesion Iglesia digital
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handle_dialog_open} color="primary">
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