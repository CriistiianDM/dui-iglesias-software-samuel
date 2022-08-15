//librerarys or imports
import React from 'react';
import { NewHome } from '../home-element/NewHome';
import new_home_css from '../../css/new_home.css';
/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : home de la aplicacion /
*/
export function Home(props) {
 
  const state_new_home = ((props.properties).state_home)['2'];

  return (
      <>
       <NewHome properties={state_new_home} />
      </>
  );
  
}