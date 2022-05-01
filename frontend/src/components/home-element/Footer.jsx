//libreary or imports
import React from "react";
import { Button, IconButton } from '@material-ui/core';
import footer_home from '../../css/footer_home.css';
import logoIglesia from '../../images/imagesHome/logo_iglesia.png';
import logoMapa  from '../../images/imagesHome/footer-mundo.jpg';
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { red, blue } from '@material-ui/core/colors';

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : footer de la pagina /
*/
export function Footer(props) {

  let state_footer = props.properties;

  return (
    <>

      <footer className={state_footer['cls-1']}>

        <div className={state_footer['cls-2']} id="box-footer-img">
          <img className={state_footer['cls-3']} alt="" src={logoIglesia} id="img-iglesia-footer" />
        </div>

        <div className={state_footer['cls-4']}>

          <Typography variant="body1" className={state_footer['cls-5']}>
            SÍGUENOS EN NUESTRAS REDES SOCIALES
          </Typography>

          <div className={state_footer['cls-6']}>
            <IconButton target="_blank" href="https://www.youtube.com/channel/UCgq826964Ng6BvRRaFNsC8Q" aria-label="menu">
              <YouTubeIcon style={{ color: red[500] }} fontSize="large" />
            </IconButton>
            <IconButton target="_blank" href="https://www.facebook.com/IPUC.IglesiaPentecostalUnidadeColombiaOficial" aria-label="menu">
              <FacebookIcon style={{ color: blue[500] }} fontSize="large" />
            </IconButton>
            <IconButton target="_blank" href="https://www.instagram.com/ipucoficial/" aria-label="menu">
              <InstagramIcon color="secondary" fontSize="large" />
            </IconButton>
            <IconButton target="_blank" href="https://twitter.com/IpucOficial?s=08" aria-label="menu">
              <TwitterIcon style={{ color: blue[500] }} fontSize="large" />
            </IconButton>
          </div>

          <Typography variant="body1" className={state_footer['cls-5']}>
            Iglesia Pentecostal Unida de Colombia
            Carrera 45 No 16 Sur -12. Barrio – Santa María de los Ángeles
            (57 4) 444 49 52
            Política de Tratamiento de Datos
          </Typography>

        </div>

        <div className={state_footer['cls-7']}>

          <Typography variant="body1" className={state_footer['cls-5']}>
            NUESTRA PRESENCIA EN EL MUNDO
          </Typography>

          <div className={state_footer['cls-2']} id="box-footer-img-aux">
            <img className={state_footer['cls-3']} alt="" src={logoMapa} id="img-iglesia-footer-aux" />
          </div>

        </div>


        <div className={state_footer['cls-7']}>

          <Typography variant="body1" className={state_footer['cls-5']}>
            DESAROLLADO POR: 
          </Typography>

          <Typography component={'span'}  variant="body1" className={state_footer['cls-5']}>
            <ul style={{ listStyle: 'none' }}> 
            <li  style={{ textAlign: 'center' }}>Cristian Duvan Machado</li>
            <li  style={{ textAlign: 'center' }}>Juan Sebastian Camino Muños</li>
            <li  style={{ textAlign: 'center' }}>Juan Felipe osorio</li>
            </ul>
          </Typography>

        </div>

      </footer>

    </>
  )
}