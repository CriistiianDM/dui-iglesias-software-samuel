//librery or import of react
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';


//librery or import of components
import { Home } from './components/pages/Home';
import { Cargo } from './components/pages/Cargo.js'; 
import { Account } from './components/pages/Account';
import { UserInfo } from './components/pages/UserInfo';
import { PersonNormal } from './components/pages/PersonNormal';
import { A404 } from './components/pages/A404';
import { CreateUser } from './components/pages/CreateUser';
import { Grupos } from './components/pages/Grupos.js'; 
import { Asistencia } from './components/pages/Asistencia';
import { AddPersonGroup } from './components/pages/AddPersonGroup';
import { Congregacion } from './components/pages/Congregacion';


//librery or import of styles of css
import home_style from './css/home_style.css';
import re_factorizacion from './css/re_factorizacion_interfaces.css';

import json from './json/state_components.json';

//token de autenticacion
const { generateToken } = require('./components/_____/_____')



/**
  *  @author : juan sebastian camino <juan.camino@correounivalle.edu.co>
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Componente principal de la aplicacion
*/
export function App() {


  React.useEffect(() => {
    getCountries(); 
  }, []);

  
  //return the component
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home properties={json} />} />
        <Route path= "/cargo" element={<Cargo properties={json}/>} />
        <Route path="/account" element={<Account properties={json} />} />
        <Route path="/userinfo" element = {<UserInfo properties={json} />} />
        <Route path="/creyente" element = {<PersonNormal properties={json} />} />
        <Route path="/createuser" element = {<CreateUser properties={json} />} />
        <Route path="/grupo" element={<Grupos properties={json}/>}/>
        <Route path="/asistencia" element={<Asistencia properties={json}/>} />
        <Route path="/addpersongroup" element={<AddPersonGroup properties={json}/>}/>
        <Route path="/congregacion" element={<Congregacion properties={json}/>}/>
        <Route path="*" element = {<A404 />} />
      </Routes>
    </Router>

  );

}


/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : consulta para traer los nombres de los paises
*/
async function getCountries() {

   try {

    if (localStorage.getItem('countries_band') === null) {

    const response = await fetch(`https://demon789-4.herokuapp.com/zcrcp/1/''`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': generateToken()
      }
    });

    const data = await response.json();
    localStorage.setItem('countries', JSON.stringify(data));
    //return data;
    localStorage.setItem('countries_band', false);
    //console.log('entro11', localStorage.getItem('countries'));
    }

   } catch (error) {
     console.log(error); 
   }

}
