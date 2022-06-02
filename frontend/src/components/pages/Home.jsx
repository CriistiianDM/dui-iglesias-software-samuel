//librerarys or imports
import React from 'react';
import { Header } from '../home-element/Header';
import { Footer } from '../home-element/Footer';
import { Categorias } from './Categorias';

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : home de la aplicacion /
*/
export function Home(props) {

  //state of componets
  let state_header = Object.values(Object.values(Object.entries(props)[0][1])[0])[0];
  let state_footer = Object.values(Object.values(Object.entries(props)[0][1])[1])[0];
  let state_categorias = Object.values(Object.values(Object.entries(props)[0][1])[0])[1]; 

  console.log(state_footer,'state_footer');

  return (
      <>
        <Header properties={state_header} />
        <Footer properties={state_footer} />
        <Categorias properties={state_categorias} />
      </>
  );
  
}