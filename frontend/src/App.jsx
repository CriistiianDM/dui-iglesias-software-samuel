//librery or import of react
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



//librery or import of components
import { Home } from './components/pages/Home';
import { Categorias } from './components/pages/Categorias'; 
import { Cargo } from './components/pages/Cargo'; 

//librery or import of styles of css
import home_style from './css/home_style.css';

import json from './json/state_components.json';


/**
  *  @author : juan sebastian camino <juan.camino@correounivalle.edu.co>
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Componente principal de la aplicacion
*/
export function App() {

  //return the component
  return (

    <Router basename='/dui-iglesias-software-samuel'>
      <Routes>
        <Route path="/" element={<Home properties={json} />} />
        <Route path="/categorias" element={<Categorias properties={json}/>} />
        <Route path= "/cargo" element={<Cargo properties={json}/>} />
      </Routes>
    </Router>

  );

}

