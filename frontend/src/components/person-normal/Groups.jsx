//librery or import
import { Icon, Typography } from "@material-ui/core";
import React from "react";
import styleGroup from "../../css/style_group.css";
import logoIglesia  from '../../images/imagesHome/logo_iglesia.png';

//bienvenida a casa github copilot, te heche de menos, de verdad que te heche de menos, te quiero mucho


export function Groups(props) {

    //variable de estado
    let state_group = props.properties;

    return (

        <div className={state_group['cls-1']}>


            <div className={state_group['cls-2']}>
 
                <div  className={state_group['cls-3']}>
                    <img alt="" src={logoIglesia} className={state_group['cls-4']} />
                </div>

                <div  className={state_group['cls-5']}>

                    <div className={state_group['cls-8']}>
                    <Typography  className={state_group['cls-6']}>Titulo De Grupo</Typography>
                    </div>

                    <div className={state_group['cls-8']} id="descrision-grupo">
                    <Typography  className={state_group['cls-7']}>{
                        //generar una descripcion del grupo de cualquier cosa
                        "Descripcion del grupo"
                    }</Typography>
                    </div>

                </div>
               
            </div>



        </div>
    )

}