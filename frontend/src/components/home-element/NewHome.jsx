//importar librerias
import React from 'react';
import { NewLogin } from './NewLogin';


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : home de la aplicacion /
*/
export function NewHome(props) {

    const properties = props.properties;

    return (

          <div  className={properties['cls-1']}>
            <div></div>
            <div className={properties['cls-2']}>
                <NewLogin properties={props} />
            </div>
          </div>
    );


}