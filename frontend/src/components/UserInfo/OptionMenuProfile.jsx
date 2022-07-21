//librery or import of react
import { IconButton, Icon, Typography, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import option_menu_profile from '../../css/option_menu_profile.css';

export function OptionMenuProfile(props) {

    let state_option_menu_profile = props.properties;

    const [openCargos,setOpenCargos] = useState(false);
    const [openConfig,setOpenConfig] = useState(false);

    return (

        <div className={state_option_menu_profile['cls-1']}>

            <div className={state_option_menu_profile['cls-2']}>

                <Button className={state_option_menu_profile['cls-3']}>

                    <div className={state_option_menu_profile['cls-4']}>
                        <Icon className={state_option_menu_profile['cls-6']}>edit</Icon>

                        <Typography className={state_option_menu_profile['cls-5']}>Modificar Info</Typography>
                    </div>

                </Button>
                <Button onClick={() => setOpenCargos(true)}className={state_option_menu_profile['cls-3']}>

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
                        <DialogContentText id="dialog-description">
                            Aqui veras los cargos de este usuario y podras añadirle otros mas
                        </DialogContentText>
                        <DialogActions>
                            <Button onClick={() =>setOpenCargos(false)} color="primary">
                            Añadir Cargo
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