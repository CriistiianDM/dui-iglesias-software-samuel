//librerarys or imports
import React from 'react';
import { Header } from '../home-element/Header';
import { Footer } from '../home-element/Footer';
import { LoginAcess } from '../home-element/LoginAcess';


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : home de la aplicacion /
*/
export function Home(props) {

  //state of componets
  let state_header = Object.values(Object.values(Object.entries(props)[0][1])[0])[0];
  let state_footer = Object.values(Object.values(Object.entries(props)[0][1])[1])[0];
  let state_loginAcess = Object.values(Object.values(Object.entries(props)[0][1])[2])[0];
  console.log(state_footer,'state_footer');

  return (
      <>
        <Header properties={state_header} />
        <div className={state_header['cls-6']}></div>
        <LoginAcess properties={state_loginAcess} />
        <Footer properties={state_footer} />
      </>
  );
  
}