//librerarys or imports
import React from 'react';
import { Header } from '../home-element/Header';



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : home de la aplicacion /
*/
export function Home(props) {

  //state of componets
  let state_header = Object.values(Object.values(Object.entries(props)[0][1])[0])[0];
  

  return (
      <>
        <Header properties={state_header} />
      </>
  );
  
}