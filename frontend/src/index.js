/**
 *  @decs import libs
*/
 import React from 'react';
 import { App } from './App.jsx';
 import { createRoot } from 'react-dom/client';

/**
  *  @author : juan sebastian camino <juan.camino@correounivalle.edu.co>
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs render the app
*/



window.onbeforeunload = function() {
  localStorage.setItem('permiso_cargo',null);
   localStorage.setItem('user_login',null)
}


 // create container
 const container = document.getElementById('root');

 // create root
 const root = createRoot(container);

 // render app 
 root.render(<App />);


