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


/*evento cuando se cieera la pagina
window.onbeforeunload = function() {
  //limpiar la cache de la pagina y limpiar el localStorage
  localStorage.clear();
  window.sessionStorage.clear();
}*/


 // create container
 const container = document.getElementById('root');

 // create root
 const root = createRoot(container);

 // render app 
 root.render(<App />);


