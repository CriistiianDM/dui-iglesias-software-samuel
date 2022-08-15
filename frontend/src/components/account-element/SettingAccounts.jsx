//librerary or import of react
import { Button, Typography } from '@material-ui/core';
import React from 'react';
import settingStyle from '../../css/settingStyle.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Icon from '@material-ui/core/Icon';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : SettingAccounts Component
*/
export function SettingAccounts(props) {

   let state_Setting_accounts = props.properties;
   let navigate = useNavigate();
   let data = []

   if (localStorage.getItem('permiso_cargo') === 'pastor') {
      data = state_Setting_accounts['pastor'];
   } 
   else { 
      data = state_Setting_accounts['botones']
   }
  

   //useEffect 
   React.useEffect(() => {
      $('.box-setting-element-account').off('click');
      event_click(navigate);
   } , []);
   //console.log( (state_Setting_accounts['botones']).map( (boton) => (boton.id) )  );

   return (

      <div className={state_Setting_accounts['cls-1']}>

         {
            (data).map((boton) => (

               <Button key={boton.id} href={`#${boton.to}`} className={state_Setting_accounts['cls-2']} id={boton.id}>

                  <div className={state_Setting_accounts['cls-3']}>

                     <Icon className={state_Setting_accounts['cls-4']}>{boton.icon}</Icon>

                     <div className={state_Setting_accounts['cls-5']}>

                        <Typography className={state_Setting_accounts['cls-6']}>
                           {boton.title}
                        </Typography>

                        <Typography className={state_Setting_accounts['cls-7']}>
                           {boton.content}
                        </Typography>

                     </div>

                  </div>

               </Button>

            ))

         }

      </div>

   )

}



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : SettingAccounts Component
*/
function event_click(navigate) {

   //$('#btn-1').removeClass('box-setting-element-account');
   //console.log(event.target.id, event.target.key,'event_click 1');
   $('.box-setting-element-account').on('click', function(event) {
       event.preventDefault();      
       //console.log('event_click 2', $(this).attr('href').replace('#', ''));
       navigate(`${$(this).attr('href').replace('#', '')}`);
   })

}